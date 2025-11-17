import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  let { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    return () => {
      async function getMovie() {
        let res = await fetch(
          `https://www.omdbapi.com/?apikey=c3bd2d7d&i=${id}`
        );
        const data = await res.json();
        setMovie(data);
        console.log(data);
      }
      getMovie();
    };
  }, [id]);

  if (!movie) return <p>Movie details is loading....</p>;

  console.log(id);
  return (
    <div className="movie-detail">
      <h2> {movie.Title} </h2>
      <img alt="Avengers: Infinity War" src={movie.Poster} />
      <p>
        <strong>Genre:</strong> {movie.Genre}
      </p>
      <p>
        <strong>Released:</strong> {movie.Released}
      </p>
      <p>
        <strong>Plot:</strong> {movie.Plot}
      </p>
    </div>
  );
};

export default MovieDetails;
