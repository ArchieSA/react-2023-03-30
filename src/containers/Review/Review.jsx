import { Review } from "@/components/Review/Review";
import { Rating } from "@/components/Rating/Rating";
import { UserContainer } from "../User/user";
import { selectReviewById } from "@/store/entities/review/selector";
import React from "react";
import { useSelector } from "react-redux";

export const ReviewContainer = ( { reviewId } ) => {
  const review = useSelector((state) => selectReviewById(state, {reviewId}));

  if (!review) {
    return null;
  }

  const { userId, id, text, rating } = review;
 

  return (
    <div>
      <UserContainer 
        userId={userId}
      />
      <Review 
        reviewText={text}
        reviewId={id}    
      />
      <Rating 
      value={rating} />
     
   </div>
  )

}