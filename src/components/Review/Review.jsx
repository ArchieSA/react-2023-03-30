export const Review = ({review}) => {
    if (!review) {
        return null;
    } else {
        return (
            <div>{review.map((review) => (
                <div style={{marginLeft: "1rem"}} key={review.id}>
                    {review.user}
                    <div style={{marginLeft: "1rem"}}>
                        Review: {review.text} Rating: {review.rating}
                    </div>
                </div>
            ))}
            </div>
        )
    }
};