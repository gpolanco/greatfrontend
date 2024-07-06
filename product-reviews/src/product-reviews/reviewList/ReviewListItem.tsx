import { FC } from "react";
import { Review } from "@/product-reviews/types/Review";
import { StarRating } from "../components/StarRating";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { cn } from "@/utils/mergeClass";

interface IReviewListItemProps {
  review: Review;
}

export const ReviewListItem: FC<IReviewListItemProps> = ({ review }) => {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });

  const { user } = review;
  const avatarUrl = user?.avatar_url || null;
  const avatarName = user?.name.slice(0, 2).toUpperCase() || null;

  if (!user) {
    return null;
  }

  return (
    <div className={cn("flex flex-col gap-4")}>
      <div className="flex gap-4">
        {/* HEADER */}
        <div className="relative">
          {avatarUrl ? (
            <div
              className={cn(
                "h-12 w-12 rounded-full overflow-hidden transition-opacity ease-in duration-500 opacity-0",
                {
                  "opacity-100": entry?.isIntersecting,
                }
              )}
              ref={ref}
            >
              {entry?.isIntersecting && (
                <img
                  src={avatarUrl}
                  alt={user?.name}
                  className="w-full h-auto object-cover"
                  aria-label="user-avatar"
                />
              )}
            </div>
          ) : (
            <div
              aria-label="user-avatar-letters"
              className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center"
            >
              <span className="text-neutral-600 font-bold">{avatarName}</span>
            </div>
          )}
        </div>

        {/* USER */}
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-1">
            <h3
              aria-label="rating-user-name"
              className="text-neutral-900 text-base font-semibold leading-normal"
            >
              {user?.name}
            </h3>
            <StarRating value={review.rating} />
          </div>
          <span aria-label="rating-date" className="text-neutral-600 text-xs">
            {new Date(review.created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>
      </div>

      {/* CONTENT */}
      {review.content && (
        <p
          aria-label="rating-content"
          className="text-neutral-600 text-base font-normal"
        >
          {review.content}
        </p>
      )}
    </div>
  );
};
