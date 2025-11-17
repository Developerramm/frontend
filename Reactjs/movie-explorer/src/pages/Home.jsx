import React, { useEffect, useState } from "react";
import MovieList from "../components/MovieList";

const Home = () => {
    const [movies,setMovies] = useState([]);

    const fetchMovies = async(query)=>{
        let res = await fetch(`https://www.omdbapi.com/?apikey=c3bd2d7d&s=${query}`)
        const data = await res.json();
        console.log(data);

        setMovies(data.Search || []);
    }

    useEffect(()=>{
        fetchMovies("Avengers");
    },[])

  return (
    <div className="home">
      <form>
        <input className="searchInput" placeholder="Search for a movie..." />
        <button type="submit">Search 🔎</button>
      </form>
      <MovieList movies = {movies} />
    </div>
  );
};

export default Home;
