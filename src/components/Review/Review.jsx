import React from "react";

export const Review = ({review}) => {
  const { rating, user, text } = review

  return (
    <div>
      <span>{rating} : {user} : {text}</span>
    </div>
  )
  
}