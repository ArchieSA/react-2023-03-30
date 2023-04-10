import React from "react";

export const Dish = ({ dish }) => {
   if (!dish) {
     return null; 
   }

   const ingredients = Array.isArray(dish.ingredients) ? dish.ingredients.join(', ') : ''; 
   const { name, price } = dish;
   
   return (
     <li>{name} ({ingredients}) -- {price}$</li>
   );
 }
