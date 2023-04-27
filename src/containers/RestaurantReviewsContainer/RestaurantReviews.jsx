import { Reviews } from "@/components/Reviews/Reviews";
import { selectReviewsByRestaurantId } from "@/store/entities/restaurant/selectors";
import React from "react";
import { useSelector } from "react-redux";

export const RestaurantRewiewsContainer = ({ restaurantId }) => {
  const reviews = useSelector((state) => selectReviewsByRestaurantId(state, {restaurantId}));

  if (!reviews?.length) {
    return null;
  }

  return <Reviews reviews={reviews} />
}