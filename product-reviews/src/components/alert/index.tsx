import { cn } from "@/utils/mergeClass";
import { FC, ReactNode } from "react";
import { CiWarning } from "react-icons/ci";
import { MdOutlineInfo } from "react-icons/md";

interface IAlertProps {
  children?: ReactNode;
  type?: "error" | "warning" | "info";
  align?: "center" | "left" | "right";
  className?: string;
}

export const Alert: FC<IAlertProps> = ({
  children,
  type = "error",
  align = "center",
  className,
}) => {
  if (!children) {
    return null;
  }

  let icon = null;

  if (type === "error" || type === "warning") {
    icon = <CiWarning className="mr-2" />;
  }

  if (type === "info") {
    icon = <MdOutlineInfo className="mr-2" />;
  }

  return (
    <div
      className={cn("p-2 rounded", className, {
        "bg-red-300 text-red-800": type === "error",
        "bg-yellow-300 text-yellow-800": type === "warning",
        "bg-blue-100 text-blue-500": type === "info",
        "flex items-center justify-center": align === "center",
      })}
    >
      {icon}
      {children}
    </div>
  );
};
