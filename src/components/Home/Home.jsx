<<<<<<< HEAD
import { CartContainer } from "@/containers/Cart/Cart";
=======
>>>>>>> 24831b1ccea2d39ee5c37958571f20f48499064f
import { Header } from "@/components/Header/Header";
import { restaurants } from "@/constants/fixtures";
import { CartContainer } from "@/containers/Cart/Cart";
import { RestaurantContainer } from "@/containers/Restaurant/Restaurant";
import { RestaurantTabsContainer } from "@/containers/RestaurantTabs/RestaurantTabs";
import { ThemeContextProvider } from "@/contexts/ThemeContext/ThemeContextProvider";
import { useActiveId } from "@/hooks/useActiveIndex";
import React from "react";
<<<<<<< HEAD
import { Provider } from "react-redux";
import { Reviews } from "../Reviews/Reviews";
=======
>>>>>>> 24831b1ccea2d39ee5c37958571f20f48499064f

export const Home = () => {
  const { activeId, setActiveId } = useActiveId({
    storageName: "activeRestaurantId",
  });

  return (
<<<<<<< HEAD
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
=======
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
>>>>>>> 24831b1ccea2d39ee5c37958571f20f48499064f
  );
};
