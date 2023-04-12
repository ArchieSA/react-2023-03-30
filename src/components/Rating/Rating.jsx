import React from "react";
import Image from 'next/image';


export const Rating = ({rating, maxRating = 5}) => {   

    const stars = [];
    for (let i = 0; i < rating; i++) {
        stars.push(<Image src='/Images/star-gold.png' width={20} height={20} alt='star-gold' />);
    }

    for (let i = 0; i < maxRating - rating; i++) {
        stars.push(<Image src='/Images/star.png' width={20} height={20} alt='star' />);
    }
    console.log(maxRating)
   
    return stars.map((star, index) => (<span key={index}>{star}</span>));
        
};