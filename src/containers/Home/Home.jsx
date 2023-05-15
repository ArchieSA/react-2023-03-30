import { Home } from "@/components/Home/Home";
import { selectIsRestaurantLoading } from "@/store/entities/restaurant/selectors";
import { loadRestaurantIfNotExisted } from "@/store/entities/restaurant/thunk/loadRestaurantIfNotExisted";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const HomeContainer = () => {
  const isRestaurantLoading = useSelector(selectIsRestaurantLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurantIfNotExisted());
  }, [dispatch]);

  if (isRestaurantLoading) {
    return <div>Loading...</div>;
  }

  return <Home />;
};
