import { cn } from "@/utils/mergeClass";
import { FC, ReactNode } from "react";

interface IReviewContainerProps {
  className?: string;
  children: ReactNode;
}

export const ReviewContainer: FC<IReviewContainerProps> = ({
  children,
  className,
}) => {
  return <div className={cn(className)}>{children}</div>;
};
