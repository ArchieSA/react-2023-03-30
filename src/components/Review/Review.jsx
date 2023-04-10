import React from "react";

export const Review = ({ review }) => {
    if (!review) {
      return null;
    }
    
    const { rating, text, user } = review;
    
    return (
        <li>Rating {rating}, {text} ({user})</li>
    );
    
};
