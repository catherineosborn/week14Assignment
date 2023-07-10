import React from "react";
import ReactStars from "react-rating-stars-component";


export default function Stars(props) {
    const [hover, setHover] = React.useState(null);
    return (
        <div className="stars">
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                    <label>
                        <input 
                          type="radio"
                          name="star"
                          value={ratingValue}
                          onClick={() => props.handleClick(ratingValue)}
                        />
                        <ReactStars 
                          className="star"
                          color={
                            ratingValue <= (hover || props.stars) ? "#ffea07" : "#161617"
                          }
                          onMouseEnter={() => setHover(ratingValue)}
                          onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })}
        </div>
    );
}