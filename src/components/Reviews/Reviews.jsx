import { Review } from "../Review/review";
import { Rate } from "../Rate/Rate";
import React from "react";

const calculateRate = (reviewsObj, maxRate = 5) => {
  return {
    currentRate :  reviewsObj.map(review => review['rating'])
                             .reduce((review, sum) => (sum + review), 0) 
                             / reviewsObj.length,
    maxRate: maxRate 
  }
}

const rate = calculateRate(reviews)

export const Reviews = ({ reviews }) => {
  if(!reviews || !reviews.length) {
    return null;
  }

  
  return (
    <div>
      <span>Reviews</span>
      <Rate rate = {rate}/> 
      {reviews.map( review => (
         <Review key={review.id} review={review}/>
      ))}
    </div>
  )
}