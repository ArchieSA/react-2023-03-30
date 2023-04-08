import React from "react";

export const Dish = ({ dish }) => {
    if (!dish) {
        return null;
    }
    
    const { name } = dish;

    return (
        <div>
            <span>- { name }</span>
            <br/>
            <span>-- состав:</span>
            <br/>
                { dish.ingredients.map((ingredient) => (
                <div>
                    <span>--- { ingredient }</span>
                    <br/>
                </div>
                ))}
        </div>
    );
};

// id: 'd75f762a-eadd-49be-8918-ed0daa8dd024',
// name: 'Chicken tikka masala',
// price: 12,
// ingredients: ['chicken', 'rice'],