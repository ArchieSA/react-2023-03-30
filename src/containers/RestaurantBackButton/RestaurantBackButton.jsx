import { Button } from "@/components/Button/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const RestaurantBackButtonContainer = () => {
  const router = useRouter();
  const { restaurantId } = router.query;

  return (
    <div>
      <Button
        type="secondary"
        onClick={() => {
          restaurantId && router.push(`/restaurants/${restaurantId}`);
        }}
      >
        Back to restaurant
      </Button>
    </div>
  );
};
