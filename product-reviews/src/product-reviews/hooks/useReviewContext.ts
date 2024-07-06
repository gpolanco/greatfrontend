import { useContext } from "react";
import {
  ReviewContext,
  type ReviewContextProps,
} from "../context/ReviewContext";

/**
 * Hook to use the ReviewContext
 * @returns ReviewContextProps
 */
export const useReviewContext = (): ReviewContextProps => {
  const context = useContext(ReviewContext);

  if (!context) {
    throw new Error("useReviewContext must be used within a ReviewProvider");
  }

  return context;
};
