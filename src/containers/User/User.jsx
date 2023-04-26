import { User } from "@/components/User/User";
import { selectUserById } from "@/store/entities/user/selectors";
import React from "react";
import { useSelector } from "react-redux";

export const UserContainer = ({ userId }) => {
  const user = useSelector((state) =>
    selectUserById(state, { userId })
  );

  if (!user) {
    return null;
  }

  return <User user={user} />;
};
