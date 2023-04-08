import { Review } from "../Review/Review";

export { Review } from "../Review/Review";

export const Reviews = ({ reviews }) => {
    if (!reviews) {
        return null;
    }

    return (
        <div>
            <h3>Отзывы:</h3>
            {reviews.map((review) => (
                <Review key={ review.id } review={ review }/>
            ))}
        </div>
    );
}