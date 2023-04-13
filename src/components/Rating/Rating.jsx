import React from "react";
import Image from 'next/image';
import styles from "./styles.module.scss";

export const Rating = ({ value, maxRating = 5 }) => {
    if (isNaN(value) || isNaN(maxRating)) {
        return null;
    }

    if (maxRating <= 0) {
        return null;
    }

    const stars = [...Array(maxRating)].map((_, index) => {
        const src = `/images/star${ index < Math.round(value) ? '-gold': '' }.png`;
        return <Image src={src} width={24} height={24} alt='star' />;
    });

    return <div className={styles.root}>{stars}</div>;
};
