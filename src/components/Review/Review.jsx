import React from 'react'

export function Review({reviewsObj}) {
 
  return (
    <div>{reviewsObj.reviews.map(item => (
      <div key={item.id}>{item.text}</div>
    ))}</div>
  );
}