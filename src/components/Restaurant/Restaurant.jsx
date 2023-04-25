import { NewReviewForm } from "@/components/NewReviewForm/NewReviewForm";
import { RestaurantMenuContainer } from "@/containers/RestaurantMenu/RestaurantMenu";
import { ReviewsContainer } from "@/containers/Reviews/Reviews";
import React, { useMemo } from "react";

export const Restaurant = ({ restaurant }) => {
  const { name, id } = restaurant || {};

  // const rating = useMemo(
  //   () =>
  //     !!reviews?.length
  //       ? Math.floor(
  //           reviews.reduce((acc, review) => acc + review.rating, 0) /
  //             reviews.length
  //         )
  //       : 0,
  //   [reviews]
  // );

  return (
    <div>
      <h2>{name}</h2>
      {/* <Rating value={rating} /> */}
      <RestaurantMenuContainer restaurantId={id} />
      <ReviewsContainer restaurantId={id} />
      <NewReviewForm />
    </div>
  );
};
