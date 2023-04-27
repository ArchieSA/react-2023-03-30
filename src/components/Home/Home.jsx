import { CartContainer } from "@/containers/Cart/Cart";
import { Header } from "@/components/Header/Header";
import { restaurants } from "@/constants/fixtures";
import { RestaurantContainer } from "@/containers/Restaurant/Restaurant";
import { RestaurantTabsContainer } from "@/containers/RestaurantTabs/RestaurantTabs";
import { ThemeContextProvider } from "@/contexts/ThemeContext/ThemeContextProvider";
import { useActiveId } from "@/hooks/useActiveIndex";
import { store } from "@/store";
import React from "react";
import { Provider } from "react-redux";
import { Reviews } from "../Reviews/Reviews";

export const Home = () => {
  const { activeId, setActiveId } = useActiveId({
    storageName: "activeRestaurantId",
  });

  return (
    <Provider store={store}>
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
    </Provider>
  );
};
