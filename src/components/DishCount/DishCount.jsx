import { Button } from "../Button/Button";
import classNames from "classnames";
import React from "react";

import styles from './styles.module.scss'

export const DishCount = ({
  counter,
  onClickIncrement,
  onClickDecrement,
}) => {
  
  return (
  <div
    className={classNames(styles.root)}  
  >
    <Button
      children={'-'} 
      type={'count'}
      onClick={onClickDecrement}
    />
    <h3>{counter}</h3>
    <Button 
      children={'+'}
      type={'count'}
      onClick={onClickIncrement}
    />
  </div>
  )
}
