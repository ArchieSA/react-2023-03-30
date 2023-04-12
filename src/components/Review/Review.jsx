import React from 'react';

export const Review = ({ user, text, rating }) => {
  return (
    <div><span>{user}</span>, <span><i>{text}</i></span> , <span><strong>rating - {rating}</strong></span ></div>
  )
}