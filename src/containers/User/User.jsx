
import { selectUserById } from "@/store/entities/users/selectors";
import React from "react";
import { useSelector } from "react-redux";
import { User } from "@/components/User/User";

export const UserContainer = ({userId}) => {
 
  const user = useSelector((state) =>
  selectUserById(state, {userId})
  );

  return <User user={user} />;
};
