import React from "react";
import Image from "next/image";

export const Rating = ({ maxRating = 5, rating }) => {
  if (!Number.isFinite(rating) || !Number.isFinite(maxRating)) {
    return null;
  }

  return (
    <div>
      <h3>Rating:</h3>      
      {
        [...Array(maxRating)].map( (elem, index) => {
            if (index < rating) { 
              return <Image key={index} src="/images/star-gold.png" width={64} height={64} alt="" />;
            } 
        
            return <Image key={index} src="/images/star.png" width={64} height={64} alt="" />;
          })
      }
    </div>
  );
};

