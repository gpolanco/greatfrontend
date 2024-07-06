import { ChatSmileLine } from "@/components/icons/ChatSmileLine";
import { FC } from "react";

interface IReviewListEmptyProps {}

export const ReviewListEmpty: FC<IReviewListEmptyProps> = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-12 h-12 mb-5 flex justify-center items-center text-indigo-700 bg-white rounded-full shadow">
        <ChatSmileLine size={24} />
      </div>

      <div className="w-64 h-14 flex flex-col justify-center items-center gap-2">
        <div className="text-center pb-2 text-neutral-900 text-xl font-medium font-['Noto Sans'] leading-7">
          No reviews yet!
        </div>
        <div className="text-center text-neutral-900 text-base font-normal font-['Noto Sans'] leading-normal">
          Be the first to review this product
        </div>
      </div>
    </div>
  );
};
