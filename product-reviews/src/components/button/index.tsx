import { cn } from "@/utils/mergeClass";
import { FC } from "react";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  isBlock?: boolean;
  color?: "primary" | "link";
}

export const Button: FC<IButtonProps> = ({
  children,
  className,
  disabled,
  isBlock,
  color = "primary",
  ...props
}) => {
  if (color === "link") {
    return (
      <button
        {...props}
        className={cn(
          "px-5 py-3 bg-white rounded justify-center items-center flex text-indigo-800   disabled:text-neutral-400 focus:outline-none focus:ring focus:ring-indigo-200",
          className,
          {
            " text-neutral-400": disabled,
            "w-full": isBlock,
          }
        )}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      {...props}
      className={cn(
        "px-5 py-3 bg-white rounded shadow border border-neutral-200 justify-center items-center gap-1.5 inline-flex hover:bg-neutral-50 active:bg-neutral-50 focus:bg-neutral-50 disabled:bg-neutral-100 disabled:cursor-not-allowed focus:outline-none focus:ring focus:ring-indigo-200",
        className,
        {
          "bg-neutral-300 text-neutral-400 leading-normal shadow-none border-none":
            disabled,
          "w-full": isBlock,
        }
      )}
    >
      {children}
    </button>
  );
};
