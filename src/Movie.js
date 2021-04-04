import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
  const { Title, Year, Poster } = movie;

  const poster = Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : Poster;
  // console.log(movie);
  return (
    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 border">
      <div className="font-weight-bold text-center mb-3 mt-3">
        <h5>{Title}</h5>
      </div>
      <div className="text-center">
        <img
          src={poster}
          alt={Poster}
          style={{ height: "300px", width: "65%" }}
        />
      </div>
      <div className="text-center mb-4 mt-4">Release Year : ( {Year} )</div>
    </div>
  );
};

export default Movie;
