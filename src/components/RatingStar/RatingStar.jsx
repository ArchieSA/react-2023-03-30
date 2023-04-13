import React from "react";
import Image from 'next/image';

const greyStarSrc = '/images/star.png'
const goldStarSrc = '/images/star-gold.png'

export const RatingStar = ({ isGold, width = 24, alt = 'star' }) => {
    const src = isGold ? goldStarSrc : greyStarSrc;

    return <Image src={src} width={width} height={width} alt={alt} />;
};
