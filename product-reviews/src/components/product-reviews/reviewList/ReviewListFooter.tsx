import { FC } from "react";
import { useReviewContext } from "../hooks/useReviewContext";
import { Button } from "@/components/button";
import { cn } from "@/utils/mergeClass";
import { Alert } from "@/components/alert";

interface IReviewListFooterProps {
  className?: string;
}

export const ReviewListFooter: FC<IReviewListFooterProps> = ({ className }) => {
  const { loading, handleLoadMoreReviews, hasMore, reviewToShow } =
    useReviewContext();

  const isLoading = loading.isLoadingMore;

  if (!hasMore) {
    return (
      <Alert className="mt-4" type="info">
        No more reviews to load
      </Alert>
    );
  }

  return (
    <div className="py-6">
      <Button
        isBlock
        disabled={isLoading}
        onClick={handleLoadMoreReviews}
        className={cn("mt-4", className)}
      >
        {isLoading ? "loading..." : `Show ${reviewToShow} more reviews`}
      </Button>
    </div>
  );
};