import { Button } from "@/components/Button/Button";
import React, { useEffect } from "react";

export const Tabs = ({ restaurants, onTabClick }) => {
  return (
    <div>
      {restaurants.map((restaurant, index) => (
        <Button key={restaurant.id} onClick={() => onTabClick(index)}>
          {restaurant.name}
        </Button>
      ))}
    </div>
  );
};
