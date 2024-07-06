import { FC } from "react";

import { ReviewList } from "@/product-reviews/reviewList";
import { ReviewSummary } from "@/product-reviews/reviewSummary";
import { ReviewProvider } from "./context/ReviewContext";

export const ProductReview: FC = () => {
  return (
    <ReviewProvider>
      <div className="reviews-layout">
        <ReviewSummary className="review-summary" />
        <ReviewList className="review-list pb-8" />
      </div>
    </ReviewProvider>
  );
};
