import { Button } from "@/components/Button/Button";
import { Header } from "@/components/Header/Header";
import { Restaurant } from "@/components/Restaurant/Restaurant";
import { Tabs } from "@/components/Tabs/Tabs";
import { restaurants } from "@/constants/fixtures";
import React, { useEffect, useState } from "react";

export const Home = () => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

  useEffect(() => {
    console.log("Заказ сброшен");
  }, [activeRestaurantIndex]);

  const activeRestaurant = restaurants[activeRestaurantIndex];

  return (
    <div>
      <Header />
      <Tabs restaurants={restaurants} onTabClick={setActiveRestaurantIndex} />
      <Restaurant key={activeRestaurant.id} restaurant={activeRestaurant} />
    </div>
  );
};
