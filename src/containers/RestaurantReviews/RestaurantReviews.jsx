import { Reviews } from "@/components/Reviews/Reviews";
import { ReviewContainer } from "@/containers/Review/Review";
import { selectReviewsByRestaurantId } from "@/store/entities/restaurant/selectors";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectIsReviewLoading} from "@/store/entities/review/selectors";
import {loadReviewByRestaurantIdIfNotExisted} from "@/store/entities/review/thunk/loadReviewByRestaurantIdIfNotExisted";

export const RestaurantReviewsContainer = ({ restaurantId }) => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) =>
    selectReviewsByRestaurantId(state, { restaurantId })
  );
  const isLoading = useSelector(selectIsReviewLoading);

  useEffect( () => {
    dispatch(loadReviewByRestaurantIdIfNotExisted(restaurantId));
  }, [dispatch, restaurantId]);

  if (!reviews?.length) {
    return null;
  }

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return <Reviews reviews={reviews} />;
};
