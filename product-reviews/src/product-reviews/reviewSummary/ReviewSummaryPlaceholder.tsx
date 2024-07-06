import { cn } from "@/utils/mergeClass";
import { FC } from "react";
import { StarRating } from "../components/StarRating";

const PlaceHolderLine: FC<{ className?: string }> = ({ className }) => (
  <div className={cn("h-3 bg-neutral-200", className)} />
);

export const ReviewSummaryPlaceholder: FC = () => {
  return (
    <div
      aria-label="review summary loading"
      className="flex flex-col w-full px-6 transition-opacity"
    >
      <div className="flex flex-col  gap-2">
        <PlaceHolderLine className="w-1/2" />
        <div className="flex items-center gap-2">
          <StarRating value={0} />
          <PlaceHolderLine className="ml-auto w-3/4" />
        </div>
      </div>
      <div className="py-4" />
      {[1, 2, 3, 4, 5].map((rating) => (
        <div className="flex gap-2 my-4" key={rating}>
          <PlaceHolderLine className="ml-auto w-3/12" />
          <PlaceHolderLine className="ml-auto w-6/12" />
          <PlaceHolderLine className="ml-auto w-2/12" />
        </div>
      ))}

      <PlaceHolderLine className="mx-auto mt-4 w-6/12 h-10" />
    </div>
  );
};
