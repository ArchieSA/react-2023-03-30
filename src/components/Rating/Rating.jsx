import React from "react";
import styles from "./styles.module.scss";
import { RatingStar } from "../RatingStar/RatingStar";
import classnames from "classnames";

export const Rating = ({ value, maxRating = 5, className }) => {
    if (isNaN(value) || isNaN(maxRating)) {
        return null;
    }

    if (maxRating <= 0) {
        return null;
    }

    return <div className={classnames(styles.root, className)}>
        {[...Array(maxRating)].map((_, index) => (
            <RatingStar key={index} isGold={index < Math.round(value)} />
        ))}
    </div>;
};
