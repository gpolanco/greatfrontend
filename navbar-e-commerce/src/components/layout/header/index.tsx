import { FC } from "react";
import { Logo } from "../../Logo";
import { HeaderRight } from "./HeaderRight.tsx";
import { NavBar } from "../navBar/index.tsx";

interface IHeaderProps {}

export const Header: FC<IHeaderProps> = () => {
  return (
    <div className="flex items-center h-[68px] pt-4">
      <Logo isLink />

      <NavBar />

      <HeaderRight />
    </div>
  );
};
