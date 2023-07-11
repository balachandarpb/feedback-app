import { React, useContext } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "./shared/Card";
import RatingContext from "../context/RatingContext";
function RatingItem({ item }) {
  const { deleteRating, editRating } = useContext(RatingContext);

  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <div className="num-text">{item.text}</div>
      <button className="close" onClick={() => deleteRating(item.id)}>
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => editRating(item)}>
        <FaEdit color="purple" />
      </button>
    </Card>
  );
}

export default RatingItem;
