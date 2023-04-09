export const Review = ({review}) => {
    return <div id={review.id}>
        <span>User: {review.user}</span><br/>
        <span>Rating: {review.rating}</span><br/>
        <textarea defaultValue={review.text}/><br/>
    </div>
}
