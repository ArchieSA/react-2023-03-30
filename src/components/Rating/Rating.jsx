import React from "react";
import styles from "./styles.module.scss";
import { RatingStar } from "../RatingStar/RatingStar";

export const Rating = ({ value, maxRating = 5 }) => {
    if (isNaN(value) || isNaN(maxRating)) {
        return null;
    }

    if (maxRating <= 0) {
        return null;
    }

    return <div className={styles.root}>
        {[...Array(maxRating)].map((_, index) => (
            <RatingStar isGold={index < Math.round(value)} />
        ))}
    </div>;
};
