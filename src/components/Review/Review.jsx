export const Review = ({ review }) => {
    if (!review) {
        return null;
    }

    return ( 
        <div>
            <div>
                <span>- user { review.user }</span>
            </div>
            <div>
                <span>-- { review.text }</span>
            </div>
            <div>
                <span>-- rating { review.rating }</span>
            </div>
            <br />
        </div>
    );
};