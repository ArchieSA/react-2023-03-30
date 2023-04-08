import React from "react";
import { Dish } from "../Dish/Dish";

export const Menu = ({ menu }) => {
    if (!menu) {
        return null;
    }

    return (
        <div>
            <h3>Меню:</h3>
            {menu.map((dish) => (
                <Dish key={ dish.id } dish={ dish } />
            ))}
            <br />
        </div>
    );
};