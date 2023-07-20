import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import ReviewList from "./reviewList";
import Stars from "./stars";
import StaticStars from "./staticStars";

export default function ReviewForm(props) {
  const [reviewData, setReviewArray] = useState([
    {
      id: 1,
      username: "catherineosborn",
      rating: 5,
      review: "Loved it! Best movie ever!",
    },
    {
      id: 2,
      username: "notcatherineosborn",
      rating: 2,
      review: "Meh",
    },
  ]);

  const [nextId, setNextId] = useState(3);
  const [starRating, setStarRating] = useState(0);

  function displayReview() {
    return reviewData.map((review) => (
      <div key={review.id}>
        <hr />
        <li className="review--list">
          <span className="username">{review.username}</span>
          <br />
          <p className="review">{review.review}</p>
          <br />
          <span className="stars">
            <StaticStars rating={review.rating} />
          </span>
        </li>
      </div>
    ));
  }

  function handleRatingChange(newValue) {
    setStarRating = newValue;
  }

  const username = useRef(null);
  const review = useRef(null);

  function postReview() {
    setReviewArray((current) => [
      ...current,
      {
        id: nextId,
        username: username.current.value,
        rating: starRating,
        review: review.current.value,
      },
    ]);
    setNextId((prevId) => prevId + 1);
    setStarRating(0);
  }

  return (
    <div className="form">
      <hr />
      <h3>Write a review:</h3>
      <Stars setStarRating={setStarRating} stars={starRating} /> 
      <Form className="form container flex bg-light">
        <Form.Group className="mb-3" controlId="ControlTextarea2">
          <Form.Label>Username</Form.Label>
          <Form.Control
            as="textarea"
            rows={1}
            placeholder="Username here..."
            size="sm"
            ref={username}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="ControlTextarea1">
          <Form.Label>{props.movie.title} Review</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Start typing your review here..."
            size="sm"
            ref={review}
          />
        </Form.Group>
        <br />
        <Button variant="secondary" onClick={postReview}>
          Submit
        </Button>
      </Form>

      <br />
      <hr />
      <div>
        <h5>Reviews</h5>
        <ReviewList reviews={reviewData} />
      </div>
    </div>
  );
}
