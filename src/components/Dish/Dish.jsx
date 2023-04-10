import React from "react";

export const Dish = ({dish}) => {
  if (!dish) {
    return null;
  }

  const {name, price, ingredients} = dish;
  return (
    <div>{name}:{price} <ul><b>Ingredient:</b>{ingredients.map( (ingredient) => <li>{ingredient}</li>)}</ul></div>
  )
}
