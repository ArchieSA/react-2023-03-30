import React, { useLayoutEffect, useState } from "react";
import { restaurants } from "@/constants/fixtures";

export const useActiveRestaurant = () => {

    const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);    

    useLayoutEffect(() => {
        const savedActiveRestaurantIndex = localStorage.getItem(
          "activeRestaurantIndex"
        );
    
        if (savedActiveRestaurantIndex) {
          setActiveRestaurantIndex(savedActiveRestaurantIndex);
        }
      }, []);

      const activeRestaurant = restaurants[activeRestaurantIndex];

    return [activeRestaurantIndex, activeRestaurant, setActiveRestaurantIndex];
};