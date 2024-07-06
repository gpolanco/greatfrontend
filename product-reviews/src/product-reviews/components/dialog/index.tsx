import { FC } from "react";
import { IconClose } from "../icons/IconClose";

interface IDialogProps {
  children: React.ReactNode;
  onClose?: () => void;
  title?: string;
  isOpen?: boolean;
}

export const Dialog: FC<IDialogProps> = ({
  children,
  title,
  onClose,
  isOpen,
}) => {
  if (!isOpen) return null;

  return (
    <dialog
      open
      onClose={onClose}
      className="w-screen h-screen opacity-70 flex items-start justify-center bg-neutral-950 sm:p-4"
    >
      <div className="bg-white h-full w-[1008px] container sm:rounded-lg flex flex-col">
        <div className="flex justify-between p-6">
          <h4>{title}</h4>

          <button
            type="button"
            className="w-6 h-6 focus:outline-none focus:ring focus:ring-indigo-200 rounded"
          >
            <IconClose />
          </button>
        </div>

        <div className="flex flex-1 w-full">{children}</div>
      </div>
    </dialog>
  );
};