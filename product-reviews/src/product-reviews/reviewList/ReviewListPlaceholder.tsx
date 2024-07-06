import { FC } from "react";
import { StarRating } from "../components/StarRating";

interface IReviewListPlaceholderProps {}

const PlaceHolderLine = () => <div className="h-3 bg-neutral-200" />;

const PlaceHolderReviewItem = () => (
  <div
    aria-label="review list loading"
    className="flex flex-col gap-4 animate-pulse transition-opacity"
  >
    <div className="flex gap-4">
      <div className="relative">
        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center" />
      </div>

      <div className="flex justify-between w-full pt-2">
        <div className="flex flex-col gap-1 w-2/4">
          <PlaceHolderLine />
          <StarRating value={0} />
        </div>
        <div className="w-1/4">
          <PlaceHolderLine />
        </div>
      </div>
    </div>
    <div className="w-[90%]">
      <PlaceHolderLine />
    </div>
  </div>
);

export const ReviewListPlaceholder: FC<IReviewListPlaceholderProps> = () => {
  const reviews: number[] = Array.from({ length: 12 });

  return reviews.map((_, index) => <PlaceHolderReviewItem key={index} />);
};
