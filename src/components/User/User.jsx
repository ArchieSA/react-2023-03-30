import React from "react";

export default function User({ user }) {
  const { name } = user;

  return <p>{name}</p>;
}
