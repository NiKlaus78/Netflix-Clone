import React from "react";
import UseFetch from "./UseFetch";
import NetflixNavbar from "./NetflixNavbar";
import "./MoviesInfo.css";
import { useParams } from "react-router-dom";

const MoviesInfo = () => {
  const { id } = useParams();
  const url = "http://localhost:8080/api/v1/movies";
  const res = UseFetch(url);

  return (
    <div>
      <NetflixNavbar />
      {res.map((item) =>
        item.imdbId === id ? (
          <div className="movie-info-container" key={item.imdbId}>
            {item.backdrops.map((imageUrl, i) => (
              <div
                key={i}
                className="item"
                style={{ backgroundImage: `url("${imageUrl}")` }}
              ></div>
            ))}
            {
              // <iframe
              //   width="560"
              //   height="315"
              //   src="https://www.youtube.com/embed/tHb7WlgyaUc?si=pU1CqCgEjZH-1_Sx"
              //   title="YouTube video player"
              //   frameborder="0"
              //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              //   allowfullscreen
              // ></iframe>
              <video width="320" height="240" controls>
                <source src={item.trailerLink} />
              </video>
            }
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default MoviesInfo;
