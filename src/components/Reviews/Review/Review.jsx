import React from "react";

export default function Review({ review }) {
  if (!review) {
    return null;
  }

  const { rating, user, text } = review;

  return (
    <div>
      <p className="stars">{new Array(rating).join("*")}</p>
      <p>
        {user || ""}: {text || ""}
      </p>
    </div>
  );
}
