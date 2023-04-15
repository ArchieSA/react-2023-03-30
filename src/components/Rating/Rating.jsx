import React from 'react';
import Image from 'next/image';

const MAX_RATING = 5;

export const Rating = ({ value, maxRating = MAX_RATING }) => {

  const stars = new Array(MAX_RATING);

  for (let i = 0; i <value; i++) {
    stars[i] = 1;
  }

  for (let i = value; i <maxRating; i++) {
    stars[i] = 0;
  }

  return (
    <div>
      {
        stars.map((star,index) => (
          star ? 
          <Image src={ "/images/star-gold.png"}
            key={index}
            width={25}
            height={25}
            alt="gold" /> : 
          <Image src={"/images/star.png"}
            key={index}
            width={25}
            height={25}
            alt="grey" />
        ))}
      {console.log(stars)}
    </div>
  );
};
