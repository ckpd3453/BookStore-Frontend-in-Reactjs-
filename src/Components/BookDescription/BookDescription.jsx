import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Home/Header";
import "../BookDescription/BookDescription.css";
import Rating from "../Rating/Rating";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function BookDescription() {
  const location = useLocation();
  const [isWhishlisted, setIsWishlisted] = useState(false);
  const book = location.state.book;

  const whishlist = () => {
    setIsWishlisted(!isWhishlisted);
  };

  return (
    <div className="bookDescription-container">
      <div className="bookDescription-header">
        <Header />
      </div>

      <div className="bookDescription-title">
        <div
          style={{
            width: "78%",
            height: "auto",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1%",
          }}
        >
          <div style={{ display: "flex" }}>
            <b style={{ color: "grey" }}>Home/</b>
            <b style={{ fontSize: "1em" }}> Books({book.quantity})</b>
          </div>
        </div>
      </div>
      <div className="bookDescription-body">
        <div className="book-image">
          <div className="book-cover">
            <img
              src={book.bookImage}
              alt=""
              style={{ height: "20em", width: "100%" }}
            />
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              marginTop: "8%",
            }}
          >
            <div
              style={{
                height: "2em",
                width: "46%",
                backgroundColor: "#A03037",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>ADD TO BAG</div>
            </div>
            {isWhishlisted ? (
              <div
                style={{
                  width: "46%",
                  border: "1px solid #333333",
                  backgroundColor: "white",
                  color: "red",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={whishlist}
              >
                <div style={{ marginTop: "3%" }}>
                  <FavoriteIcon sx={{ color: "red" }} />
                </div>
                <div>WHISHLISTED</div>
              </div>
            ) : (
              <div
                style={{
                  width: "46%",
                  backgroundColor: "#333333",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={whishlist}
              >
                <div style={{ marginTop: "3%" }}>
                  <FavoriteIcon sx={{ color: "white" }} />
                </div>
                <div>WHISHLIST</div>
              </div>
            )}
          </div>
        </div>

        <div className="book-description">
          <h2 style={{ fontFamily: "sans-serif" }}> {book.bookName}</h2>
          <div style={{ color: "#878787", marginTop: "-2%" }}>
            by {book.author}
          </div>
          <div style={{ display: "flex", marginTop: "1%" }}>
            <div>
              <Rating />
            </div>
            <div style={{ color: "#878787", marginLeft: "12%" }}>(20)</div>
          </div>
          <h2 style={{}}>Rs. {book.price}</h2>
          <div style={{ border: ".1px solid #9D9D9D", width: "100%" }}></div>
          <div style={{ display: "flex", marginTop: "3%", color: "#878787" }}>
            <div style={{ marginTop: "3%" }}>*</div> <div>Book Details</div>
          </div>
          <div
            style={{
              fontSize: ".9em",
              width: "100%",
              display: "flex",
              alignItems: "start",
              marginLeft: "1%",
            }}
          >
            <h5
              style={{
                marginTop: 0,
                color: "#373434",
              }}
            >
              {book.description}
            </h5>
          </div>

          <div style={{ border: ".1px solid #9D9D9D", width: "100%" }}></div>

          <div
            style={{
              fontFamily: "monospace",
              marginTop: "2%",
            }}
          >
            <b
              style={{
                color: "#0A0102",
                fontSize: "1.2em",
              }}
            >
              {" "}
              Customer Feedback
            </b>
          </div>
          <div
            style={{
              backgroundColor: "#F5F5F5",
              marginTop: "2%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <div style={{ marginLeft: "2%" }}>Overall rating</div>
            <div
              style={{ display: "flex", marginLeft: "2%", marginTop: ".5%" }}
            >
              <StarIcon sx={{ color: "white" }} />
              <StarIcon sx={{ color: "white" }} />
              <StarIcon sx={{ color: "white" }} />
              <StarIcon sx={{ color: "white" }} />
              <StarIcon sx={{ color: "white" }} />
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              style={{
                border: "grey",
                marginLeft: "3%",
                marginTop: "1%",
                color: "#707070",
                padding: "1%",
                width: "92%",
                height: "20%",
              }}
            >
              Write your review
            </textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
