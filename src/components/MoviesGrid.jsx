import React, { useState, useEffect } from "react";
import "../styles.css";

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("movies.json")
      .then((Response) => Response.json())
      .then((data) => setMovies(data));
  }, []);
  return (
    <div className="movies-grid">
      {movies.map((movie) => (
        <div className="movie-cart" key={movie.id}>
          <img
            src={`images/${movie.image}`}
            alt={movie.title}
            style={{ maxWidth: "100%", width: "100%" }}
          />
          <div className="movie-card-info">
            <h3 className="movie-card-title">{movie.title}</h3>
            <p className="movie-card-genre">{movie.genre}</p>
            <p className="movie-card-rating">{movie.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
