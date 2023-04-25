import { Menu } from "@/components/Menu/Menu";
import { selectMenuByRestaurantId } from "@/store/entities/restaurant/selectors";
import React from "react";
import { useSelector } from "react-redux";

export const RestaurantMenuContainer = ({ restaurantId }) => {
  const menu = useSelector((state) =>
    selectMenuByRestaurantId(state, { restaurantId })
  );

  if (!menu?.length) {
    return null;
  }

  return <Menu menu={menu} />;
};
