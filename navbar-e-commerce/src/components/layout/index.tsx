import { FC, ReactNode } from "react";
import { Header } from "./header";
import { Credits } from "./Credits";

interface ILayoutProps {
  children?: ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="container">
      <Header />
      {children ? <main>{children}</main> : null}
      <Credits />
    </div>
  );
};
