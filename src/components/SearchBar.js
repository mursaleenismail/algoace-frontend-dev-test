// import { useState } from "react";

// function SearchBar({ onSubmit }) {
//   const [term, setTerm] = useState("books");

//   const handleFormSubmit = (event) => {
//     event.preventDefault();

//     onSubmit(term);
//   };

//   const handleChange = (event) => {
//     setTerm(event.target.value);
//   };

//   return (
//     <div className="d-flex">
//       <form className="d-flex" role="search" onSubmit={handleFormSubmit}>
//         <input
//           value={term}
//           onChange={handleChange}
//           className="form-control me-2"
//           type="search"
//           placeholder="Search"
//           style={{ height: "59px" }}
//         />
//       </form>
//     </div>
//   );
// }

// export default SearchBar;
