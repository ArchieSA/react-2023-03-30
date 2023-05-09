import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const Restaurant = ({ restaurant }) => {
  const { name, id, reviews } = restaurant || {};

  // const rating = useMemo(
  //   () =>
  //     !!reviews?.length
  //       ? Math.floor(
  //           reviews.reduce((acc, review) => acc + review.rating, 0) /
  //             reviews.length
  //         )
  //       : 0,
  //   [reviews]
  // );

  return (
    <div >
      <h2>{name}</h2>         
        <Link href={{ pathname: "/menu/[id]", query: { id }, }} className={styles.link}>
          Menu
        </Link>
        <Link  href={{ pathname: "/reviews/[id]", query: { id }, }} className={styles.link}>
          Reviews
        </Link>    
    </div>
  );
};
