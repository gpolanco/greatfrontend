import { Review } from "../types/Review";

export const sortReviews = (reviews: Review[]) => {
  return reviews.sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });
};
