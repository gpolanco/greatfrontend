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
      className={cn("flex justify-center sm:gap-6 w-full", {
        "flex-col sm:flex-row": isFilterActive,
      })}
    >
      {isFilterActive && (
        <Button
          className="w-full sm:w-auto order-2  sm:order-1"
          color="link"
          onClick={onClearFilter}
        >
          Clear filter
        </Button>
      )}
      <Button
        className={cn(
          "w-full order-1  sm:order-2 rounded-none shadow-none sm:rounded sm:w-auto sm:shadow",
          { "sm:w-2/4": isFilterActive }
        )}
      >
        Write a review
      </Button>
    </div>
  );
};
