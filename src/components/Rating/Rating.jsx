import React from "react";
import Image from "next/image";

export const Rating = ({ value, maxRating = 5 }) => {
  if (!maxRating) {
    return null;
  }
  if (!value) {
    value = 0;
  }
  if (value > maxRating) {
    maxRating = value;
  }

  return (
    <>
      {[...Array(maxRating)].map((_, index) => {
        const src = index < value ? 'star-gold' : 'star';
        return <Image
            key={index}
            src={`/images/${src}.png`}
            width={18}
            height={18}
            alt={src}
          />
      })}
    </>
  );
};
