import { Button } from "@/components/Button/Button";
import { Menu } from "../Menu/menu";
import { Reviews } from "../Reviews/reviews";
import React from "react";

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return null;
  }

  const { name } = restaurant;
  const { menu} = restaurant;
  const { reviews } = restaurant;
   
  return (
    <div>
      <Button>
        <span >{name}</span>
      </Button>
      <Menu menu={menu}/>
      <Reviews reviews={reviews} />

    </div>
  );
};
