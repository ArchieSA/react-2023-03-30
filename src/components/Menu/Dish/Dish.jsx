import React from "react";

export default function Dish({ dish }) {
  if (!dish) {
    return null;
  }
  return (
    <div>
      <span>
        {dish.name || ""}: {dish.price || "-"} ({dish.ingredients?.join(", ")})
      </span>
    </div>
  );
}
