import {Button} from "@/components/Button/Button";
import React, {useState} from "react";

import ThumbDown from "./images/thumb-down.svg";

import styles from "./styles.module.scss";

export const Dish = ({dish}) => {

    const min = 0;
    const max = 5;
    const [count, setCount] = useState(0);

    if (!dish) {
        return null;
    }

    const {name, ingredients} = dish;

    return (
        <div>
            <span>{name}</span>
            <Button className={styles.decrementAction} type="secondary" onClick={()=>{
                if (count > 0) setCount(count - 1)}}>
                -
            </Button>
            {count}
            <Button className={styles.incrementAction} type="primary" onClick={()=>{
                if (count < 5) setCount(count + 1)}}>
                +
            </Button>
        </div>
    );
};
