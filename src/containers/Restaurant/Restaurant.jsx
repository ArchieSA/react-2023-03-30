import { Restaurant } from "@/components/Restaurant/Restaurant";
import {
  selectIsRestaurantLoading,
  selectRestaurantById,
} from "@/store/entities/restaurant/selectors";
import { fetchRestaurant } from "@/store/entities/restaurant/thunks/fetchRestaurant";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const RestaurantContainer = ({ restaurantId }) => {
  const isRestaurantLoading = useSelector(selectIsRestaurantLoading);
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, { restaurantId })
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRestaurant());
  }, [dispatch]);

  if (isRestaurantLoading) {
    return <div>Loading...</div>;
  }

  if (!restaurant) {
    return null;
  }

  return <Restaurant restaurant={restaurant} />;
};
