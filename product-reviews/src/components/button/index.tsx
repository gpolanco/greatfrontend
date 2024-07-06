import { cn } from "@/utils/mergeClass";
import { FC } from "react";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  isBlock?: boolean;
}

export const Button: FC<IButtonProps> = ({
  children,
  className,
  disabled,
  isBlock,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        "px-5 py-3 bg-white rounded shadow border border-neutral-200 justify-center items-center gap-1.5 inline-flex hover:bg-neutral-50 active:bg-neutral-50 focus:bg-neutral-50 disabled:bg-neutral-100 disabled:cursor-not-allowed",
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
