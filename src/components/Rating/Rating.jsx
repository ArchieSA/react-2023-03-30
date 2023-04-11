import {Star} from "@/components/Star/Star";
import classNames from "classnames";

import styles from "./styles.module.scss";

export const Rating = ({value = 0, maxValue = 0, className}) => {
        if (value > maxValue) {
            value = maxValue;
        }
        const arr = [...Array(maxValue).keys()];

        return <div className={classNames(styles.root, className)}>{arr.map(i =>
            <Star key={i} selected={i < value}/>
        )}</div>;
    }
;