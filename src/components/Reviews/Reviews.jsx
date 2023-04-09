import { Review } from "@/components/Review/Review";
import React from "react";

export const Reviews = ({ reviews }) => {
  if (!reviews) {
    return null;
  }

  if ( !Array.isArray(reviews) ) {
     return null;
  }

  const listItems = reviews.map( review =>
    <Review key={review.id}
            rating={review.rating}
            text={review.text}
            user={review.user} />
  );

  return (
    <div>
      <h4>Reviews</h4>
      <ul>
        {listItems}
      </ul>  
    </div>
  );

};

