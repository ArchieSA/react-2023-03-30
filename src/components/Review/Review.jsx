import { Rating } from "@/components/Rating/Rating";
import { UserContainer } from "@/containers/User/User";
import React from "react";

export const Review = ({ review, className }) => {
  if (!review) {
    return null;
  }

  const { userId, text, rating } = review;

  return (
<<<<<<< HEAD
    <div>
=======
    <div className={className}>
      <UserContainer userId={userId} />
>>>>>>> 24831b1ccea2d39ee5c37958571f20f48499064f
      <Rating value={rating} />
      <p>{text}</p>
      <UserContainer userId={userId}/>
    </div>
  );
};
