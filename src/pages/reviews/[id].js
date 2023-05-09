import { RestaurantReviewsContainer } from "@/containers/RestaurantReviews/RestaurantReviews";
import { useRouter } from "next/router";
import React from "react";

export default function ReviewsPage() {
  const router = useRouter();
  console.log(router.query.id)
  return <RestaurantReviewsContainer restaurantId={router.query.id} />;
}