import React from "react";

export const User = ({userName, userId}) => {

  return (
    <div userid={userId}>
      <b>{userName}</b>
    </div>
  )
}