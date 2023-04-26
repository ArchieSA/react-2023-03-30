import { Rating } from "@/components/Rating/Rating";
import { UserContainer } from "@/containers/User/User";
import React from "react";

export const Review = ({ review }) => {
  const { userId, text, rating } = review || {};
  return (
    <div>
      <UserContainer userId={userId}/>
      <Rating value={rating} />
      <p>{text}</p>
    </div>
  );
};
