import { FC } from "react";
import { Review } from "@/components/product-reviews/types/Review";
import userData from "@/data/users.json";
import { User } from "@/components/product-reviews/types/User";
import { StarRating } from "../components/StarRating";

const users = userData as User[];

interface IReviewListItemProps {
  review: Review;
}

export const ReviewListItem: FC<IReviewListItemProps> = ({ review }) => {
  const user = users.find((user) => user.user_id === review.user_id);
  const avatarUrl = user?.avatar_url || null;
  const avatarName = user?.name.slice(0, 2).toUpperCase() || null;

  if (!user) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        {/* HEADER */}
        <div className="relative">
          {avatarUrl ? (
            <div className="h-12 w-12 rounded-full overflow-hidden">
              <img
                src={avatarUrl}
                alt={user?.name}
                className="w-full h-auto  object-cover"
              />
            </div>
          ) : (
            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-neutral-600 font-bold">{avatarName}</span>
            </div>
          )}
        </div>

        {/* USER */}
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-1">
            <h3 className="text-neutral-900 text-base font-semibold leading-normal">
              {user?.name}
            </h3>
            <StarRating value={review.rating} />
          </div>
          <span className="text-neutral-600 text-xs">
            {new Date(review.created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>
      </div>
      <p className="text-neutral-600 text-base font-normal">{review.content}</p>
    </div>
  );
};
