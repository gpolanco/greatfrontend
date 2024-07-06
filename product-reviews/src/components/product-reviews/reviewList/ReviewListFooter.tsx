import { FC } from "react";
import { useReviewContext } from "../hooks/useReviewContext";
import { Button } from "@/components/button";
import { cn } from "@/utils/mergeClass";

interface IReviewListFooterProps {
  className?: string;
}

export const ReviewListFooter: FC<IReviewListFooterProps> = ({ className }) => {
  const { isLoading, handleLoadReviews, nextCountLoad } = useReviewContext();

  return (
    <div className="py-6">
      <Button
        isBlock
        disabled={isLoading}
        onClick={handleLoadReviews}
        className={cn("mt-4", className)}
      >
        {isLoading ? "loading..." : `Show ${nextCountLoad} more reviews`}
      </Button>
    </div>
  );
};
