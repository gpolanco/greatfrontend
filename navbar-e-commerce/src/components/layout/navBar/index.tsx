import { FC } from "react";

interface IMenuProps {}

export const NavBar: FC<IMenuProps> = () => {
  return (
    <div className="gap-8 ml-[103px] hidden lg:flex">
      <nav className="gap-8 ml-[103px] hidden lg:flex ">
        <a
          className="transition-colors items-center hover:text-primary"
          href="#"
        >
          Shop all
        </a>
        <a
          className="transition-colors items-center hover:text-primary"
          href="#"
        >
          Latest arrivals
        </a>
      </nav>
    </div>
  );
};
