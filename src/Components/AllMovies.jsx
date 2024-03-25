import React from "react";
import UseFetch from "./UseFetch";
import "./AllMovies.css";
// import NetflixNavbar from "./NetflixNavbar";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { myList } from "../actions/addToList";
import { useDispatch } from "react-redux";
import MovieCard from "./MovieCard";

const AllMovies = () => {
  const url = "http://localhost:8080/api/v1/movies";
  const res = UseFetch(url);

  return (
    <div className="home-page">
      {/* <NetflixNavbar /> */}
      <Navbar />
      <div className="movie-container">
        {res.map((item, index) => (
          <MovieCard item={item} index={index} key={index} allMovies={true} />
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
