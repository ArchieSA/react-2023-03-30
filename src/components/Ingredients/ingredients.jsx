// import { nanoid } from "nanoid";
import { Ingredient } from "@/components//Ingredient/ingredients";
import React from "react";

// function generationKeys(arr =[]) {
//   return arr.map(item => (
//     nanoid(10)
//   ))
// }



export const Ingredients = ({ ingredients }) => {
  if (!ingredients || !ingredients.length) {
    return null
  }

  // const keys = generationKeys(ingredients)
  // console.log(keys)

  return (
    <ul>
      {ingredients.map( ingredient => {
        
        return (
          <li key = {ingredient}>
            <Ingredient  ingredient = {ingredient} />
          </li>
        )
     })}
    </ul>
  )
}