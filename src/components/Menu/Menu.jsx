import { restaurants } from "@/constants/fixtures";
import { Dish } from "@/components/Dish/Dish";

import React from 'react'

export function Menu() {
  return (
    <div>
        {restaurants.map((dish) => ( 
            <Dish key={dish.id} dish={dish} />
        ))}
    </div>
  );
}
