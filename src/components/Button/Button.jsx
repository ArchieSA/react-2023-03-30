import React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

const buttonStyles = {
  primary: styles.primary,
  secondary: styles.secondary,
};

export function Button({
  children,
  disabled,
  type = "primary",
  className,
  onClick,
}) {
  return (
    <button
      className={classNames(styles.root, buttonStyles[type], className, {
        [styles.disabled]: disabled,
      })}
      disabled={disabled}
      onClick={() => !disabled && onClick()}
    >
      {children}
    </button>
  );
}
