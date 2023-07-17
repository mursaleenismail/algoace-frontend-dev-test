import { BiSolidStar } from "react-icons/bi";

const Star = ({ rating }) => {
  const renderRating = (_, index) => {
    const count = [...Array(rating).keys()];

    return (
      <span key={index}>
        <BiSolidStar className={`${count.includes(index) ? "icon" : ""}`} />
      </span>
    );
  };

  return (
    <wrapper>
      <div className="icon-style">
        {[...Array(5).keys()].map(renderRating)}
        {/* <p>({reviews})</p> */}
      </div>
    </wrapper>
  );
};

export default Star;

// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// // import { setRating } from "./actions";

// const StarRating = () => {
//   const dispatch = useDispatch();
//   const rating = useSelector((state) => state.rating);

//   const handleRatingSelection = (selectedRating) => {
//     dispatch(setRating(selectedRating));
//   };

//   const ratingScale = 5;

//   return (
//     <div>
//       <h2>Star Rating</h2>
//       <div id="rating-rating">
//         {[...Array(ratingScale)].map((_, index) => {
//           const starValue = index + 1;
//           return (
//             <span
//               key={starValue}
//               className={`fa fa-star ${starValue <= rating ? "checked" : ""}`}
//               onClick={() => handleRatingSelection(starValue)}
//             ></span>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default StarRating;
