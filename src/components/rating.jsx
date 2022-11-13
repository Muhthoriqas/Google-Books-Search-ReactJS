import React from "react";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const BasicFn = ({ averageRating }) => {
  const totalStars = 5;
  const activeStars = averageRating;
  //console.log(averageRating);

  return (
    <Box>
      {[...new Array(totalStars)].map((arr, index) => {
        return index < activeStars ? (
          <StarIcon
            key={index}
            name="half-rating"
            precision={0.5}
            style={{ color: "#d1913c" }}
          />
        ) : (
          <StarBorderIcon name="half-rating" key={index} precision={0.5} />
        );
      })}
    </Box>
  );
};
export default BasicFn;
