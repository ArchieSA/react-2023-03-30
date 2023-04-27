import { Rating } from "@/components/Rating/Rating";
import React from "react";
import { UserContainer } from "@/containers/User/UserContainer";

export const Review = ({ userId, text, rating }) => {

  return (
    <div>
      <UserContainer userId={ userId }/>
      <Rating value={ rating } />
      <p>{ text }</p>
    </div>
  );
};
