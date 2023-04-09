import React from "react";

export const Dish = ({ name, price, ingredients }) => {
   if (!name) {
     return null; 
   }

   const ingredientsStr = Array.isArray(ingredients) ? ingredients.join(', ') : ''; 
   
   return (
     <li>{name} ({ingredientsStr}) -- {price}$</li>
   );
 }
