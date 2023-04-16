import React from "react";
import classNames from "classnames";
import Image from "next/image";

import styles from "./styles.module.scss";

export const Header = ({ className }) => {
  return (
    <header className={classNames(styles.root)}>
      <Image src="/images/logo.png" width={115} height={18} alt="" />
    </header>
  );
};
