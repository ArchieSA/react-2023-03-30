import React, { useEffect } from "react";
import { Reviews } from "@/components/Reviews/Reviews";
import { selectReviewsByRestaurantId } from "@/store/entities/restaurant/selectors";
import { useDispatch, useSelector } from "react-redux";
import { selectIsReviewLoading } from "@/store/entities/review/selectors";
import { loadReviewByRestaurantIdIfNotExisted } from "@/store/entities/review/thunk/loadReviewByRestaurantIdIfNotExisted";
import { loadUserIfNotExisted } from "@/store/entities/user/thunk/loadUserIfNotExisted";


export const RestaurantReviewsContainer = ({ restaurantId }) => {
  
  const reviews = useSelector((state) =>
    selectReviewsByRestaurantId(state, { restaurantId })
  );
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsReviewLoading);

  useEffect(() => {
    dispatch(loadReviewByRestaurantIdIfNotExisted(restaurantId));
  }, [dispatch, restaurantId]);

  useEffect(() => {
    dispatch(loadUserIfNotExisted());
  }, [dispatch])

  if (!reviews?.length) {
    return null;
  }

  if (isLoading) {
    return <span>Loading...</span>
  }


  return <Reviews reviews={reviews} />;
};
