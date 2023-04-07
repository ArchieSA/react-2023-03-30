import { restaurants } from "@/constants/fixtures";
import { Review } from "@/components/Review/Review";

import React from 'react'

export function Reviews() {
  return (
    <div>
        {restaurants.map((reviewsObj) => ( 
            <Review key={reviewsObj.id} reviewsObj={reviewsObj} />
        ))}
    </div>
  );
}
