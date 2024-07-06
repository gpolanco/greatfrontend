import { useContext } from "react";
import {
  ReviewContext,
  type ReviewContextProps,
} from "../content/ReviewContext";

export const useReviewContext = (): ReviewContextProps => {
  const context = useContext(ReviewContext);

  if (!context) {
    throw new Error("useReviewContext must be used within a ReviewProvider");
  }

  return context;
};
