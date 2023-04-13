import React from "react";
import Image from 'next/image';


export const Rating = ({ value, maxRating = 5 }) => {

    if (!maxRating) {
        return null;
    }

    if (!value) {
        value = 0;
    }

    if (value > maxRating) {
        maxRating = value;
    }

    const stars = [];

    for (let i = 0; i < value; i++) {
        stars.push(<Image src='/images/star-gold.png' width={ 19 } height={ 19 } alt='star-gold' />);
    }

    for (let i = 0; i < maxRating - value; i++) {
        stars.push(<Image src='/images/star.png' width={ 19 } height={ 19 } alt='star' />);
    }

    return stars.map((star, index) => (
        <span key={index}>{star}</span>
    ));
};
