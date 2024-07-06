import { FC } from "react";

import { ReviewList } from "@/product-reviews/reviewList";
import { ReviewContainer } from "@/product-reviews/reviewContainer";
import { ReviewSummary } from "@/product-reviews/reviewSummary";

export const ProductReview: FC = () => {
  return (
    <ReviewContainer className="reviews-layout">
      <ReviewSummary className="review-summary" />
      <ReviewList className="review-list" />
    </ReviewContainer>
  );
};
