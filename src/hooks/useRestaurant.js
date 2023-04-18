import { useLayoutEffect, useState } from "react";

export const useRestaurant = (initial = 0) => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(initial);

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
