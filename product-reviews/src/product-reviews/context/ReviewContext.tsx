import {
  createContext,
  FC,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useReviewPageSize } from "../hooks/useReviewPageSize";
import { ReviewResponseType } from "../services/core/ReviewReponseType";
import { getReviews } from "../services/reviewService";

export interface ReviewContextProps {
  aggregate?: ReviewResponseType["aggregate"];
  error: string | null;
  handleLoadMoreReviews: () => void;
  handleClearFilter: () => void;
  handleFilter: (rating: number) => void;
  hasMore: boolean;
  isFilterActive: boolean;
  reviews: ReviewResponseType["data"];
  reviewToShow: number;
  loading: {
    isLoadingMore: boolean;
    isLoading: boolean;
    isFiltering: boolean;
  };
}
export const ReviewContext = createContext<ReviewContextProps | undefined>(
  undefined
);
interface ReviewProviderProps {
  children: React.ReactNode;
}

/**
 * Provider to handle the reviews state and actions
 */
export const ReviewProvider: FC<ReviewProviderProps> = ({ children }) => {
  // State
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFiltering, setIsFiltering] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [reviewData, setReviewData] = useState<ReviewResponseType | null>(null);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const params = useMemo(() => new URLSearchParams(window.location.search), []);

  // Hooks
  const { pageSize } = useReviewPageSize();

  // Effects
  // ------------------------------------------------------------

  /**
   * Load reviews on component mount
   */
  useEffect(() => {
    setIsLoading(true);

    // Check if exist rating query param
    const rating = params.get("rating")
      ? parseInt(params.get("rating")!)
      : undefined;

    if (rating) {
      setIsFilterActive(true);
    }

    // Load data
    getReviews({
      limit: pageSize,
      page: 1,
      rating,
    }).then(({ data, error, ok }) => {
      if (error) {
        setError(error);
      }

      if (ok) {
        setReviewData(data);
      }

      setIsLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Actions
  // ------------------------------------------------------------

  /**
   * Load more reviews when the user click on the load more button
   */
  const handleLoadMoreReviews = useCallback(async () => {
    const page = reviewData?.pagination?.page
      ? reviewData?.pagination?.page + 1
      : 1;

    setIsLoadingMore(true);

    const { data, error, ok } = await getReviews({
      limit: pageSize,
      page,
    });

    if (error) {
      setError(error);
    }

    if (ok) {
      setReviewData((currentState) => {
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

    setIsLoadingMore(false);
  }, [pageSize, reviewData?.pagination?.page]);

  /**
   * Load reviews by rating
   */
  const handleLoadReviewByRating = useCallback(
    async (rating?: number) => {
      setIsFiltering(true);

      const { data, error, ok } = await getReviews({
        limit: pageSize,
        page: 1,
        rating,
      });

      if (error) {
        setError(error);
      }

      if (ok) {
        setReviewData(data);
      }

      setIsFiltering(false);
    },
    [pageSize]
  );

  // FILTER PARAMS
  // ------------------------------------------------------------
  /**
   * Filter reviews by rating
   * @param rating - The rating to filter by
   */
  const handleFilter = useCallback(
    (rating: number) => {
      params.delete("rating");
      params.append("rating", rating.toString());

      setIsFilterActive(true);
      handleLoadReviewByRating(rating);

      window.history.pushState(
        {},
        "",
        `${window.location.pathname}?${params.toString()}`
      );
    },
    [handleLoadReviewByRating, params]
  );

  /**
   * Clear the filter by removing the rating query param
   */
  const handleClearFilter = useCallback(() => {
    params.delete("rating");

    setIsFilterActive(false);
    handleLoadReviewByRating();

    window.history.pushState({}, "", window.location.pathname);
  }, [handleLoadReviewByRating, params]);

  // CONTEXT VALUE
  // ------------------------------------------------------------

  /**
   * Memoized value to avoid re-renders
   */
  const value = useMemo(() => {
    /**
     * Calculate the number of reviews to show based on the page size and the total reviews
     */
    let reviewToShow = pageSize;
    if (reviewData) {
      const totalReview = reviewData.pagination.total ?? 0;
      const pendingToLoad = totalReview - reviewData.data.length;

      if (pageSize > pendingToLoad) {
        reviewToShow = pendingToLoad;
      }

      if (reviewToShow < 0) {
        reviewToShow = 0;
      }
    }

    return {
      reviews: reviewData?.data ?? [],
      loading: {
        isLoading,
        isFiltering,
        isLoadingMore,
      },
      aggregate: reviewData?.aggregate,
      error,
      handleClearFilter,
      handleFilter,
      handleLoadMoreReviews,
      handleLoadReviewByRating,
      hasMore: reviewData?.pagination?.has_more ?? false,
      isFilterActive,
      reviewToShow,
    };
  }, [
    error,
    handleClearFilter,
    handleFilter,
    handleLoadMoreReviews,
    handleLoadReviewByRating,
    isFilterActive,
    isFiltering,
    isLoading,
    isLoadingMore,
    pageSize,
    reviewData,
  ]);

  return (
    <ReviewContext.Provider value={value}>{children}</ReviewContext.Provider>
  );
};
