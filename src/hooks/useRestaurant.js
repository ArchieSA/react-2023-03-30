import { useCallback, useLayoutEffect, useState } from "react";

export const useRestaurant = (
  initial = 0,
  storageTag = "activeRestaurantIndex"
) => {
  const [active, setIndex] = useState(initial);

  const setIndexWithCache = useCallback((index) => {
    setIndex(index);
    localStorage.setItem(storageTag, index);
  }, []);

  useLayoutEffect(() => {
    const savedActiveRestaurantIndex = localStorage.getItem(storageTag);

    if (savedActiveRestaurantIndex) {
      setIndex(savedActiveRestaurantIndex);
    }
  }, []);

  return { activeIndex: active, setActiveIndex: setIndexWithCache };
};
