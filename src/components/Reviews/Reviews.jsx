import React from 'react';
import { Review } from '@/components/Review/Review';

export const Reviews = ({reviews}) => {
  return (
    <div>
      <h4>Reviews</h4>
      {
        reviews.map(review => (
          <Review key={review.id} user={review.user} text={review.text} rating={review.rating} />
        ))
      }

    </div>
  )
}
