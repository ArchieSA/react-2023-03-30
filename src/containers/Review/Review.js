import {useSelector} from "react-redux";
import {selectReviewById} from "@/store/entities/review/selectors";
import {Review} from "@/components/Review/Review";

export const ReviewContainer = ({reviewId}) => {
    const review = useSelector((state) => selectReviewById(state, { reviewId }));

    return (
        <Review userId={review.userId} text={review.text} rating={review.rating}/>
    )

}