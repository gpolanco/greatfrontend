import { FC } from "react";

interface ILogoProps {
  isLink?: boolean;
}

export const Logo: FC<ILogoProps> = ({ isLink }) => {
  if (isLink)
    return (
      <a href="/" className="Logo">
        <img src="/logo.svg" className="w-[105px] h-8" alt="Logo" />
      </a>
    );

  return <img src="/logo.svg" className="w-[105px] h-8" alt="Logo" />;
};
