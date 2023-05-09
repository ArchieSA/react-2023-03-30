import { Reviews } from "@/components/Reviews/Reviews";
import { selectReviewById } from "@/store/entities/reviews/selectors";
import React from "react";
import { useSelector } from "react-redux";

export const RestaurantReviewsContainer = (reviewsIds) => {

  const reviews = useSelector((state) =>
  selectReviewById(state, reviewsIds)
  );

  if (!reviews?.length) {
    return null;
  }
  

  return <Reviews reviews={reviews} />;
};
