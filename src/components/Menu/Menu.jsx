import {Dish} from "@/components/Dish/Dish";
import React from "react";

export const Menu = ({menu}) => {
    if (!menu) {
        return null;
    }
    return (
        <div>
            <h3>Menu:</h3><br/>
            {menu.map((dish) => (
                <Dish key={dish.id}  dish={dish}/>
            ))}
        </div>
    );
}