<<<<<<< HEAD

import { selectUserById } from "@/store/entities/users/selectors";
import React from "react";
import { useSelector } from "react-redux";
import { User } from "@/components/User/User";

export const UserContainer = ({userId}) => {
 
  const user = useSelector((state) =>
  selectUserById(state, {userId})
  );
=======
import { User } from "@/components/User/User";
import { selectUserById } from "@/store/entities/user/selectors";
import React from "react";
import { useSelector } from "react-redux";

export const UserContainer = ({ userId }) => {
  const user = useSelector((state) => selectUserById(state, { userId }));

  if (!user) {
    return null;
  }
>>>>>>> 24831b1ccea2d39ee5c37958571f20f48499064f

  return <User user={user} />;
};
