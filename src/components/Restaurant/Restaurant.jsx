import { Menu } from "@/components/Menu/Menu";
import { NewReviewForm } from "@/components/NewReviewForm/NewReviewForm";
import { Rating } from "@/components/Rating/Rating";
import { Reviews } from "@/components/Reviews/Reviews";
import { useAmount } from "@/hooks/useAmount";
import React, { useMemo } from "react";

export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant || {};

  const rating = useMemo(
    () =>
      !!reviews?.length
        ? Math.floor(
            reviews.reduce((acc, review) => acc + review.rating, 0) /
              reviews.length
          )
        : 0,
    [reviews]
  );

  if (!restaurant) {
    return null;
  }

  return (
    <div>
      <h2>{name}</h2>
      <Rating value={rating} />
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
      <NewReviewForm />
    </div>
  );
};
