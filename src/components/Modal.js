import React from "react";
import Star from "./Star";
import arrowicon from "../images/external-link.png";

function Modal({ book }) {
  if (!book) return null;
  return (
    <div className="Modal">
      <div className="modal-overlay" />
      <div className="modal-content">
        <div className="row g-0">
          <div className="col-md-6">
            <img src={book.imageLink} className="img-fluid rounded-start" />
          </div>

          <div className="col-md-6">
            <div>
              <h5 className="card-title px-4 pt-4"> {book.title}</h5>
              <br />

              <div className="container">
                <div className="row">
                  <div className="col">
                    <p className="card-txt p-1">
                      <b>Rating</b>
                      <Star rating={book.rating} />
                    </p>
                  </div>
                  <div className="col">
                    <p className="card-txt p-1">
                      <b>Reviews</b>
                      <br /> ({book.reviews})
                    </p>
                  </div>
                  <div className="col">
                    <p className="card-txt p-1">
                      <b>Price</b>
                      <br /> <span>${book.price}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pops">
                <p className="card-texts pt-5">
                  <b>Author</b> : {book.author}
                </p>
                <p className="card-texts">
                  <b>Country</b> : {book.country}
                </p>
                <p className="card-texts">
                  <b>Language</b> : {book.language}
                </p>
                <p className="card-texts">
                  <b>Year</b>: {book.year}
                </p>
                <p className="card-texts">
                  <b>Pages</b> : {book.pages}
                </p>
              </div>
              <br />

              <button
                className="btn btn-primary"
                style={{
                  backgroundColor: "#004D6D",
                  display: "flex",
                  alignItems: "center",
                  width: "85%",
                  height: "40px",
                  borderRadius: "5px",
                  textAlign: "center",
                  marginTop: "2rem",
                  marginLeft: "2rem",
                  padding: "0",
                }}
              >
                <a
                  href={book.link}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    textDecoration: "none",
                  }}
                >
                  <span
                    style={{
                      flex: "1",
                      paddingRight: "5px",
                      fontSize: "18px",
                      marginLeft: "2rem",
                    }}
                  >
                    View Details
                  </span>
                  <span
                    className="btn_icon"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <img
                      src={arrowicon}
                      style={{
                        width: "62%",
                        height: "auto",
                        paddingTop: "0px",
                        marginLeft: "-11rem",
                      }}
                    />
                  </span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
