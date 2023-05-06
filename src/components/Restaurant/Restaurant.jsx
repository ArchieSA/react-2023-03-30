import { RestaurantReviewsContainer } from "@/containers/RestaurantReviews/RestaurantReviews";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const Restaurant = ({ restaurant }) => {
  const { asPath } = useRouter();
  const { name, id } = restaurant || {};

  return (
    <div>
      <h2>{name}</h2>
      {/* <RestaurantReviewsContainer restaurantId={id} /> */}
      <p>
        <Link href={`${asPath}/reviews`}>Reviews</Link>
      </p>
      <p p>
        <Link href={`${asPath}/menu`}>Open menu</Link>
      </p>
    </div>
  );
};
