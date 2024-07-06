import { useEffect, useState } from "react";

import { Review } from "@/components/product-reviews/types/Review";

import data from "@/data/product-reviews.json";
const reviewsData = data as Review[];

export const useLoadReviews = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nextCountLoad, setNextCountLoad] = useState(12);
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setReviews(reviewsData.slice(0, nextCountLoad));
    }, 3000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLoadReviews = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setReviews((currentReviews) => [
        ...currentReviews,
        ...reviewsData.slice(nextCountLoad, nextCountLoad * 2),
      ]);
    }, 3000);
  };

  return {
    handleLoadReviews,
    isLoading,
    error: null,
    nextCountLoad,
    reviews,
  };
};
