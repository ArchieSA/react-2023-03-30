import {useCallback, useLayoutEffect, useState} from 'react'
//useLayoutEffect
export const useRestaurant = useCallback((initialRestaurant = 0) => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(initialRestaurant);

  const setActiveRestaurantIndexWithCache = (index) => {
    setActiveRestaurantIndex(index);
    localStorage.setItem("activeRestaurantIndex", index);
  },[]);

  useLayoutEffect(() => {
    const savedActiveRestaurantIndex = localStorage.getItem(
      "activeRestaurantIndex"
    );

    if (savedActiveRestaurantIndex) {
      setActiveRestaurantIndex(savedActiveRestaurantIndex);
    }
  }, []);

  return { activeRestaurantIndex, setActiveRestaurantIndexWithCache };
};
