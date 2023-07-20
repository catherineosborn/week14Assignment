import React from "react";
import StaticStars from "./staticStars";

export default function ReviewList(props) {
  return (
    <div className="review-list">
      {props.reviews.map((review) => (
        <p className="review-items" key={review.id}>
          {review.username}: "{review.review}"{" "}
          <StaticStars rating={review.rating} />
        </p>
      ))}
    </div>
  );
}