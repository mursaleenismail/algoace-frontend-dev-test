import React, { useEffect, useState } from "react";
import { getBooks } from "../api";
import img2 from "../images/Ellipse 1.png";
import img1 from "../images/image 1.png";
import img3 from "../images/image2.png";
import Loading from "../components/Loading";
import Star from "../components/Star";
import Modal from "../components/Modal";
import ReactModal from "react-modal";
import icon from "../images/icon.png";

const FavIcon = () => (
  <svg
    width="26"
    height="22"
    viewBox="0 0 26 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.220459 7.47854C0.220459 13.6933 5.35786 17.0045 9.11762 19.9693C10.4441 21.0147 11.7221 22 13.0001 22C14.278 22 15.556 21.016 16.8825 19.968C20.6436 17.0057 25.7797 13.6933 25.7797 7.47981C25.7797 1.26509 18.7509 -3.1426 13.0001 2.83315C7.24924 -3.14387 0.220459 1.26381 0.220459 7.47854Z"
      fill="#D80000"
    />
  </svg>
);

const NoFavIcon = () => (
  <svg
    width="26"
    height="22"
    viewBox="0 0 26 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.2625 19.1834L16.2636 19.1825C16.6343 18.8905 17.0113 18.6001 17.3904 18.308C18.995 17.0716 20.6372 15.8063 21.9937 14.279C23.6364 12.4295 24.7796 10.2744 24.7796 7.47981C24.7796 4.74655 23.2352 2.45657 21.1306 1.49455C19.089 0.561354 16.34 0.804589 13.7205 3.52657L12.9999 4.27536L12.2793 3.52649C9.65975 0.803869 6.91074 0.560426 4.86926 1.49345C2.76467 2.45531 1.22034 4.74526 1.22034 7.47854C1.22034 10.2738 2.36379 12.4288 4.00669 14.2786C5.36089 15.8033 6.99943 17.0668 8.60113 18.3019C8.9832 18.5965 9.36319 18.8895 9.73671 19.1841M16.2625 19.1834L9.73671 19.1841M16.2625 19.1834C15.5905 19.7142 14.9931 20.1777 14.4184 20.5136C13.8432 20.8498 13.3852 21 12.9999 21C12.6149 21 12.157 20.8496 11.5815 20.5133M16.2625 19.1834L11.5815 20.5133M9.73671 19.1841C10.4092 19.714 11.0065 20.1772 11.5815 20.5133M9.73671 19.1841L11.5815 20.5133"
      stroke="#D80000"
      stroke-width="2"
    />
  </svg>
);

export default function Home() {
  const [books, setBooks] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const getBooksData = async () => {
    const data = await getBooks();
    console.log(data);
    setBooks(data);
  };

  useEffect(() => {
    getBooksData();
  }, []);

  const filterBooks = (searchTerm) => {
    return books.filter((value) => {
      if (searchTerm === "") {
        return true;
      } else if (value.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return true;
      }
      return false;
    });
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
    setModalIsOpen(false);
  };

  const openModal = (book) => {
    setSelectedBook(book);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedBook(null);
    setModalIsOpen(false);
  };

  const renderNavBar = () => {
    return (
      <div style={{ display: "flex" }}>
        <div className="container">
          <nav className="navbar">
            <div className="container-fluid">
              <img
                src={img1}
                alt="Logo"
                width="65"
                height="65"
                className="d-inline-block align-text-top"
                style={{
                  // position: "absolute",
                  marginRight: "60px",
                }}
              />

              {/* <a className="navbar-brand" href="#">
                <img
                  src={img1}
                  alt="Logo"
                  width="65"
                  height="65"
                  className="d-inline-block align-text-top"
                />
              </a> */}
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  onChange={(e) => setSearchTitle(e.target.value)}
                  style={{
                    height: "59px",
                    fontSize: "27px",
                    paddingLeft: "70px",
                  }}
                />
                <img
                  src={icon}
                  alt="Search Icon"
                  style={{
                    position: "absolute",
                    top: "50%",
                    marginLeft: "20px",
                    transform: "translateY(-50%)",
                    width: "34px",
                    height: "auto",
                  }}
                />
              </form>
              <a className="navbar-brand" href="#">
                <img
                  src={img2}
                  alt="Logo"
                  width="58"
                  height="59"
                  className="d-inline-block align-text-top"
                  style={{
                    // position: "absolute",
                    marginLeft: "60px",
                  }}
                />
              </a>
              {filterBooks(searchTitle).map((item) => (
                <h5 key={item.id}></h5>
              ))}
            </div>
          </nav>
        </div>
      </div>
    );
  };

  const renderHeroSection = () => {
    return (
      <>
        <div className="card-group">
          <div className="card">
            <div className="card-body">
              <h1 className="hero-title">
                Lorem Ipsum Dolor Sit Amet Consectetur.
              </h1>
              <br />
              <p className="hero-text">
                Lorem Ipsum Dolor Sit Amet <br />
                Consectetur .Vieverr Scelerisqu.
              </p>
            </div>
          </div>

          <div className="card">
            <img
              src={img3}
              className="card-img-top"
              width="40"
              height="100%"
              alt="logo"
            />
          </div>
        </div>
      </>
    );
  };

  const renderBookCards = (item, index) => {
    return (
      <div key={index} className="col-7 col-md-3 position-relative">
        <div className="book-card">
          <div className="icons-container">
            {item.is_liked ? <FavIcon /> : <NoFavIcon />}
          </div>

          {/* <div className="FavIcon">
            {item.is_liked ? <FavIcon /> : <NoFavIcon />}
          </div> */}
          <img
            className="booksImage"
            src={item.imageLink}
            alt="..."
            style={{ height: "75%", width: "85%", borderRadius: 10 }}
            onClick={() => openModal(item)}
          />
        </div>

        {/* {item.is_liked ? (
            <FavIcon className="position-absolute start-0 top-0" />
          ) : (
            <NoFavIcon className="position-absolute start-0 top-0" />
          )} */}

        <h4 className="card-titles mt-8 pt-3">{item.title}</h4>
        <Star rating={item.rating} />
        <h5 className="mt-8">${item.price}</h5>
      </div>
    );
  };

  // const renderBookCards = (item, index) => {
  //   return (
  //     <div key={index} className="col-7 col-md-3">
  //       <a href="#" onClick={() => openModal(item)}>
  //         <img
  //           className="booksImage"
  //           src={item.imageLink}
  //           alt="..."
  //           style={{ height: "75%", width: "85%", borderRadius: 10 }}
  //         />
  //         {item.is_liked ? <FavIcon /> : <NoFavIcon />}
  //       </a>

  //       <h4 className="card-titles mt-8 pt-3">{item.title}</h4>
  //       <Star rating={item.rating} />
  //       <h5 className="mt-8">${item.price}</h5>
  //     </div>
  //   );
  // };

  return (
    <>
      {renderNavBar()}
      {renderHeroSection()}

      {!books.length && <Loading />}
      <div className="row g-2">
        {filterBooks(searchTitle).map(renderBookCards)}
      </div>

      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Book Details"
        style={{
          content: {
            maxWidth: "850px",
            width: "95%",
            height: "729px",
            padding: "0px",
            margin: "auto",
            borderRadius: "27px",
          },
        }}
      >
        {selectedBook && <Modal book={selectedBook} />}
      </ReactModal>
    </>
  );
}
