import React from "react";
import Image from 'next/image';

export const RatingStar = ({ isGold, width = 24 }) => {
    const src = `/images/star${ isGold ? '-gold': '' }.png`;

    return <Image src={src} width={width} height={width} alt='star' />;
};
