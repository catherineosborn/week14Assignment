import React from "react";
import { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/button";
import Stars from "./stars";
import ReviewList from "./reviewList";

export default function ReviewForm(props) {
    const [reviewData, setReviewArray] = useState([
        {
            id: 1,
            username: "catherineosborn",
            rating: "5🌟",
            review: "Loved it! Best movie ever!",
        },
        {
            id: 2,
            username: "notcatherineosborn",
            rating: "2🌟",
            review: "Meh",
        },
    ]);

    const [nextId, setNextId] = useState(3); 

    function displayReview() {
        const itemList = reviewData.map((review) => (
            <>
            <hr />
            <li className="review--list">
                <span className="username">{review.name}</span>
                <br />
                <p className="review">{review.review}</p>
                <br />
                <span className="stars">{review.stars}</span>
            </li>
            </>
        ));
        return (
            <div>
                <ul>{itemList}</ul>
            </div>
        );
    }

    const username = useRef(null);
    const review = useRef(null);
    const stars = useRef(null);

    function postReview() {
        setReviewArray ((current) => [
            ...current,
            {
                id: nextId,
                username: username.current.value,
                stars: stars.current.value,
                review: review.current.value,
            },
        ]);
        setNextId((prevId) => prevId + 1);
    }

    return (
        <div className="form">
            <hr />
            <h3>Write a review:</h3>
            <Stars />
            <Form className="form container flex bg-light">
                <Form.Group className="mb-3" controlId="ControlTextarea1">
                    <Form.Label>{props.movie.title} Review</Form.Label>
                    <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Start typing your review here..."
                    size="sm"
                    ref={username}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ControlTextarea2">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                    as="textarea"
                    rows={1}
                    placeholder="Username here..."
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
                <ReviewList></ReviewList>
            </div>
            <div>{displayReview}</div>
        </div>
    )
}