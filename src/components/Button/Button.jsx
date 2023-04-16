import React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss"

const buttonStyles = {
  primary: styles.primary,
  secondary: styles.secondary,
  count: styles.count,
}

export function Button({ 
  children, 
  disabled,
  type,
  className,
  onClick 
}) {
  return (
    <button
      onClick={onClick}
      className={classNames(styles.root, buttonStyles[type])}
      >{children}</button>
  )
}
