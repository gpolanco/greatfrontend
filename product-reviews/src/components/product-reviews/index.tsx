import { FC } from "react";

import { ReviewList } from "@/components/product-reviews/reviewList";
import { ReviewContainer } from "@/components/product-reviews/reviewContainer";
import { ReviewSummary } from "@/components/product-reviews/reviewSummary";
import { useReviewContext } from "./hooks/useReviewContext";
import { cn } from "@/utils/mergeClass";

export const ProductReview: FC = () => {
  const { reviews, loading, aggregate, handleLoadReviewByRating } =
    useReviewContext();

  return (
    <ReviewContainer className="reviews-layout">
      <ReviewSummary
        reviews={reviews}
        onFilterReviews={handleLoadReviewByRating}
        className="review-summary"
        isLoading={loading.isLoading}
        aggregate={aggregate}
      />

      <ReviewList
        isLoading={loading.isLoading}
        reviews={reviews}
        className={cn("review-list", {
          "opacity-60": loading.isLoadingMore,
        })}
      />
    </ReviewContainer>
  );
};
