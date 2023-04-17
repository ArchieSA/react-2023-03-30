import { Button } from "@/components/Button/Button";
import React, { useState } from "react";

import ThumbDown from "./images/thumb-down.svg";

import styles from "./styles.module.scss";

const MAX_COUNT = 5;

export const Dish = ({dish}) => {
    const [count, setCount] = useState(0);

    if (!dish) {
        return null;
    }

    const {name, ingredients} = dish;

    return (
        <div>
            <span>{name}</span>
            <Button
                className={styles.decrementAction}
                type="secondary"
                disabled={ count <= 0 }
                onClick={ () => setCount(count - 1) }>
                -
            </Button>
            {count}
            <Button
                className={styles.incrementAction}
                type="primary"
                disabled={ count >= MAX_COUNT }
                onClick={ () => setCount(count + 1)}>
                +
            </Button>
        </div>
    );
};
