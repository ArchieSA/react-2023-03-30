import { Reviews } from "@/components/Reviews/Reviews";
import { selectReviewsByRestaurantId } from "@/store/entities/restaurant/selectors";
import { useSelector } from "react-redux";

export const ReviewsContainer = ({ restaurantId }) => {
  const reviews = useSelector((state) => 
  selectReviewsByRestaurantId(state, { restaurantId })
);

  if (!reviews?.length) {
    return null;
  }

  return <Reviews reviews={reviews} />;
};