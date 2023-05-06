import { Menu } from "@/components/Menu/Menu";
import { selectIsDishLoading } from "@/store/entities/dish/selectors";
import { fetchDishByRestaurantId } from "@/store/entities/dish/thunk/loadDishByRestaurantIdIfNotExisted";
import {
  selectIsRestaurantLoading,
  selectMenuByRestaurantId,
  selectNameByRestaurantId,
} from "@/store/entities/restaurant/selectors";
import { fetchRestaurant } from "@/store/entities/restaurant/thunks/fetchRestaurant";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const RestaurantMenuContainer = ({ restaurantId }) => {
  const dispatch = useDispatch();
  const menu = useSelector((state) =>
    selectMenuByRestaurantId(state, { restaurantId })
  );
  const isRestaurantLoading = useSelector(selectIsRestaurantLoading);
  const isLoading = useSelector(selectIsDishLoading);
  const restaurantName = useSelector((state) =>
    selectNameByRestaurantId(state, { restaurantId })
  );

  useEffect(() => {
    if (restaurantId) dispatch(fetchDishByRestaurantId(restaurantId));
  }, [dispatch, restaurantId]);
  useEffect(() => {
    dispatch(fetchRestaurant());
  }, [dispatch]);

  if (isLoading || isRestaurantLoading) {
    return <span>Loading...</span>;
  }
  if (!menu?.length) {
    return "No menu";
  }
  return (
    <>
      <div>
        <h2>{restaurantName}</h2>
      </div>
      <Menu menu={menu} />
    </>
  );
};
