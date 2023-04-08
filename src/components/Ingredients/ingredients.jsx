import { nanoid } from "nanoid";
import { Ingredient } from "@/components//Ingredient/ingredients";
import React from "react";

export const Ingredients = ({ ingredients }) => {
  let key = nanoid(10)
    
  return (
    <div>
      {ingredients.map( ingredient => (
        <Ingredient key = {key} ingredient = {ingredient} />
      ))}
    </div>
  )
}