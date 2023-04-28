import { NewReviewForm } from "@/components/NewReviewForm/NewReviewForm";
<<<<<<< HEAD
import { Rating } from "@/components/Rating/Rating";
import { RestaurantReviewsContainer } from "@/containers/RestourantReviews/RestourantReviews";
=======
>>>>>>> 24831b1ccea2d39ee5c37958571f20f48499064f
import { RestaurantMenuContainer } from "@/containers/RestaurantMenu/RestaurantMenu";
import { RestaurantReviewsContainer } from "@/containers/RestaurantReviews/RestaurantReviews";
import React from "react";

export const Restaurant = ({ restaurant }) => {
  const { name, id, reviews } = restaurant || {};

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
<<<<<<< HEAD
      <RestaurantReviewsContainer reviews={reviews} />

=======
      <RestaurantReviewsContainer restaurantId={id} />
>>>>>>> 24831b1ccea2d39ee5c37958571f20f48499064f
      <NewReviewForm />
    </div>
  );
};
