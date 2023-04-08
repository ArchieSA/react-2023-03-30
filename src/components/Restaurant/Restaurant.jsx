import React from "react";
import {Menu} from "@/components/Menu/Menu";
import {Review} from "@/components/Review/Review";

export const Restaurant = ({restaurant}) => {
    if (!restaurant) {
        return null;
    } else {
        return (
            <div>
                <h2>{restaurant.name}</h2>
                <Menu menu={restaurant.menu}/>
                <h4><Review review={restaurant.reviews}/></h4>
            </div>
        )
    }
};
