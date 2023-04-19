import React from "react";
import { Header } from "@/components/Header/Header";
import { Restaurant } from "@/components/Restaurant/Restaurant";
import { Tabs } from "@/components/Tabs/Tabs";
import { restaurants } from "@/constants/fixtures";
import { useActiveRestaurant } from "@/hooks/useActiveRestaurant";

export const Home = () => {
  const { activeRestaurant, activeRestaurantIndex, setActiveRestaurantIndexWithCache } = useActiveRestaurant();

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
