import {React, useContext} from "react";
import RatingItem from "./RatingItem";
import RatingContext from "../context/RatingContext";
function RatingList() {

  const {rating} = useContext(RatingContext)

  if (!rating || rating.length === 0) {
    return <p>No Data</p>;
  }
  return (
    <div className="rating-list">
      {rating.map((item) => (
        <RatingItem key={item.id} item={item}   />
      ))}
    </div>
  );
}

export default RatingList;
