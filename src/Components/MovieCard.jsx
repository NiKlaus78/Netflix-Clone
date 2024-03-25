import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { myList, removeList } from "../actions/addToList";
import "./MovieCard.css";
import remove from "../images/remove-button-svgrepo-com.svg";

const MovieCard = ({ item, index, allMovies }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick(id) {
    navigate(`/movies-info/${id}`);
  }

  const handleAddToList = (e, id) => {
    e.stopPropagation();
    dispatch(myList(id));
  };

  const handleRemove = (e, id) => {
    e.stopPropagation();
    dispatch(removeList(id));
  };

  return (
    <div
      onClick={() => handleClick(item.imdbId)}
      key={index}
      className="item"
      style={{ backgroundImage: `url("${item.poster}")` }}
    >
      <p>Genre : {item.genres.map((item) => item + " ")}</p>
      <p className="title">{item.title}</p>
      {allMovies ? (
        <svg
          onClick={(e) => handleAddToList(e, item.imdbId)}
          width="30px"
          xmlns="http://www.w3.org/2000/svg"
          className="fbl-icon _30dE3d _1a_Ljt"
          viewBox="0 0 24 24"
          role="img"
          aria-hidden="true"
        >
          <title>Add</title>
          <svg
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.664 2.063 C 11.436 2.146,11.257 2.297,11.131 2.511 L 11.020 2.700 11.009 6.850 L 10.999 11.000 6.924 11.000 C 2.491 11.000,2.677 10.991,2.374 11.222 C 2.301 11.277,2.192 11.408,2.131 11.511 C 2.036 11.672,2.020 11.744,2.020 12.000 C 2.020 12.256,2.036 12.328,2.131 12.489 C 2.192 12.592,2.301 12.723,2.374 12.778 C 2.677 13.009,2.491 13.000,6.925 13.000 L 11.000 13.000 11.000 17.070 C 11.000 19.750,11.015 21.191,11.042 21.289 C 11.103 21.509,11.315 21.762,11.531 21.874 C 11.932 22.080,12.390 22.012,12.700 21.702 C 13.018 21.385,13.000 21.656,13.000 17.073 L 13.000 13.000 17.073 13.000 C 21.654 13.000,21.385 13.017,21.701 12.701 C 22.092 12.310,22.092 11.690,21.701 11.299 C 21.385 10.983,21.654 11.000,17.073 11.000 L 13.000 11.000 13.000 6.927 C 13.000 2.346,13.017 2.615,12.701 2.299 C 12.429 2.027,12.018 1.933,11.664 2.063 "
              fill="currentColor"
              stroke="none"
              fillRule="evenodd"
            ></path>
          </svg>
        </svg>
      ) : (
        <img
          onClick={(e) => handleRemove(e, item.imdbId)}
          src={remove}
          width={50}
          height={50}
          className="color"
        />
      )}
    </div>
  );
};

export default MovieCard;