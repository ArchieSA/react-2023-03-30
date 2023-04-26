import React from "react";

export const User = ({ user }) => {
  const { name } = user || {};
  return (    
    <p>{name}</p>
  );
};
