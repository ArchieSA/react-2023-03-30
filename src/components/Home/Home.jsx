import { Header } from "@/components/Header/Header";
import { Restaurant } from "@/components/Restaurant/Restaurant";
import { Tabs } from "@/components/Tabs/Tabs";
import { restaurants } from "@/constants/fixtures";
import React from "react";
import { useRestaurant } from "@/hooks/useRestaurant.js";


export const Home = () => {
  const {activeRestaurantIndex, setActiveRestaurantIndexWithCache} = useRestaurant()
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
