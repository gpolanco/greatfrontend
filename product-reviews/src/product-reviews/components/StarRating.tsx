import { FC, ReactNode } from "react";
import { IconStar } from "./icons/IconStar";

interface IStarRatingProps {
  value: number;
}

export const StarRating: FC<IStarRatingProps> = ({ value }) => {
  const stars: ReactNode[] = [];

  for (let i = 0; i < 5; i++) {
    // Comprobar si el valor es suficiente para una estrella completa
    if (value >= i + 1) {
      stars.push(<IconStar key={i} type="full" />);
    }
    // Comprobar si el valor decimal es >= .5 y si estamos en la estrella que corresponde al entero del valor
    else if (Math.floor(value) === i && value % 1 >= 0.5) {
      stars.push(<IconStar key={i} type="half" />);
    }
    // En caso contrario, la estrella es vacía
    else {
      stars.push(<IconStar key={i} type="empty" />);
    }
  }

  return <div className="flex gap-1">{stars.map((star) => star)}</div>;
};
