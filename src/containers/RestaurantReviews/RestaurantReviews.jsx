import { Reviews } from "@/components/Reviews/Reviews";
import { selectReviewsByRestaurantId } from "@/store/entities/restaurant/selectors";
import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadReviewByRestaurantIdIfNotExisted } from '@/store/entities/review/thunk/loadReviewByRestaurantIdIfNotExisted.js'
import { selectIsReviewLoading } from '@/store/entities/review/selectors.js'
import { selectIsUserLoading } from '@/store/entities/user/selectors.js'
import { loadUserIfNotExisted } from '@/store/entities/user/thunk/loadUserIfNotExisted.js'

export const RestaurantReviewsContainer = ({ restaurantId }) => {
  const dispatch = useDispatch();
  const reviewIds = useSelector((state) =>
    selectReviewsByRestaurantId(state, { restaurantId })
  );

  const isLoadingUsers = useSelector(selectIsUserLoading);
  const isLoadingReviews = useSelector(selectIsReviewLoading);

  useEffect(() => {
    dispatch(loadUserIfNotExisted());
    dispatch(loadReviewByRestaurantIdIfNotExisted(restaurantId));
  }, [dispatch, restaurantId]);

  if (!reviewIds?.length) {
    return null;
  }

  if (isLoadingUsers || isLoadingReviews) {
    return <span>{`${ isLoadingUsers ? 'Loading Users... ':''} ${isLoadingReviews ? 'Loading Reviews...':''}`}<br/></span>;
  }


  return <Reviews reviewIds={reviewIds} />;
};
