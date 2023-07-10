export default function ReviewList(props) {
    return (
      <div className="review-list">
        {props.reviews.map((review, i) => (
          <p className="review-items" key={i}>
            {review.username}: "{review.review}" {review.stars}
          </p>
        ))}
      </div>
    );
}  