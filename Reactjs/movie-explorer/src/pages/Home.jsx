import React, { useEffect, useRef, useState } from "react";
import MovieList from "../components/MovieList";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  let inputRef = useRef();

  const fetchMovies = async (query) => {
    setLoading(true);
    let res = await fetch(
      `https://www.omdbapi.com/?apikey=c3bd2d7d&s=${query}`
    );
    const data = await res.json();
    console.log(data);

    setMovies(data.Search || []);
    setLoading(false);
  };

  useEffect(() => {

    return ()=>{
        fetchMovies("Avengers");
    }
  }, []);

  let handleSearch = (e) => {
    e.preventDefault();
    let query = inputRef.current.value.trim();
    console.log(query);
    if (query) {
      fetchMovies(query);
    }
    inputRef.current.value = "";
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch}>
        <input
          ref={inputRef}
          className="searchInput"
          placeholder="Search for a movie..."
        />
        <button type="submit">Search 🔎</button>
      </form>

      {loading ? <p>Loading....</p> : <MovieList movies={movies} />}
    </div>
  );
};

export default Home;
