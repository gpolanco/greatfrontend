import { createContext, FC } from "react";
import { Review } from "../types/Review";
import { useLoadReviews } from "../hooks/useLoadReviews";

export interface ReviewContextProps {
  reviews: Review[];
  isLoading: boolean;
  error: string | null;
  nextCountLoad: number;
  handleLoadReviews: () => void;
}

export const ReviewContext = createContext<ReviewContextProps | undefined>(
  undefined
);

interface ReviewProviderProps {
  children: React.ReactNode;
}

export const ReviewProvider: FC<ReviewProviderProps> = ({ children }) => {
  const { handleLoadReviews, isLoading, error, nextCountLoad, reviews } =
    useLoadReviews();

  return (
    <ReviewContext.Provider
      value={{
        reviews,
        isLoading,
        error,
        nextCountLoad,
        handleLoadReviews,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};
