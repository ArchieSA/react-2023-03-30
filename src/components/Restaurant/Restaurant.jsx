import { RestaurantReviewsContainer } from "@/containers/RestaurantReviews/RestaurantReviews";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const Restaurant = ({ restaurant }) => {
  const { asPath } = useRouter();
  const { name, reviews } = restaurant || {};

  return (
    <div>
      <h2>{name}</h2>
      <p>
        <Link href={`${asPath}/reviews`}>
          Reviews{` (${reviews?.length})` || ""}
        </Link>
      </p>
      <p p>
        <Link href={`${asPath}/menu`}>Open menu</Link>
      </p>
    </div>
  );
};
