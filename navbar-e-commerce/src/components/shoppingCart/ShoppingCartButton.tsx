import { FC } from "react";
import { IconCart } from "../icons/IconCart";

interface IShoppingCartButtonProps {}

export const ShoppingCartButton: FC<IShoppingCartButtonProps> = () => {
  return (
    <button
      type="button"
      aria-label="Shopping cart"
      className="hover:text-primary"
    >
      <IconCart size={24} />
    </button>
  );
};
