import { Reviews } from "@/components/Reviews/Reviews";
import { selectReviewsByRestaurantId } from "@/store/entities/restaurant/selectors";
import React from "react";
import { useSelector } from "react-redux";

export const ReviewsContainer = ({ restaurantId }) => {
  const reviewIds = useSelector((state) =>
    selectReviewsByRestaurantId(state, { restaurantId })
  );

  if (!reviewIds?.length) {
    return null;
  }

  return <Reviews reviewIds={reviewIds} />;
};
