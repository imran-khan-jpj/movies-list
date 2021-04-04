import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import Search from "./Search";

const Movies = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    const url = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";
    setLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response) {
          setLoading(false);
          setMoviesList(data.Search);
        }
      });
  };

  return (
    <div>
      <Search setMoviesList={setMoviesList} />
      <div className="text-center mb-5">We are sharing some of our movies</div>
      <div className="text-center text-danger">{loading && "Loading..."}</div>
      <div className="row m-2">
        {moviesList.map((movie, index) => {
          return <Movie movie={movie} key={movie.imdbID} />;
        })}
      </div>
    </div>
  );
};

export default Movies;
