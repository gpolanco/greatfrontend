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
      aria-labelledby="modal-title"
      className="absolute w-full h-full bg-neutral-950 opacity-70 flex justify-center items-center"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed w-full h-full sm:w-[1008px]  sm:h-[80vh] flex items-center justify-center">
        <div className="bg-white fixed h-full sm:w-[1008px] sm:h-[80vh] container sm:rounded-lg z-50 overflow-y-auto">
          {/* CONTENT */}
          <div className="modal-content mx-auto h-auto text-left">
            {/* HEADER */}
            <div className="bg-white sticky top-0 z-50 flex justify-between items-center p-6">
              <h4>{title}</h4>

              <button
                type="button"
                className="w-6 h-6 focus:outline-none focus:ring focus:ring-indigo-200 rounded"
              >
                <IconClose />
              </button>
            </div>

            {/* CONTENT */}
            <div className="flex flex-1 w-full">{children}</div>

            {/* FOOTER */}
          </div>
        </div>
      </div>

      {/* <div className="bg-white h-full w-[1008px] container sm:rounded-lg flex flex-col">
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
      </div> */}
    </dialog>
  );
};
