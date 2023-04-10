import React from "react";

export const Dish = ({ dish }) => {
  return (
    <>
      <h3>{dish.name}</h3>
      <div>
        Ingridients:
        {dish.ingredients.map((ingridient) => (
          <span>{ingridient} </span>
        ))}
      </div>
    </>
  );
};
