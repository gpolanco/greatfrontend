import { FC } from "react";
import { createPortal } from "react-dom";
import { Logo } from "../../Logo";
import { IconClose } from "../../icons/IconClose";

interface IMobileMenuProps {
  onClose: () => void;
}

export const MobileMenu: FC<IMobileMenuProps> = ({ onClose }) => {
  return createPortal(
    <div
      onClick={onClose}
      className="w-full h-screen bg-neutral-950/70 z-10 absolute top-0 pr-8"
    >
      <div className="bg-white h-screen pt-8 px-4 pb-4">
        <div className="flex justify-between mb-6">
          <Logo />
          <button
            aria-label="Open mobile menu"
            id="mobile-menu-button"
            onClick={onClose}
            className="hover:text-primary"
          >
            <IconClose />
          </button>
        </div>

        <nav className="flex flex-col">
          <a
            className="items-center block w-full px-3 py-3 hover:text-primary"
            href="#"
          >
            Shop all
          </a>
          <a
            className="items-center block w-full px-3 py-3 hover:text-primary"
            href="#"
          >
            Latest arrivals
          </a>
        </nav>
      </div>
    </div>,
    document.body
  );
};
