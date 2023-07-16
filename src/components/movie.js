import React from "react";
import Card from "react-bootstrap/Card";
import Stars from "./stars";
import ReviewForm from "./reviewForm";
import ReviewList from "./reviewList";
import Button from "react-bootstrap/button";
import MovieList from "./movieList";

export default function Movie(props) {
    const [reviewData, setReviewData] = React.useState([
        {
            username: "catherineosborn",
            rating: "5🌟",
            review: "Loved it! Best movie ever!",
        },
        {
            username: "notcatherineosborn",
            rating: "2🌟",
            review: "Meh",
        },
    ]);

    const [showReviewForm, setShowReviewForm] = React.useState(false);
    const [selectedMovie, setSelectedMovie] = React.useState(null);

    function openReviewForm() {
        setSelectedMovie({
            image: props.image,
            title: props.title,
        });
        {setShowReviewForm(true)}
    }    

    return (
        <div className="card">
            <Card bg="dark" text="white" className="movie-card">
                <Card.Img variant="top" src={props.image} className="movie.image" />
                <Card.Body>
                    <Card.Title className="movie-title">{props.title}</Card.Title>
                    <br />
                    <Card.Subtitle className="movie-synopsis">{props.synopsis}</Card.Subtitle>
                    <br />
                    <Card.Text className="movie-details">
                        <b>Year: </b> {props.year} <br />
                        <b>Director: </b> {props.director} <br />
                        <b>Writer: </b> {props.writer} <br />
                        <b>Starring: </b> {props.cast}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="secondary" onClick={openReviewForm}>
                        Review Movie
                    </Button>
                </Card.Footer>
            </Card>
            {showReviewForm && (
                <div className="review-form-popup">
                    <div className="review-form-popup-content">
                        <span className="close-icon" onClick={() => setShowReviewForm(false)}>
                            &times;
                        </span>
                        <ReviewForm movie={selectedMovie} />
                    </div>
                </div>
            )}
        </div>
    );
    
}