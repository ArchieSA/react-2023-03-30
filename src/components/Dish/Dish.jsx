import { Ingredients } from "@/components/Ingredients/ingredients";
import { DishCount } from "../DishCount/DishCount";
import React, { useState, useEffect } from "react";
 
export const Dish = ({ dish }) => {
  if (!dish) {
    return null
  }

  const { name, price, ingredients } = dish
  const [dishCounter, setDishCounter] = useState(0)
  
  useEffect(() => {
    dishCounter === 0 && console.log('decrement no permit')
    dishCounter === 5 && console.log('increment no permit')
    }, [dishCounter])
  
  const counterDecriment = () => {
    (dishCounter > 0) && setDishCounter(dishCounter - 1)
  }

  const counterIncrement = () => {
    (dishCounter < 5) && setDishCounter(dishCounter + 1) 
  } 
  

  return (
   <div>
    <h4>{name} : {price}</h4>
    <DishCount
      counter={dishCounter}
      onClickIncrement={counterIncrement}
      onClickDecrement={counterDecriment}
    />
    <div>Ingredients:</div>
      <Ingredients ingredients = {ingredients} />
    </div>
  )
}