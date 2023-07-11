import React from "react";
import { createContext, useState, useEffect } from "react";
import RatingData from "../data/data";
import { v4 as uuidv4 } from "uuid";
const RatingContext = createContext();

export const RatingProvider = ({ children }) => {
  const [rating, setRating] = useState([]);

  const [ratingEdit, setRatingEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchRating();
  }, []);

  const fetchRating = async () => {
    const response = await fetch(
      `http://localhost:5000/rating?_sort=id&_order=desc`
    );
    const data = await response.json();
    setRating(data);
  };

  const addRating = async (newRating) => {
    const response = await fetch(`http://localhost:5000/rating`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRating),
    });
    const data = await response.json();

    setRating([data, ...rating]);
  };
  const deleteRating = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      const response = await fetch(`http://localhost:5000/rating/${id}`, {
        method: "DELETE",
      });
      setRating(rating.filter((item) => item.id !== id));
    }
  };
  const editRating = (item) => {
    setRatingEdit({
      item,
      edit: true,
    });
  };

  const updateRating = async (id, upItem) => {
    const response = await fetch(`http://localhost:5000/rating/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(upItem),
    });
    const data = await response.json();
    setRating(
      rating.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };
  return (
    <RatingContext.Provider
      value={{
        rating,
        deleteRating,
        addRating,
        editRating,
        ratingEdit,
        updateRating,
      }}
    >
      {children}
    </RatingContext.Provider>
  );
};

export default RatingContext;
