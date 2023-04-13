/* eslint-disable react/no-children-prop */
import { Button } from "@/components/Button/Button";
import { Home } from "@/components/Home/Home";
import React from "react";

const array = [];

export default function HomePage() {
  return <Home />;
}

// const isVisible = false;

// function HomePageOld() {
//   return React.createElement("div", {
//     children: isVisible
//       ? [
//           !!array.length && React.createElement("div", { children: "Hello" }),
//           React.createElement(Button),
//           React.createElement(Button),
//         ]
//       : undefined,
//   });
// }
