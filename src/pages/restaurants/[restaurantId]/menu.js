import { RestaurantMenuContainer } from "@/containers/RestaurantMenu/RestaurantMenu";
import { useRouter } from "next/router";

export default function CurrentRestaurantsMenuPage() {
  const router = useRouter();

  return <RestaurantMenuContainer restaurantId={router.query.restaurantId} />;
}
