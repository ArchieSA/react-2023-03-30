import React from "react";
import { Rating } from "@/components/Rating/Rating";
import styles from "./styles.module.scss";

export const Review = ({ review }) => {
  if (!review) {
    return null;
  }

  const { user, text, rating } = review;

  return (
    <div>
      <p>{user}</p>
      <Rating value={rating} className={styles.rating} />
      <p>{text}</p>
    </div>
  );
};
