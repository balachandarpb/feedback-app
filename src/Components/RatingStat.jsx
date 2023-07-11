import {React, useContext} from "react";
import RatingContext from "../context/RatingContext";
function RatingStat( ) {
  const {rating} = useContext(RatingContext)
  let average =
    rating.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / rating.length;
  average = average.toFixed(1).replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h4>{rating.length} Reviews</h4>
      <h4> Average :{isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default RatingStat;
