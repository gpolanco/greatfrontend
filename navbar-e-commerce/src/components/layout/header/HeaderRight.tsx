import { FC, useState } from "react";
import { ToggleMenu } from "../navBar/ToggleMenu";
import { MobileMenu } from "../navBar/MobileMenu";
import { ShoppingCartButton } from "../../shoppingCart/ShoppingCartButton";

interface IHeaderRightProps {}

export const HeaderRight: FC<IHeaderRightProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex gap-4 ml-auto">
      <ShoppingCartButton />
      <ToggleMenu onClick={handleToggleMenu} isOpen={isOpen} />
      {isOpen && <MobileMenu onClose={handleToggleMenu} />}
    </div>
  );
};
