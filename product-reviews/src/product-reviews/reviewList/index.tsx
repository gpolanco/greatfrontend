import { FC } from "react";

import { ReviewListEmpty } from "./ReviewListEmpty";
import { cn } from "@/utils/mergeClass";
import { ReviewListItem } from "./ReviewListItem";
import { sortReviews } from "../utils/sortReviews";
import { ReviewListFooter } from "./ReviewListFooter";
import { ReviewListPlaceholder } from "./ReviewListPlaceholder";
import { useReviewContext } from "../hooks/useReviewContext";

interface IReviewListProps {
  className?: string;
}

export const ReviewList: FC<IReviewListProps> = ({ className }) => {
  const { loading, reviews } = useReviewContext();

  if (loading.isLoading) {
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
    <div
      className={cn(
        className,
        "bg-white px-8 lg:pr-8 place-self-start relative",
        {
          "opacity-60": loading.isLoadingMore || loading.isFiltering,
        }
      )}
    >
      <div className="flex flex-col gap-6">
        {sortReviews(reviews).map((review, index) => (
          <ReviewListItem key={`${review.user_id}-${index}`} review={review} />
        ))}
      </div>

      <ReviewListFooter />
    </div>
  );
};
