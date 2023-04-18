import { Button } from "@/components/Button/Button";
import { Header } from "@/components/Header/Header";
import { Restaurant } from "@/components/Restaurant/Restaurant";
import { Tabs } from "@/components/Tabs/Tabs";
import { restaurants } from "@/constants/fixtures";
import { useActiveRestaurant } from "@/hooks/useActiveRestaurant";
import React, { useLayoutEffect, useState } from "react";

export const Home = () => {
 const [activeRestaurantIndex, activeRestaurant, setActiveRestaurantIndex] = useActiveRestaurant();

 const setActiveRestaurantIndexWithCache = (index) => {
  setActiveRestaurantIndex(index);
  localStorage.setItem("activeRestaurantIndex", index);
};

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
