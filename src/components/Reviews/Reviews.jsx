import {Review} from "@/components/Review/Review";
import React from "react";

export const Reviews = ({reviews}) => {
    if (!reviews) {
        return null;
    }
    return (
        <div>
            <h3>Reviews:</h3><br/>
            {reviews.map((review) => (
                <Review key={review.id} review={review}/>
            ))}
        </div>
    );
}
