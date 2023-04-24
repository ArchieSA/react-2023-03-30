import React, { useState, useLayoutEffect, useCallback } from "react";
import { restaurants } from "@/constants/fixtures";

export const useActiveRestaurant = (index = 0) => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(index);

  const setActiveRestaurantIndexWithCache = useCallback((index) => {
    setActiveRestaurantIndex(index);
    localStorage.setItem("activeRestaurantIndex", index);
  }, []);

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
