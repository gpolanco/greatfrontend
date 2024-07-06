import { FC } from "react";

const PlaceHolderLine = () => <div className="h-3 bg-neutral-200" />;

export const ReviewSummaryPlaceholder: FC = () => {
  return (
    <div className="flex flex-col w-full transition-opacity">
      <PlaceHolderLine />
    </div>
  );
};
