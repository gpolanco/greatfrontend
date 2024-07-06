import { FC } from "react";
import { cn } from "../../../utils/mergeClass";

interface IRatingValueProps {
  label: string;
  /**
   * Rating percentage
   */
  value: number;
  onFilter?: () => void;
}

export const RatingValue: FC<IRatingValueProps> = ({
  label,
  value,
  onFilter,
}) => {
  return (
    <button
      type="button"
      onClick={onFilter}
      className="w-full h-6 justify-start items-center gap-2 inline-flex py-2 hover:rounded hover:bg-gray-100"
    >
      <div className="min-w-[120px] h-6 rounded justify-start items-center gap-1.5 inline-flex">
        <div className="px-0.5 justify-center items-center flex">
          <div className="text-neutral-600 text-base font-medium font-['Noto Sans'] leading-normal">
            {label}
          </div>
        </div>
      </div>

      <div className="w-full h-2 relative rounded-lg">
        <div className="w-full h-2 left-0 top-0 absolute bg-gray-200 rounded-full" />
        <div
          className={cn("h-2 left-0 top-0 absolute rounded-full", {
            "bg-green-600": value >= 40,
            "bg-green-500": value >= 25 && value < 40,
            "bg-yellow-300": value >= 15 && value < 25,
            "bg-yellow-500": value > 1 && value < 15,
            " bg-gray-200": value === 0,
          })}
          style={{ width: `${value}%` }}
        />
      </div>

      <div className="min-w-14 text-right text-neutral-600 text-base font-normal font-['Noto Sans'] leading-normal">
        {value}%
      </div>
    </button>
  );
};
