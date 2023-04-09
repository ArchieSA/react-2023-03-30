import { Dish } from "@/components/Dish/Dish";
import React from "react";

export const Menu = ({ menu }) => {
  if ( !menu ) {
    return null;
  }

 if ( !Array.isArray(menu) ) {
    return null;
 }

  const listItems = menu.map( dish =>
    <Dish key={dish.id} 
          name={dish.name} 
          price={dish.price} 
          ingredients={dish.ingredients} /> 
  );

  return (
    <div>
      <h4>Menu</h4>
      <ul>
        {listItems}
      </ul>	
    </div>
  );
}
