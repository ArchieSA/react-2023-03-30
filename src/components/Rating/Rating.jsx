import React from "react";

export const Rating = ({ rating = 0, raitingType = "+" }) => (
  <p className="stars">{new Array(rating + 1).join(raitingType)}</p>
);
