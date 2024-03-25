import React from "react";
import NetflixNavbar from "./NetflixNavbar";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import UseFetch from "./UseFetch";
import MovieCard from "./MovieCard";
import "./MyList.css";

const MyList = () => {
  const myList = useSelector((state) => state.addToList);

  const url = "http://localhost:8080/api/v1/movies";
  const res = UseFetch(url);

  const response = res.filter(({ imdbId }) => myList.indexOf(imdbId) !== -1);
  console.log(response);

  return (
    <div>
      <Navbar />
      <div className="movie-container">
        {response.map((item, index) => (
          <MovieCard item={item} index={index} key={index} allMovies={false} />
        ))}
      </div>
    </div>
  );
};

export default MyList;
