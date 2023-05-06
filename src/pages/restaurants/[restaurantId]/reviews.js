import { NewReviewForm } from "@/components/NewReviewForm/NewReviewForm";
import { RestaurantBackButtonContainer } from "@/containers/RestaurantBackButton/RestaurantBackButton";
import { RestaurantReviewsContainer } from "@/containers/RestaurantReviews/RestaurantReviews";
import { useRouter } from "next/router";

export default function CurrentRestaurantsReviewsPage() {
  const router = useRouter();

  return (
    <>
      <RestaurantReviewsContainer restaurantId={router.query.restaurantId} />
      <NewReviewForm />
      <RestaurantBackButtonContainer />
    </>
  );
}
