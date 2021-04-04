import React, { useState, useEffect } from "react";

const Search = ({ setMoviesList }) => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [notFound, setNotFound] = useState("");

  useEffect(() => {
    const id = setTimeout(() => {
      setError(false);
    }, 3000);

    return () => clearTimeout(id);
  }, [error]);

  const searchMovies = () => {
    // console.log(inputValue.length);
    if (inputValue === "" || inputValue.length < 3) {
      setError(true);
      setErrMsg("Search Value can't be empty or less then 1 character");
      return;
    }
    setLoading(true);

    fetch(`https://www.omdbapi.com/?s=${inputValue}&apikey=4a3b711b`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "True") {
          setLoading(false);
          setMoviesList(data.Search);
        } else {
          setLoading(false);
          setError(true);
          setNotFound("No Result Matches");
          setMoviesList([]);
        }
      });
  };

  return (
    <div>
      <div className="row d-flex justify-content-center mt-2">
        <div className="mb-3 d-flex">
          <input
            className="form-control border-secondary w-100"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            type="button"
            className="btn btn-secondary ml-1"
            onClick={searchMovies}
          >
            Search
          </button>
        </div>
      </div>

      <div className="text-center text-danger">{loading && "Loading..."}</div>
      <div className="text-center text-danger">{error && errMsg}</div>
      <div className="text-center text-danger">{error && notFound}</div>
    </div>
  );
};

export default Search;
