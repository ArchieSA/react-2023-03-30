import { Dish } from "@/components/Dish/Dish";
import React from "react";

export const Menu = ({ menu }) => {

 if ( !menu || !Array.isArray(menu) ) {
   return null;
 }

  return (
    <div>
      <h4>Menu</h4>
      <ul>
        {menu.map( dish =>
         <Dish key={dish.id} dish={dish} /> 
        )}
      </ul>	
    </div>
  );
}
