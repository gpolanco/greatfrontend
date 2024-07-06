import { Button } from "../components/button";
import { StarRating } from "../components/StarRating";
import { RatingValue } from "./RatingValue";
import { FC, useMemo } from "react";
import { round } from "@/utils/round";
import { ReviewType } from "../types/ReviewType";
import { cn } from "@/utils/mergeClass";
import { normalizeEnumKeyText } from "../utils/normatizeEnumKeyText";
import { ReviewSummaryPlaceholder } from "./ReviewSummaryPlaceholder";
import { useReviewContext } from "../hooks/useReviewContext";

interface IReviewSummaryProps {
  className?: string;
}

export const ReviewSummary: FC<IReviewSummaryProps> = ({ className }) => {
  const {
    loading,
    aggregate,
    handleFilter,
    handleClearFilter,
    isFilterActive,
  } = useReviewContext();

  const normalizeRatingCount = useMemo(() => {
    if (!aggregate) {
      return { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    }

    return aggregate.counts.reduce<Record<number, number>>((acc, review) => {
      return { ...acc, [review.rating]: review.count };
    }, {});
  }, [aggregate]);

  const averageRating = aggregate?.rating ?? 0;

  const calculateRatingByType = (type: ReviewType) => {
    if (!aggregate) {
      return 0;
    }

    return (normalizeRatingCount[type] / aggregate.total) * 100;
  };

  if (loading.isLoading) {
    return <ReviewSummaryPlaceholder />;
  }

  return (
    <div className={cn(className, "px-6 pb-10 lg:pb-0")}>
      <h4 className="text-neutral-900 flex justify-start text-xl font-semibold leading-7 pb-2">
        Overall Rating
      </h4>

      <div className="flex gap-2">
        <span className="text-neutral-900 text-base font-semibold leading-normal">
          {averageRating}
        </span>

        <StarRating value={averageRating} />

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
                value={round(calculateRatingByType(rating), 0)}
                onFilter={() => handleFilter(rating)}
              />
            );
          })}
      </div>

      <div className="flex justify-center gap-6">
        {isFilterActive && (
          <Button color="link" onClick={handleClearFilter}>
            Clear filter
          </Button>
        )}
        <Button>Write a review</Button>
      </div>
    </div>
  );
};
