import { Request, Response } from "express";
import { matchedData, validationResult } from "express-validator";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import * as sharp from "sharp";
import * as _ from "lodash";
import { prisma } from "../prisma/client";
import { uploadFileToS3 } from "../services/s3";

export default class UserController {
  static async register(req: Request, res: Response) {
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

    if (body.secret !== process.env.JWT_SECRET) {
      res.json({
        success: false,
        message:
          "Failed to validate the secret key. Please contact the administrator for further assistance.",
      });
      return;
    }

    const existingUser = await prisma.users.findUnique({
      where: {
        name: body.name,
      },
    });

    if (existingUser) {
      res.json({
        success: false,
        message: `The user with the name '${body.name}' already exists`,
      });
      return;
    }

    // Hash the user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(body.password, salt);

    // Create a JWT token for the third-party integration
    const token = jwt.sign({ name: body.name }, process.env.JWT_SECRET!);

    const avatarBuffer = await sharp(req.file?.buffer)
      .resize(256, 256)
      .toFormat("jpeg")
      .jpeg({ quality: 80 })
      .toBuffer();

    const {
      success: isFileUploadSuccess,
      url: fileURL,
      error: fileUploadError,
    } = await uploadFileToS3(
      "avatars",
      undefined,
      avatarBuffer,
      ".jpeg",
      "image/jpeg"
    );

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

    const newUser = await prisma.users.create({
      data: {
        name: body.name,
        groupId: Number(body.groupId),
        color: body.color,
        avatar: fileURL,
        password: hashedPassword,
        token,
      },
    });

    res.json({
      success: true,
      message: "Successfully created a new account!",
      data: newUser,
      token,
    });
  }

  static async login(req: Request, res: Response) {
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

    const user = await prisma.users.findUnique({
      where: {
        name: body.name,
      },
    });

    if (!user) {
      res.json({
        success: false,
        message: `The user with the name '${body.name}' does not exist.`,
      });
      return;
    }

    const isMatch = await bcrypt.compare(body.password, user.password);

    if (isMatch) {
      const payload = {
        id: user.id,
        name: user.name,
        color: user.color,
        avatar: user.avatar,
        groupId: user.groupId,
        token: user.token,
        isAdmin: user.isAdmin,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET!, {
        expiresIn: 3600 * 24 * 30,
      }); // 30 days
      res.cookie("token", token, { httpOnly: true });

      res.json({
        success: true,
        message: "Login Successful!",
        token,
      });
    } else {
      res.json({
        success: false,
        message: "Password is incorrect.",
      });
    }
  }

  static async updateInfo(req: Request, res: Response) {
    const errors = validationResult(req).array();

    if (errors.length > 0) {
      res.json({
        success: false,
        message: "Form data error occured during the validation.",
        errors,
      });
      return;
    }

    const userId = (req.user as { id: number }).id;
    const body = matchedData(req);

    const user = await prisma.users.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      res.json({
        success: false,
        message: "Cannot find the user with the given ID.",
      });
      return;
    }

    // Upload the new avatar to S3 bucket if provided
    if (req.file) {
      const avatarBuffer = await sharp(req.file.buffer)
        .resize(256, 256)
        .toFormat("jpeg")
        .jpeg({ quality: 80 })
        .toBuffer();

      const {
        success: isFileUploadSuccess,
        url: fileURL,
        error: fileUploadError,
      } = await uploadFileToS3(
        "avatars",
        undefined,
        avatarBuffer,
        ".jpeg",
        "image/jpeg"
      );

      if (!isFileUploadSuccess) {
        res.json({
          success: false,
          error: fileUploadError,
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

      body.avatar = fileURL;
    }

    const updatedUser = await prisma.users.update({
      where: { id: user.id },
      data: {
        name: body.name || user.name,
        color: body.color || user.color,
        groupId: body.groupId ? Number(body.groupId) : user.groupId,
        avatar: body.avatar || user.avatar,
      },
    });

    res.json({
      success: true,
      message: "Successfully updated the user profile information.",
      data: updatedUser,
    });
  }

  static async updatePassword(req: Request, res: Response) {
    const errors = validationResult(req).array();

    if (errors.length > 0) {
      res.json({
        success: false,
        message: "Form data error occured during the validation.",
        errors,
      });
      return;
    }

    const userId = (req.user as { id: number }).id;
    const body = matchedData(req);

    const user = await prisma.users.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      res.json({
        success: false,
        message: "Cannot find the user with the given ID.",
      });
      return;
    }

    // Check if the current password matches
    const isMatch = await bcrypt.compare(body.currentPassword, user.password);
    if (!isMatch) {
      res.json({
        success: false,
        message: "Current password is incorrect.",
      });
      return;
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(body.newPassword, salt);

    await prisma.users.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
      },
    });

    res.json({
      success: true,
      message: "Successfully updated the user password.",
    });
  }

  static async accessToken(req: Request, res: Response) {
    res.json({
      success: true,
      data: _.pick(req.user, [
        "id",
        "name",
        "avatar",
        "groupId",
        "color",
        "token",
        "isAdmin",
      ]),
    });
  }
}
