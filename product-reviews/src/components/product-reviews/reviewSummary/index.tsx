import { Review } from "@/components/product-reviews/types/Review";
import { Button } from "../../button";
import { StarRating } from "../components/StarRating";
import { RatingValue } from "./RatingValue";
import { FC } from "react";
import { round } from "@/utils/round";
import { ReviewType } from "../types/ReviewType";
import { cn } from "@/utils/mergeClass";

interface IReviewSummaryProps {
  reviews: Review[];
  onFilterReviews: (type: ReviewType) => void;
  className?: string;
  isLoading?: boolean;
}

export const ReviewSummary: FC<IReviewSummaryProps> = ({
  reviews = [],
  onFilterReviews,
  className,
}) => {
  const averageRating = reviews.length
    ? reviews.reduce((acc, review) => {
        return acc + review.rating;
      }, 0) / reviews.length
    : 0;

  const calculateRatingByType = (type: ReviewType) => {
    if (reviews.length === 0) {
      return 0;
    }

    return (
      (reviews.filter((review) => review.rating === type).length /
        reviews.length) *
      100
    );
  };

  return (
    <div className={cn(className, "px-6 pb-10 lg:pb-0")}>
      <h4 className="text-neutral-900 flex justify-start text-xl font-semibold leading-7 pb-2">
        Overall Rating
      </h4>

      <div className="flex gap-2">
        <span className="text-neutral-900 text-base font-semibold leading-normal">
          {round(averageRating, 1)}
        </span>

        <StarRating value={round(averageRating, 1)} />

        <small className="text-neutral-600 text-sm font-normal leading-tight">
          Based on {reviews.length} reviews
        </small>
      </div>

      <div className="py-6 flex flex-col gap-4 flex-1 ">
        <RatingValue
          label="Excellent"
          value={round(calculateRatingByType(ReviewType.Excellent), 2)}
          onFilter={() => onFilterReviews(ReviewType.Excellent)}
        />
        <RatingValue
          label="Good"
          value={round(calculateRatingByType(ReviewType.Good), 2)}
          onFilter={() => onFilterReviews(ReviewType.Good)}
        />
        <RatingValue
          label="Average"
          value={round(calculateRatingByType(ReviewType.Average), 2)}
          onFilter={() => onFilterReviews(ReviewType.Average)}
        />
        <RatingValue
          label="Below Average"
          value={round(calculateRatingByType(ReviewType.BelowAverage), 2)}
          onFilter={() => onFilterReviews(ReviewType.BelowAverage)}
        />
        <RatingValue
          label="Poor"
          value={round(calculateRatingByType(ReviewType.Poor), 2)}
          onFilter={() => onFilterReviews(ReviewType.Poor)}
        />
      </div>

      <div className="flex justify-center">
        <Button>Write a review</Button>
      </div>
    </div>
  );
};
