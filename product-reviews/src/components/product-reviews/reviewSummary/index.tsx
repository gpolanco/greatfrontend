import { Review } from "@/components/product-reviews/types/Review";
import { Button } from "../../button";
import { StarRating } from "../components/StarRating";
import { RatingValue } from "./RatingValue";
import { FC, useMemo } from "react";
import { round } from "@/utils/round";
import { ReviewType } from "../types/ReviewType";
import { cn } from "@/utils/mergeClass";
import { ReviewResponseType } from "../services/core/ReviewReponseType";
import { normalizeEnumKeyText } from "../utils/normatizeEnumKeyText";
import { ReviewSummaryPlaceholder } from "./ReviewSummaryPlaceholder";

interface IReviewSummaryProps {
  reviews: Review[];
  onFilterReviews: (review: number) => void;
  className?: string;
  isLoading?: boolean;
  aggregate?: ReviewResponseType["aggregate"];
}

export const ReviewSummary: FC<IReviewSummaryProps> = ({
  reviews = [],
  onFilterReviews,
  className,
  aggregate,
  isLoading,
}) => {
  const normalizeRatingCount = useMemo(() => {
    if (!aggregate) {
      return { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    }

    return aggregate.counts.reduce<Record<number, number>>((acc, review) => {
      return { ...acc, [review.rating]: review.count };
    }, {});
  }, [aggregate]);

  const averageRating = reviews.length
    ? reviews.reduce((acc, review) => {
        return acc + review.rating;
      }, 0) / reviews.length
    : 0;

  const calculateRatingByType = (type: ReviewType) => {
    if (!aggregate) {
      return 0;
    }

    return (normalizeRatingCount[type] / aggregate.total) * 100;
  };

  if (isLoading) {
    return <ReviewSummaryPlaceholder />;
  }

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
          Based on {aggregate?.total ?? 0} reviews
        </small>
      </div>

      <div className="py-6 flex flex-col gap-4 flex-1 ">
        {aggregate?.counts
          .sort((acc, current) => current.rating - acc.rating)
          .map(({ rating }) => {
            return (
              <RatingValue
                key={rating}
                label={normalizeEnumKeyText(ReviewType[rating].toString())}
                value={round(calculateRatingByType(rating), 2)}
                onFilter={() => onFilterReviews(rating)}
              />
            );
          })}

        {/* <RatingValue
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
        /> */}
      </div>

      <div className="flex justify-center">
        <Button>Write a review</Button>
      </div>
    </div>
  );
};
