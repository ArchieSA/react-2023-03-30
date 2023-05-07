import { Reviews } from "@/components/Reviews/Reviews";
import { selectReviewsByRestaurantId } from "@/store/entities/restaurant/selectors";
import { selectIsReviewLoading } from "@/store/entities/review/selectors";
import { loadReviewsByRestaurantIdIfNotExisted } from "@/store/entities/review/thunks/loadReviewsByRestaurantIdIfNotExisted";
import { loadUserIfNotExisted } from "@/store/entities/user/thunks/loadUserIfNotExisted";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const RestaurantReviewsContainer = ({ restaurantId }) => {
  const reviews = useSelector((state) =>
    selectReviewsByRestaurantId(state, { restaurantId })
  );
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsReviewLoading);

  useEffect(() => {
    dispatch(loadReviewsByRestaurantIdIfNotExisted(restaurantId));
  }, [dispatch, restaurantId]);

  useEffect(() => {
    dispatch(loadUserIfNotExisted());
  }, [dispatch]);

  if (!reviews?.length) {
    return null;
  }

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return <Reviews reviews={reviews} />;
};
