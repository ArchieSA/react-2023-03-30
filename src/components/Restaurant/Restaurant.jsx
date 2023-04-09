import React from "react";
import {Menu} from "@/components/Menu/Menu";
import {Reviews} from "@/components/Reviews/Reviews";

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return null;
  }

  return (
    <div>
        <h2>{restaurant.name}</h2><br/>
        <Menu menu={restaurant.menu}/><br/>
        <Reviews reviews={restaurant.reviews}/><br/>
    </div>
  );
};
