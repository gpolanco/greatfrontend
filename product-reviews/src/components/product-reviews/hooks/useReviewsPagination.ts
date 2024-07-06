import { useEffect, useState } from "react";
import { Review } from "../types/Review";

/**
 * Pagination:
Page size: 12 for desktop, 10 for mobile and tablet.
"See 'X' more reviews": Button appears when there are more reviews to show. If the user is viewing the last set of reviews, the button should become hidden. The label on the button should dynamically reflect the number of reviews that will be loaded upon clicking. For example, if there are only 5 reviews left to show, the button should read "Show 5 more reviews".
 */
export const useReviewsPagination = () => {
  const [nextCountLoad, setNextCountLoad] = useState(12);

  return {
    nextCountLoad,
  };
};
