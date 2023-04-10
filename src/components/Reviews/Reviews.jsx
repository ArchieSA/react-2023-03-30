import { Review } from "@/components/Review/Review";
import React from "react";

export const Reviews = ({ reviews }) => {

  if ( !reviews || !Array.isArray(reviews) ) {
    return null;
  }

  return (
    <div>
      <h4>Reviews</h4>
      <ul>
        {reviews.map( review =>
           <Review key={review.id} review={review} /> 
        )}
      </ul>  
    </div>
  );

};

