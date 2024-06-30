import { FC } from "react";
import { LuMenu } from "react-icons/lu";

interface IIconMenuProps {
  size?: number;
}

export const IconMenu: FC<IIconMenuProps> = ({ size = 24 }) => {
  return <LuMenu size={size} />;
};
