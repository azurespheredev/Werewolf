import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import * as Sentry from "@sentry/node";
import { uploadFileToS3 } from "../services/s3";
import { matchedData, validationResult } from "express-validator";
import { prisma } from "../prisma/client";
import { AnalyticsScope } from "../utils/enums";
import { getDateRange } from "../utils/functions";
import { JobsList } from "../types/job";
import {
  sendOfferLetterToArchievementChannel,
  sendTerminationMessageToArchievementChannel,
} from "../services/discord";
import { DEFAULT_TIMEZONE } from "../utils/constants";

export default class JobController {
  static async createOffer(req: Request, res: Response) {
    const errors = validationResult(req).array();

    if (errors.length > 0) {
      res.json({
        success: false,
        message: "Form data error occured during the validation.",
        errors,
      });
      return;
    }

    const body = matchedData(req);
    const file = req.file;
    const userId = (req.user as { id: number }).id;

    const user = await prisma.users.findUnique({
      where: { id: userId },
    });

    if (!user) {
      res.json({
        success: false,
        message: "Cannot find the user with the provided ID.",
      });
      return;
    }

    if (!file) {
      res.json({
        success: false,
        message: "Cannot find the file uploaded.",
      });
      return;
    }

    const {
      success: isFileUploadSuccess,
      url: fileURL,
      error: fileUploadError,
    } = await uploadFileToS3("documents", file);

    if (!isFileUploadSuccess) {
      res.json({
        success: false,
        message: fileUploadError,
      });
      return;
    }

    if (!fileURL) {
      res.json({
        success: false,
        message: "Failed to retrieve a file URL from the S3 bucket.",
      });
      return;
    }

    const newJobOffer = await prisma.job_offers.create({
      data: {
        userId,
        companyName: body.companyName,
        position: body.position,
        salary: body.salary,
        jobType: body.jobType,
        source: body.source,
        interviews: Number(body.interviews),
        receivedAt: new Date(body.receivedAt),
        startAt: body.startAt ? new Date(body.startAt) : null,
        fileURL: fileURL,
      },
    });

    await sendOfferLetterToArchievementChannel({
      userName: user.name,
      companyName: body.companyName,
      position: body.position,
      jobType: body.jobType,
      source: body.source,
      interviews: Number(body.interviews),
      receivedAt: newJobOffer.receivedAt,
      startAt: newJobOffer.startAt,
      fileURL: newJobOffer.fileURL,
    });

    await prisma.jobs.create({
      data: {
        userId,
        companyName: body.companyName,
        position: body.position,
        startedAt: body.startAt ? new Date(body.startAt) : null,
      },
    });

    res.json({
      success: true,
      message: "Successfully created a job offer record.",
      data: newJobOffer,
    });
  }

  static async createJobApplication(req: Request, res: Response) {
    const errors = validationResult(req).array();

    if (errors.length > 0) {
      res.json({
        success: false,
        message: "Form data error occured during the validation.",
        errors,
      });
      return;
    }

    const body = matchedData(req);

    let decoded;
    try {
      decoded = jwt.verify(body.token, process.env.JWT_SECRET!);
    } catch (err) {
      console.error("🔴 JWT verification failed:", err);

      res.status(401).json({
        success: false,
        message: "Invalid or expired Jiracoders token.",
      });
      return;
    }

    const { name } = decoded as { name: string };

    const user = await prisma.users.findUnique({
      where: {
        name,
      },
    });

    if (!user) {
      console.error("🔴 User not found for token: ", body.token);

      res.status(404).json({
        success: false,
        message: "Cannot find the user with the provided token.",
      });
      return;
    }

    try {
      const newJobApplication = await prisma.job_applications.create({
        data: {
          userId: user.id,
          companyName: body.companyName,
          position: body.position,
        },
      });

      res.json({
        success: true,
        message: "Successfully created a job application record.",
        data: newJobApplication,
      });
    } catch (error) {
      console.error("🔴 Error creating job application:", error);
      Sentry.captureException(
        new Error(`Error creating job application: ${error}`)
      );
      res.json({
        success: false,
        message:
          "Failed to create the job application record. Please try again later.",
      });
    }
  }

  static async createJob(req: Request, res: Response) {
    const errors = validationResult(req).array();

    if (errors.length > 0) {
      res.json({
        success: false,
        message: "Form data error occurred during the validation.",
        errors,
      });
      return;
    }

    const body = matchedData(req);
    const userId = (req.user as { id: number }).id;

    const isExistingJob = await prisma.jobs.findFirst({
      where: {
        userId,
        companyName: body.companyName,
        position: body.position,
      },
    });

    if (isExistingJob) {
      res.json({
        success: false,
        message: "You already have a job record for this company and position.",
      });
      return;
    }

    try {
      await prisma.jobs.create({
        data: {
          userId,
          companyName: body.companyName,
          position: body.position,
          startedAt: new Date(body.startedAt),
        },
      });

      res.json({
        success: true,
        message: "Successfully created a job record.",
      });
    } catch (error) {
      console.error("🔴 Error creating job:", error);
      res.json({
        success: false,
        message: "Failed to create the job record. Please try again later.",
      });
    }
  }

  static async getJobs(_: Request, res: Response) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const result: JobsList[] = [];

    const users = await prisma.users.findMany({
      where: {
        isAdmin: false,
      },
    });

    const jobs = await prisma.jobs.findMany({
      orderBy: {
        startedAt: "desc",
      },
      where: {
        startedAt: {
          not: null,
          lte: today,
        },
        isActive: true,
      },
    });

    users.forEach((user) => {
      const userJobs = jobs.filter((job) => job.userId === user.id);
      result.push({
        user: {
          id: user.id,
          name: user.name,
          avatar: user.avatar,
        },
        jobs: userJobs,
      });
    });

    res.json({
      success: true,
      data: result.sort((a, b) => b.jobs.length - a.jobs.length),
    });
  }

  static async getOffers(req: Request, res: Response) {
    const scope = (req.query.scope as AnalyticsScope) || AnalyticsScope.ALL;
    const timezone = (req.query.timezone as string) || DEFAULT_TIMEZONE;

    const { fromDate } = getDateRange(scope, timezone);

    const userId = (req.user as { id: number }).id;
    const user = await prisma.users.findUnique({
      where: { id: userId },
      select: {
        isAdmin: true,
      },
    });

    try {
      const jobOffers = await prisma.job_offers.findMany({
        include: {
          user: {
            select: {
              name: true,
              avatar: true,
            },
          },
        },
        orderBy: {
          receivedAt: "desc",
        },
        where: {
          ...(fromDate && { receivedAt: { gte: fromDate } }),
        },
      });

      res.json({
        success: true,
        message: "Successfully retrieved job offers.",
        data: jobOffers.map((offer) => {
          if (user?.isAdmin) {
            return offer;
          } else {
            return {
              ...offer,
              salary: null, // Hide salary for non-admin users
            };
          }
        }),
      });
    } catch (error) {
      console.error("🔴 Error retrieving job offers:", error);
      res.json({
        success: false,
        message: "Failed to retrieve job offers.",
      });
    }
  }

  static async getApplications(req: Request, res: Response) {
    const page = (req.query.page as string) || 1;
    const limit = (req.query.limit as string) || 50;
    const keyword = (req.query.keyword as string) || "";

    const totalCount = await prisma.job_applications.count({
      where: {
        companyName: {
          contains: keyword,
          mode: "insensitive",
        },
      },
    });

    try {
      const jobApplications = await prisma.job_applications.findMany({
        include: {
          user: {
            select: {
              name: true,
              avatar: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
        where: {
          companyName: {
            contains: keyword,
            mode: "insensitive",
          },
        },
        skip: (Number(page) - 1) * Number(limit),
        take: Number(limit),
      });

      res.json({
        success: true,
        message: "Successfully retrieved job applications.",
        data: jobApplications,
        count: totalCount,
      });
    } catch (error) {
      console.error("🔴 Error retrieving job applications:", error);
      res.json({
        success: false,
        message: "Failed to retrieve job applications.",
      });
    }
  }

  static async deleteOffer(req: Request, res: Response) {
    const id = req.params.id;

    try {
      await prisma.job_offers.delete({
        where: {
          id: Number(id),
        },
      });

      res.json({
        success: true,
        message: "Deleted the job offer from the list.",
      });
    } catch (error) {
      console.error("🔴 Error deleting job offer:", error);
      res.json({
        success: false,
        message: "Failed to delete the job offer.",
      });
    }
  }

  static async terminateJob(req: Request, res: Response) {
    const id = req.params.id;

    const errors = validationResult(req).array();

    if (errors.length > 0) {
      res.json({
        success: false,
        message: "Form data error occurred during the validation.",
        errors,
      });
      return;
    }

    const body = matchedData(req);

    try {
      const updatedJob = await prisma.jobs.update({
        where: {
          id: Number(id),
        },
        data: {
          isActive: false,
          comments: body.comments,
        },
      });

      await sendTerminationMessageToArchievementChannel({
        userName: (req.user as { name: string }).name,
        companyName: updatedJob.companyName,
        position: updatedJob.position,
        startedAt: updatedJob.startedAt,
        reason: body.comments,
      });

      res.json({
        success: true,
        message: "The job has been successfully terminated.",
      });
    } catch (error) {
      console.error("🔴 Error terminating job:", error);
      res.json({
        success: false,
        message: "Failed to terminate the job.",
      });
    }
  }
}
