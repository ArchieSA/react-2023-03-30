import React from "react";

export const Review = ({ user, text, rating }) => {
    if (!user) {
      return null;
    }
    
    return (
        <li>Rating {rating}, {text} ({user})</li>
    );
    
};
