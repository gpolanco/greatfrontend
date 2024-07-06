import { FC } from "react";

import { ReviewList } from "@/components/product-reviews/reviewList";
import { ReviewContainer } from "@/components/product-reviews/reviewContainer";
import { ReviewSummary } from "@/components/product-reviews/reviewSummary";
import { useReviewContext } from "./hooks/useReviewContext";

export const ProductReview: FC = () => {
  const { reviews, isLoading } = useReviewContext();
  console.log({ reviews });

  return (
    <ReviewContainer className="reviews-layout">
      <ReviewSummary
        reviews={reviews}
        onFilterReviews={console.log}
        className="review-summary"
        isLoading={isLoading}
      />

      <ReviewList
        isLoading={isLoading}
        reviews={reviews}
        className="review-list"
      />
    </ReviewContainer>
  );
};
