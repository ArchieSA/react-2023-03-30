import { Header } from "@/components/Header/Header";
import { Restaurant } from "@/components/Restaurant/Restaurant";
import { Tabs } from "@/components/Tabs/Tabs";
import { restaurants } from "@/constants/fixtures";
import { useRestaurant } from "@/hooks/useRestaurant";
import React from "react";

export const Home = () => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useRestaurant();

  const activeRestaurant = restaurants[activeRestaurantIndex];

  return (
    <div>
      <Header />
      <Tabs
        restaurants={restaurants}
        activeIndex={activeRestaurantIndex}
        onTabClick={setActiveRestaurantIndex}
      />
      {activeRestaurant && (
        <Restaurant key={activeRestaurant.id} restaurant={activeRestaurant} />
      )}
    </div>
  );
};
