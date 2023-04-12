import React from "react";
import Image from 'next/image.js'

export const Review = ({ review }) => {
  if (!review) {
    return null;
  }

  const { user, text, rating } = review;
  const maxRating = 5;
  const ratingImgs = []
  for(let i = 0; i < maxRating; i++) {
    ratingImgs.push(i<rating?'star-gold':'star')
  }
  return (
    <div>
      <p>{user}</p>
      {<p>{ratingImgs.map((ratingImg,index)=>(<Image width={15} height={15} key={index} src={`/${ratingImg}.png`}  alt="no rating image"/>))}</p>}
      <p>{text}</p>
    </div>
  );
};
