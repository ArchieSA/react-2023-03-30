import { Provider } from "@/CustomStore";
import { Button } from "@/components/Button/Button";
import { Cart } from "@/components/Cart/Cart";
import { Header } from "@/components/Header/Header";
import { Restaurant } from "@/components/Restaurant/Restaurant";
import { Tabs } from "@/components/Tabs/Tabs";
import { restaurants } from "@/constants/fixtures";
import { ThemeContextProvider } from "@/contexts/ThemeContext/ThemeContextProvider";
import { ThemeContext } from "@/contexts/ThemeContext/themeContext";
import { useActiveIndex } from "@/hooks/useActiveIndex";
import { store } from "@/store";
import React, { useState } from "react";

export const Home = () => {
  const { activeIndex, setActiveIndex } = useActiveIndex({
    storageName: "activeRestaurantIndex",
  });

  const activeRestaurant = restaurants[activeIndex];

  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <div>
          <Header />
          <Tabs restaurants={restaurants} onTabClick={setActiveIndex} />
          {activeRestaurant && (
            <Restaurant
              key={activeRestaurant.id}
              restaurant={activeRestaurant}
            />
          )}
          <Cart />
        </div>
      </ThemeContextProvider>
    </Provider>
  );
};
