import { Review } from "@/components/Review/Review";
import { selectReviewById } from "@/store/entities/review/selectors";
import React from "react";
import { useSelector } from "react-redux";

export const ReviewContainer = ({ reviewId }) => {
  const review = useSelector((state) =>
    selectReviewById(state, { reviewId })
  );

  if (!review) {
    return null;
  }

  return <Review review={review} />;
};
