import React from "react";
import Image from "next/image";

export const Rating = ({ maxRating = 10, rating }) => {
  if (!Number.isFinite(rating) || !Number.isFinite(maxRating)) {
    return null;
  }

  let stars = [];

  for (let i = 0; i < maxRating; i++) {
    stars.push(<Image key={i} src="/images/star.png" width={64} height={64} alt="" />);
  }
  
  return (
    <div>
      <h3>Rating:</h3>      
      {stars.map( (elem, index) => {
        if (index < rating) { 
          return <Image key={index} src="/images/star-gold.png" width={64} height={64} alt="" />;
        } 
    
        return elem;
      })}
    </div>
  );
};

