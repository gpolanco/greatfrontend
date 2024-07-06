import { useCallback, useEffect, useMemo, useState } from "react";

import { getReviews } from "../services/reviewService";
import { ReviewResponseType } from "../services/core/ReviewReponseType";
import { useReviewPageSize } from "./useReviewPageSize";

type LoadingType = {
  /**
   * Loading state for loading more reviews
   */
  isLoadingMore: boolean;
  /**
   * Loading state for initial loading reviews to show placeholder
   */
  isLoading: boolean;
  /**
   * Loading state for filtering reviews
   */
  isFiltering: boolean;
};

export const useReviewsData = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<LoadingType>({
    isLoadingMore: false,
    isLoading: false,
    isFiltering: false,
  });
  const { pageSize } = useReviewPageSize();
  const [reviewResponse, setReviewResponse] =
    useState<ReviewResponseType | null>(null);

  /**
   * Get reviews from the API
   */
  const handleGetReviews = useCallback(
    async (page = 1, rating?: number) => {
      const isLoading = !rating && page === 1;

      setLoading((state) => ({
        ...state,
        isLoading,
        isFiltering: Boolean(rating),
        isLoadingMore: page > 1,
      }));

      const { data, error, ok } = await getReviews({
        limit: pageSize,
        page,
        rating,
      });

      if (error) {
        setError(error);
      }

      if (ok) {
        setReviewResponse((currentState) => {
          if (!currentState) {
            return data;
          }

          if (data) {
            return {
              aggregate: data.aggregate,
              pagination: data.pagination,
              data: [...(currentState?.data ?? []), ...data.data],
            };
          }

          return currentState;
        });
      }

      setLoading({
        isFiltering: false,
        isLoading: false,
        isLoadingMore: false,
      });
    },
    [pageSize]
  );

  /**
   * Load reviews on component mount
   */
  useEffect(() => {
    handleGetReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Load more reviews when the user click on the load more button
   */
  const handleLoadMoreReviews = useCallback(() => {
    const page = reviewResponse?.pagination?.page
      ? reviewResponse?.pagination?.page + 1
      : 1;

    handleGetReviews(page);
  }, [handleGetReviews, reviewResponse?.pagination?.page]);

  /**
   * Load reviews by rating
   */
  const handleLoadReviewByRating = useCallback(
    (rating: number) => {
      handleGetReviews(1, rating);
    },
    [handleGetReviews]
  );

  /**
   * Calculate the number of reviews to show based on the page size and the total reviews
   */
  let reviewToShow = pageSize;
  if (reviewResponse) {
    const totalReview = reviewResponse.pagination.total ?? 0;
    const pendingToLoad = totalReview - reviewResponse.data.length;

    if (pageSize > pendingToLoad) {
      reviewToShow = pendingToLoad;
    }

    if (reviewToShow < 0) {
      reviewToShow = 0;
    }
  }

  return {
    handleLoadMoreReviews,
    handleLoadReviewByRating,
    loading,
    error,
    hasMore: !!reviewResponse?.pagination.has_more,
    reviews: reviewResponse?.data ?? [],
    reviewToShow,
  };
};
