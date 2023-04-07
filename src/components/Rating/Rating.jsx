import React from "react";

export const Rating = ({ rating = 0, children = "+" }) => (
  <p className="stars">{new Array(rating + 1).join(children)}</p>
);
