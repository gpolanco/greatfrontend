import { FC } from "react";
import { Button } from "../components/button";
import { cn } from "@/utils/mergeClass";

interface IReviewSummaryButtonsProps {
  onWriteReview: () => void;
  onClearFilter: () => void;
  isFilterActive: boolean;
}

export const ReviewSummaryButtons: FC<IReviewSummaryButtonsProps> = ({
  onClearFilter,
  isFilterActive,
}) => {
  return (
    <div
      className={cn("flex justify-center sm:gap-6", {
        "flex-col sm:flex-row": isFilterActive,
      })}
    >
      {isFilterActive && (
        <Button
          className="order-2  sm:order-1"
          color="link"
          onClick={onClearFilter}
          aria-label="clear-filter-button"
        >
          Clear filter
        </Button>
      )}
      <Button
        className={cn("order-1  sm:order-2")}
        aria-label="write-review-button"
      >
        Write a review
      </Button>
    </div>
  );
};
