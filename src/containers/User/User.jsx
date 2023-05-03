import { User } from "@/components/User/User";
import { selectUserById } from "@/store/entities/user/selectors";
import { loadUserByReviewIdIfnotExist } from "@/store/entities/user/thunk/loadUserByReviewIdIfnotExist";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const UserContainer = (userId) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => selectUserById(state, userId)); 

  useEffect(() => {
    dispatch(loadUserByReviewIdIfnotExist(userId))
  }, [userId]);

  if (!user) {
    return null;
  }

  return <User user={user} />;
};
