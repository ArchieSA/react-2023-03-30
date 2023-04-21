import React, { useContext } from "react";
import classNames from "classnames";
import Image from "next/image";

import styles from "./styles.module.scss";
import { Button } from "@/components/Button/Button";
import { ThemeContext } from "@/contexts/ThemeContext/themeContext";

export const Header = ({ className }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <header className={classNames(styles.root)}>
      <Image src="/images/logo.png" width={115} height={18} alt="" />\
      <Button
        onClick={() => setTheme(theme === "default" ? "dark" : "default")}
      >
        ChangeTheme
      </Button>
    </header>
  );
};
