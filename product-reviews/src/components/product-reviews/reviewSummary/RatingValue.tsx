import { FC } from "react";
import { cn } from "../../../utils/mergeClass";

interface IRatingValueProps {
  /**
   * Rating label
   */
  label: string;
  /**
   * Rating percentage
   */
  value: number;
  /**
   * clear current applied filter
   */
  onFilter?: () => void;
  className?: string;
}

export const RatingValue: FC<IRatingValueProps> = ({
  className,
  label,
  onFilter,
  value,
}) => {
  return (
    <div
      className={cn(
        "w-full h-6 justify-start items-center gap-2 inline-flex py-2",
        className
      )}
    >
      <div className="min-w-[120px] ">
        <button
          type="button"
          onClick={onFilter}
          className="h-6 px-2 justify-start items-center gap-1.5 inline-flex text-indigo-800 text-base font-medium leading-normal focus:outline-none focus:ring focus:ring-indigo-200 rounded"
        >
          {label}
        </button>
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
    </div>
  );
};
