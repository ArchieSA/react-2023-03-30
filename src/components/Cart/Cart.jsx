import { useSelector } from "@/CustomStore";
import React from "react";

export const Cart = () => {
  const cartState = useSelector((state) => state);

  return (
    <ul>
      {Object.entries(cartState).map(([name, count]) => (
        <li key={name}>
          {name} - {count}
        </li>
      ))}
    </ul>
  );
};
