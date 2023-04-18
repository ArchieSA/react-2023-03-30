import { useLayoutEffect, useState } from "react";

export const useRestaurant = (initialAmount = 0) => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] =
    useState(initialAmount);

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

  return [activeRestaurantIndex, setActiveRestaurantIndexWithCache];
};
