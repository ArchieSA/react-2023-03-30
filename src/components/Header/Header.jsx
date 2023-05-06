import React, { useContext } from "react";
import classNames from "classnames";
import Image from "next/image";

import styles from "./styles.module.scss";
import { Button } from "@/components/Button/Button";
import { ThemeContext } from "@/contexts/ThemeContext/themeContext";
import Link from "next/link";

export const Header = ({ className }) => {
  return (
    <header className={classNames(styles.root, className)}>
      <Image src="/images/logo.png" width={115} height={18} alt="" />
      <div className={styles.links}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/restaurants" className={styles.link}>
          Restaurants
        </Link>
        <Link href="/cart" className={styles.link}>
          Cart
        </Link>
      </div>
    </header>
  );
};
