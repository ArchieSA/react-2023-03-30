import React from "react";

export const Review = ({review}) => {
  console.log(review)
  
  const { rating } = review
  const { user } = review
  const { text } = review

  return (
    <div>
      <span>{rating} : {user}</span>
      <div>{text}</div>
    </div>
  )
  
}