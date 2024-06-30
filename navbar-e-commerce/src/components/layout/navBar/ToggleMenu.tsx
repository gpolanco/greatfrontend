import { FC } from "react";
import { IconClose } from "../../icons/IconClose";
import { IconMenu } from "../../icons/IconMenu";

interface IToggleMenuProps {
  onClick: () => void;
  isOpen: boolean;
}

export const ToggleMenu: FC<IToggleMenuProps> = ({ onClick, isOpen }) => {
  return (
    <button
      className="lg:hidden hover:text-primary"
      aria-label="Open mobile menu"
      id="mobile-menu-button"
      onClick={onClick}
    >
      {isOpen ? <IconClose /> : <IconMenu />}
    </button>
  );
};
