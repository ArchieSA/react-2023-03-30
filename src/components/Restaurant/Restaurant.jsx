import { Button } from "@/components/Button/Button";

import React from "react";
import { Menu } from "@/components/Menu/Menu";
import { Reviews } from "@/components/Reviews/Reviews";

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return null;
  }

  const { name } = restaurant;

  return (
    <div>

      <h3><u>{name}</u></h3>
      
      <Menu menu={restaurant.menu}/>
      <Reviews reviews={restaurant.reviews} />
      <p>&nbsp;</p><p>&nbsp;</p>
    </div>
  );
};
