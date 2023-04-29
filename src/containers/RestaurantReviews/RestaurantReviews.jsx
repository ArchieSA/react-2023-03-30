import { Reviews } from "@/components/Reviews/Reviews";
import { selectReviewsByRestaurantId } from "@/store/entities/restaurant/selectors";
import { selectIsReviewLoading } from "@/store/entities/review/selectors";
import { loadReviewByRestaurantId } from "@/store/entities/review/thunk/loadReviewByRestaurantId";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const RestaurantReviewsContainer = ({ restaurantId }) => {
  const reviews = useSelector((state) =>
    selectReviewsByRestaurantId(state, { restaurantId })
  );
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => selectIsReviewLoading(state));

  useEffect(() => {
    if (restaurantId) dispatch(loadReviewByRestaurantId(restaurantId));
  }, [dispatch, restaurantId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!reviews?.length) {
    return null;
  }

  return <Reviews reviews={reviews} />;
};
