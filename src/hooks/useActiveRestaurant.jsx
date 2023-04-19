import React, { useState, useLayoutEffect } from "react";
import { restaurants } from "@/constants/fixtures";

export const useActiveRestaurant = () => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

  const setActiveRestaurantIndexWithCache = (index) => {
    setActiveRestaurantIndex(index);
    localStorage.setItem("activeRestaurantIndex", index);
  };

  useLayoutEffect(() => {
    const savedActiveRestaurantIndex = localStorage.getItem(
      "activeRestaurantIndex"
    );

    if (savedActiveRestaurantIndex) {
      setActiveRestaurantIndex(savedActiveRestaurantIndex);
    }
  }, []);

  const activeRestaurant = restaurants[activeRestaurantIndex];

  return {activeRestaurant, activeRestaurantIndex, setActiveRestaurantIndexWithCache};
}
