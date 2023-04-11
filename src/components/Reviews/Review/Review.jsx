import { Rating } from "@/components/Rating/Rating";
import React from "react";

export default function Review({ review }) {
  if (!review) {
    return null;
  }

  const { rating, user, text } = review;

  return (
    <div>
      <Rating rating={rating} raitingType="*" />
      <p>
        {user || ""}: {text || ""}
      </p>
    </div>
  );
}
