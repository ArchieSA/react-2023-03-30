import { RestaurantMenuContainer } from "@/containers/RestaurantMenu/RestaurantMenu";
import { useRouter } from "next/router";
import React from "react";

export default function MenuPage() {
  const router = useRouter();

  return <RestaurantMenuContainer restaurantId={router.query.id} />;
}