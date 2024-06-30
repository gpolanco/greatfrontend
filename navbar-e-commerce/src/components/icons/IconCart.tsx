import { FC } from "react";
import { FiShoppingBag } from "react-icons/fi";

interface IIconCartProps {
  size?: number;
}

export const IconCart: FC<IIconCartProps> = ({ size }) => {
  return <FiShoppingBag size={size} />;
};
