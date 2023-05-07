import { RestaurantCardContainer } from "@/containers/RestaurantCard/RestaurantCard";
import { useActiveId } from "@/hooks/useActiveIndex";
import Link from "next/link";
import React from "react";

export const Restaurants = ({ restaurantIds }) => {
  return (
    <div>
      {restaurantIds.map((restaurantId) => (
        <Link
          key={restaurantId}
          href={{
            pathname: "/restaurants/[restaurantId]",
            query: { restaurantId },
          }}
        >
          <RestaurantCardContainer restaurantId={restaurantId} />
        </Link>
      ))}
    </div>
  );
};
