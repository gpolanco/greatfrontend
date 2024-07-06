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
  handleLoadReviewByRating: (rating: number) => void;
  hasMore: boolean;
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

  // Hooks
  const { pageSize } = useReviewPageSize();

  // Effects
  // ------------------------------------------------------------

  /**
   * Load reviews on component mount
   */
  useEffect(() => {
    setIsLoading(true);

    getReviews({
      limit: pageSize,
      page: 1,
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
    async (rating: number) => {
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
      error,
      hasMore: reviewData?.pagination?.has_more ?? false,
      handleLoadMoreReviews,
      handleLoadReviewByRating,
      reviewToShow,
      aggregate: reviewData?.aggregate,
    };
  }, [
    error,
    handleLoadMoreReviews,
    handleLoadReviewByRating,
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
