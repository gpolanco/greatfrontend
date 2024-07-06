import { FC } from "react";

import { ReviewListEmpty } from "./ReviewListEmpty";
import { Review } from "@/components/product-reviews/types/Review";
import { cn } from "@/utils/mergeClass";
import { ReviewListItem } from "./ReviewListItem";
import { sortReviews } from "../utils/sortReviews";
import { ReviewListFooter } from "./ReviewListFooter";
import { ReviewListPlaceholder } from "./ReviewListPlaceholder";

interface IReviewListProps {
  reviews: Review[];
  className?: string;
  isLoading?: boolean;
}

export const ReviewList: FC<IReviewListProps> = ({
  reviews = [],
  className,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <div className={cn(className, "px-8 lg:pr-8 place-self-start relative")}>
        <div className="flex flex-col gap-6">
          <ReviewListPlaceholder />
        </div>
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className={cn(className, "p-6")}>
        <ReviewListEmpty />
      </div>
    );
  }

  return (
    <div className={cn(className, "px-8 lg:pr-8 place-self-start relative")}>
      <div className="flex flex-col gap-6">
        {sortReviews(reviews).map((review) => (
          <ReviewListItem key={review.user_id} review={review} />
        ))}
      </div>

      <ReviewListFooter />
    </div>
  );
};
