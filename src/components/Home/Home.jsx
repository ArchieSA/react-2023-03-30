/* eslint-disable react/no-children-prop */
import { Restaurant } from "@/components/Restaurant/Restaurant";
import { restaurants } from "@/constants/fixtures";
import React from "react";

export const Home = () => {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

function HomePageOld() {
  return React.createElement("div", {
    children: restaurants.map((restaurant) =>
      React.createElement("div", {
        children: restaurant.name,
        key: restaurant.id,
      })
    ),
  });
}
