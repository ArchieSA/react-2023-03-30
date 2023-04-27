import {useSelector} from "react-redux";
import {selectReviewsByRestaurantId} from "@/store/entities/restaurant/selectors";
import {Reviews} from "@/components/Reviews/Reviews";

export const RestaurantReviewsContainer = ({ restaurantId }) => {
    const reviews = useSelector((state) =>
        selectReviewsByRestaurantId(state, { restaurantId })
    );

    if (!reviews?.length) {
        return null;
    }

    return <Reviews reviews={reviews}/>
}