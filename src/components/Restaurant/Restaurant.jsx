import { Menu } from "@/components/Menu/Menu";
import { NewReviewForm } from "@/components/NewReviewForm/NewReviewForm";
import { Rating } from "@/components/Rating/Rating";
import { Reviews } from "@/components/Reviews/Reviews";
import { useAmount } from "@/hooks/useAmount";
import React, { useEffect, useMemo, useRef } from "react";

const memoizedFunction = (function () {
  let savedValue;

  return (a, b) => {
    if (!savedValue) {
      savedValue = 1 + 1;
    }

    return savedValue;
  };
})();

export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant || {};
  const ref = useRef(); // { current: 123 }

  const rating = useMemo(
    () =>
      !!reviews?.length
        ? Math.floor(
            reviews.reduce((acc, review) => acc + review.rating, 0) /
              reviews.length
          )
        : 0,
    [reviews]
  );

  const restaurantMainInfo = useMemo(() => [name, rating], [name, rating]);

  useEffect(() => {
    console.log("mainInfoChanged");
  }, [restaurantMainInfo]);

  useEffect(() => {
    console.log(ref.current);
    console.log(ref.current.getBoundingClientRect());
  }, []);

  if (!restaurant) {
    return null;
  }

  return (
    <div ref={ref}>
      <h2>{name}</h2>
      <Rating value={rating} />
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
      <NewReviewForm />
    </div>
  );
};
