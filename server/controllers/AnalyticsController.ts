import { Request, Response } from "express";
import { AnalyticsScope } from "../utils/enums";
import {
  getInterviewAnalytics,
  getJobApplyAnalytics,
  getJobOfferAnalytics,
} from "../services/analytics";
import { getDateRange } from "../utils/functions";
import { DEFAULT_TIMEZONE } from "../utils/constants";

export default class AnalyticsController {
  static async getAnalytics(req: Request, res: Response) {
    const scope = (req.query.scope as AnalyticsScope) || AnalyticsScope.ALL;
    const timezone = (req.query.timezone as string) || DEFAULT_TIMEZONE;

    const { fromDate, endDate } = getDateRange(scope, timezone);

    if (!Object.values(AnalyticsScope).includes(scope)) {
      res.status(400).json({
        success: false,
        message: "Invalid scope provided.",
      });
      return;
    }

    const [topApplicants, groupApplicants, allApplicants] =
      await getJobApplyAnalytics(fromDate, endDate);
    const [topInterviews, groupInterviews, allInterviews] =
      await getInterviewAnalytics(fromDate, endDate);
    const [topOffers, groupOffers, allOffers] = await getJobOfferAnalytics(
      fromDate,
      endDate
    );

    res.json({
      success: true,
      message: "Successfully retrieved analytics data.",
      data: {
        topApplicants,
        groupApplicants,
        allApplicants,
        topInterviews,
        groupInterviews,
        allInterviews,
        topOffers,
        groupOffers,
        allOffers,
      },
    });
  }
}
