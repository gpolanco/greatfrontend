import { createContext, FC } from "react";
import { useReviewsData } from "../hooks/useLoadReviews";

export type ReviewContextProps = ReturnType<typeof useReviewsData>;

export const ReviewContext = createContext<ReviewContextProps | undefined>(
  undefined
);

interface ReviewProviderProps {
  children: React.ReactNode;
}

export const ReviewProvider: FC<ReviewProviderProps> = ({ children }) => {
  const {
    handleLoadMoreReviews,
    handleLoadReviewByRating,
    loading,
    error,
    hasMore,
    reviews,
    reviewToShow,
  } = useReviewsData();

  return (
    <ReviewContext.Provider
      value={{
        reviews,
        loading,
        error,
        hasMore,
        handleLoadMoreReviews,
        handleLoadReviewByRating,
        reviewToShow,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};
