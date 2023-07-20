import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export default function Stars(props) {
  const { handleRatingChange, stars } = props; 

  return (
    <Box sx={{ "& > legend": { mt: 2 } }}>
      <Rating
        name="simple-controlled"
        value={props.stars} 
        onChange={(event, newValue) => {
          props.setStarRating(newValue); 
        }}
      />
    </Box>
  );
}

