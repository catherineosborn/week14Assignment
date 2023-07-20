import React from "react";
import ReviewList from "./reviewList";
import Stars from "./stars";

export default function Review(props) {
    const [starRating, setStarRating] = React.useState(null);
  
    const username = React.useRef(null);
    const review = React.useRef(null);
  
    function saveReview(event) {
      event.preventDefault();
      props.setReviewData((prevData) => [
        ...prevData,
        {
          username: username.current.value,
          review: review.current.value,
          rating: !starRating ? "0🌟" : starRating + "🌟",
        },
      ]);
    
      username.current.value = "";
      review.current.value = "";
    }
  
    return (
      <div>
        <form className="review-form" onSubmit={saveReview}>
          <input
            type="text"
            placeholder="Enter username"
            ref={username}
            name="username"
            value={props.reviewData.username}
            required
          />
          <textarea
            placeholder="Start typing your review..."
            ref={review}
            name="review"
            value={props.reviewData.review}
            required
          />
          <Stars stars={starRating} interactive={false}/>
          <button className="form-button">Post Review</button>
        </form>
      </div>
    );
  }  