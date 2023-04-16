import { Review } from "../Review/review";
// import { Rate } from "../Rate/Rate";
import { Rating } from "../Rating/Rating";
import classNames from "classnames";
import React from "react";

import styles from './styles.module.scss'

const calculateRate = (reviewsObj, maxRate = 5) => {
  return reviewsObj.map(review => review['rating'])
                   .reduce((review, sum) => (sum + review), 0) 
                   /reviewsObj.length
  // return {
  //   currentRate :  reviewsObj.map(review => review['rating'])
  //                            .reduce((review, sum) => (sum + review), 0) 
  //                            / reviewsObj.length,
  //   maxRate: maxRate 
  // }
}

export const Reviews = ({ reviews }) => {
  if(!reviews || !reviews.length) {
    return null;
  }

  const rate = calculateRate(reviews)
  
  return (
    <div>
      <h3
        className={classNames(styles.root)}>
        Reviews
      </h3>
      <Rating value={rate}/>
      {/* <Rate rate = {rate}/>  */}
      {reviews.map( review => (
         <Review key={review.id} review={review}/>
      ))}
    </div>
  )
}