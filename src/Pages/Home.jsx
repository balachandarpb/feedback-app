import React from "react";
import RatingList from "../Components/RatingList";
import RatingStat from "../Components/RatingStat";
import RatingForm from "../Components/RatingForm";

function Home() {
  // const [rating, setRating] = useState(RatingData);
  // const deleteRating = (id) => {
  //   if (window.confirm("Are you want to delete?")) {
  //     setRating(rating.filter((item) => item.id !== id));
  //   }
  // };
  // const addRating = (newRating) => {
  //   newRating.id = uuidv4();
  //   setRating([newRating, ...rating]);
  // };
  return (
    <>
      <RatingForm />
      <RatingStat />
      <RatingList />
    </>
  );
}

export default Home;
