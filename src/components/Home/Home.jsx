import { Button } from "@/components/Button/Button";
import { Header } from "@/components/Header/Header";
import { Restaurant } from "@/components/Restaurant/Restaurant";
import { Tabs } from "@/components/Tabs/Tabs";
import { restaurants } from "@/constants/fixtures";
import React, { useLayoutEffect, useState } from "react";

export const Home = () => {
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

  return (
    <div>
      <Header />
      <Tabs
        restaurants={restaurants}
        activeIndex={activeRestaurantIndex}
        onTabClick={setActiveRestaurantIndexWithCache}
      />
      {activeRestaurant && (
        <Restaurant key={activeRestaurant.id} restaurant={activeRestaurant} />
      )}
    </div>
  );
};
