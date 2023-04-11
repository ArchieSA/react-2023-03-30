import { Ingredients } from "@/components/Ingredients/ingredients";
import React from "react";



export const Dish = ({ dish }) => {
  if (!dish) {
    return null
  }
  
  const { name, price, ingredients } = dish
        
  return (
   <div>
    <span>{name} : {price}</span>
    <div><span>Ingredients:</span></div>
    <Ingredients ingredients = {ingredients} />
   </div>
  )
}