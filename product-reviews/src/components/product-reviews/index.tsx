import { FC } from "react";

import { ReviewList } from "@/components/product-reviews/reviewList";
import { ReviewContainer } from "@/components/product-reviews/reviewContainer";
import { ReviewSummary } from "@/components/product-reviews/reviewSummary";

export const ProductReview: FC = () => {
  return (
    <ReviewContainer className="reviews-layout">
      <ReviewSummary className="review-summary" />
      <ReviewList className="review-list" />
    </ReviewContainer>
  );
};
