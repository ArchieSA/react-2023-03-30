import { Header } from "@/components/Header/Header";
import { restaurants } from "@/constants/fixtures";
import { CartContainer } from "@/containers/Cart/Cart";
import { RestaurantContainer } from "@/containers/Restaurant/Restaurant";
import { RestaurantTabsContainer } from "@/containers/RestaurantTabs/RestaurantTabs";
import { ThemeContextProvider } from "@/contexts/ThemeContext/ThemeContextProvider";
import { useActiveId } from "@/hooks/useActiveIndex";
import React from "react";


export const Home = () => {
  const { activeId, setActiveId } = useActiveId({
    storageName: "activeRestaurantId",
  });

  return (
      <ThemeContextProvider>
        <div>
          <Header />
          <RestaurantTabsContainer
            restaurants={restaurants}
            onTabClick={setActiveId}
          />
          {activeId && <RestaurantContainer restaurantId={activeId} />}
          <CartContainer />
        </div>
      </ThemeContextProvider>
  );
};
