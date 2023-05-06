import { RestaurantContainer } from "@/containers/Restaurant/Restaurant";
import { useRouter } from "next/router";

export default function CurrentRestaurantsPage() {
  const router = useRouter();

  return <RestaurantContainer restaurantId={router.query.restaurantId} />;
}
