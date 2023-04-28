import React from "react";

export const User = ({ user }) => {
<<<<<<< HEAD
  if (!user) {
    return null;
  }

  const { name } = user;

  return (
    <div>
      <p>{name}</p>         
    </div>
  );
=======
  return <div>{user.name}</div>;
>>>>>>> 24831b1ccea2d39ee5c37958571f20f48499064f
};
