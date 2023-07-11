import React from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import { useState, useContext, useEffect } from "react";
import RatingSelect from "./RatingSelect";
import RatingContext from "../context/RatingContext";

function RatingForm() {
  const { addRating, ratingEdit, updateRating } = useContext(RatingContext);
  const [rating, setRating] = useState(10);
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (ratingEdit.edit === true) {
      setBtnDisabled(false);
      setText(ratingEdit.item.text);
      setRating(ratingEdit.item.rating);
    }
  }, [ratingEdit]);

  const handleChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("text must be atleast 10 characters");
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newRating = {
        text,
        rating,
      };
      if (ratingEdit.edit === true) {
        updateRating(ratingEdit.item.id, newRating);
      } else {
        addRating(newRating);
      }
      setText("");
      setBtnDisabled(true);
    }
  };
  return (
    <Card>
      <form onSubmit={handleClick}>
        <h2>Please add some reviews about our services</h2>
        <RatingSelect
          select={(rating) => {
            setRating(rating);
            console.log(rating);
          }}
        />

        <div className="input-group">
          <input
            type="text"
            placeholder="write a review"
            onChange={handleChange}
            value={text}
          />
          <Button type="submit" version="secondary" isDisable={btnDisabled}>
            Save
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default RatingForm;
