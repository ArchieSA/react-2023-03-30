import { ReviewContainer } from "@/containers/Review/Review";
import React from "react";

import styles from "./styles.module.scss";

export const Reviews = ({ reviewIds }) => {
  if (!reviewIds?.length) {
    return null;
  }

  return (
    <div>
      <h3>Reviews</h3>
      <div>
        {reviewIds.map((reviewId) => (
          <ReviewContainer
            key={reviewId}
            reviewId={reviewId}
            className={styles.review}
          />
        ))}
      </div>
    </div>
  );
};
