import {Header} from "@/components/Header/Header";
import {Restaurant} from "@/components/Restaurant/Restaurant";
import {Tabs} from "@/components/Tabs/Tabs";
import {restaurants} from "@/constants/fixtures";
import React from "react";
import {useActiveIndex} from "@/hooks/useActiveIndex";

export const Home = () => {
    const [activeRestaurantIndex, setActiveRestaurantIndex] = useActiveIndex('restaurant', 0)

    const activeRestaurant = restaurants[activeRestaurantIndex];

    return (
        <div>
            <Header/>
            <Tabs
                restaurants={restaurants}
                activeIndex={activeRestaurantIndex}
                onTabClick={setActiveRestaurantIndex}
            />
            {activeRestaurant && (
                <Restaurant key={activeRestaurant.id} restaurant={activeRestaurant}/>
            )}
        </div>
    );
};
