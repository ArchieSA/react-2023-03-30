import React from "react";

export const User = ({ user }) => {
  if (!user) {
    return null;
  }

  const { name } = user;

  return (
    <div>
      <p>{name}</p>         
    </div>
  );
};
