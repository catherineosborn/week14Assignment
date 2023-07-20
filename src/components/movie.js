import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import ReviewForm from "./reviewForm";

export default function Movie(props) {
  const [showReviewForm, setShowReviewForm] = React.useState(false);
  const [selectedMovie, setSelectedMovie] = React.useState(null);

  function openReviewForm() {
    setSelectedMovie({
      image: props.image,
      title: props.title,
    });
    setShowReviewForm(true);
  }

  return (
    <Card className="card">
      <Card.Img variant="top" src={props.image} className="movie-image" />
      <Card.Body className="movie-card-container">
        <Card.Title className="movie-title">{props.title}</Card.Title>
        <Card.Subtitle className="movie-synopsis">{props.synopsis}</Card.Subtitle>
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
    </Card>
  );
  
}
