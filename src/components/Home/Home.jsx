import { Header } from "@/components/Header/Header";
import { Restaurant } from "@/components/Restaurant/Restaurant";
import { Tabs } from "@/components/Tabs/Tabs";
import { restaurants } from "@/constants/fixtures";
import { useTabs } from "@/hooks/useTabs";

export const Home = () => {
  const { isTabsReady, activeTabId, setActiveTabWithCache } =
    useTabs({tabName: "activeRestaurantID" });

  const activeRestaurant = restaurants[activeTabId];

  return (
    <div>
      <Header />
      <Tabs
        restaurants={restaurants}
        activeIndex={activeTabId}
        onTabClick={setActiveTabWithCache}
      />
      {isTabsReady && activeRestaurant && (
        <Restaurant key={activeRestaurant.id} restaurant={activeRestaurant} />
      )}
    </div>
  );
};
