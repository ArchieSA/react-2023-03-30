import React from "react";
import Image from 'next/image';

export const RatingStar = ({ isGold }) => {
    const src = `/images/star${ isGold ? '-gold': '' }.png`;

    return <Image src={src} width={24} height={24} alt='star' />;
};
