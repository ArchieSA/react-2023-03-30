import React from "react";
import styles from './Reviews.module.css'
import {Review} from "../Review/Review";

export function Reviews({ reviews }) {
  if (!reviews?.length) {
    return null;
  }

  return (
      <>
        <h2 className={styles.title}>Reviews</h2>
        <div className={styles.reviews}>
          {reviews.map((review) => <Review key={review.id} review={review}/>)}
        </div>
      </>
  );
}
