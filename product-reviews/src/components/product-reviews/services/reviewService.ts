import { ApiResponseType } from "./core/ApiResponseType";
import { ReviewResponseType } from "./core/ReviewReponseType";

const REVIEWS_ENDPOINT =
  "https://www.greatfrontend.com/api/projects/challenges/e-commerce/products/voyager-hoodie/reviews";

interface GetReviewParams {
  page?: number;
  limit?: number;
  rating?: number;
}

interface GetReviewType {
  (params: GetReviewParams | undefined): Promise<
    ApiResponseType<ReviewResponseType | null>
  >;
}

const defaultParams: GetReviewParams = { limit: 12, page: 1 };

/**
 * Fetch reviews from the API
 *
 * @param GetReviewParams
 * @param GetReviewParams.limit - The number of reviews to return
 * @param GetReviewParams.page - The page number of reviews to return
 * @param GetReviewParams.rating - The rating of reviews to return
 *
 * @returns `Review[]`
 */
const getReviews: GetReviewType = async (params = defaultParams) => {
  try {
    const url = new URL(REVIEWS_ENDPOINT);

    if (params) {
      if (params.limit) {
        url.searchParams.set("per_page", params.limit.toString());
      }

      if (params.page) {
        url.searchParams.set("page", params.page.toString());
      }

      if (params.rating) {
        url.searchParams.set("rating", params.rating.toString());
      }
    }

    const request = await fetch(url);

    const response = await request.json();

    return new ApiResponseType<ReviewResponseType>(response, null);
  } catch (error) {
    if (error instanceof Error) {
      return new ApiResponseType<ReviewResponseType | null>(
        null,
        error.message
      );
    }

    return new ApiResponseType<ReviewResponseType | null>(
      null,
      "Error loading reviews"
    );
  }
};

export { getReviews };
