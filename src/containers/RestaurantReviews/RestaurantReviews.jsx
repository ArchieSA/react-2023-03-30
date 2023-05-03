import { Reviews } from "@/components/Reviews/Reviews";
import { selectReviewsByRestaurantId } from "@/store/entities/restaurant/selectors";
import { selectReviews } from "@/store/entities/reviews/selectors";
import { selectIsReviewsLoading } from "@/store/entities/reviews/selectors";
import { loadReviewsByRestaurantIdIfnotExist } from "@/store/entities/reviews/thunk/loadReviewsByRestaurantIdIfnotExist";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const RestaurantReviewsContainer = ({ restaurantId }) => {
  const dispatch = useDispatch();

  const reviews = useSelector((state) =>
  selectReviewsByRestaurantId(state, {restaurantId})
  );  

  useEffect(() => {
    dispatch(loadReviewsByRestaurantIdIfnotExist(restaurantId))
  }, [restaurantId]);

  if (!reviews?.length) {
    return null;
  }   

  return <Reviews reviews={reviews} />;
};




