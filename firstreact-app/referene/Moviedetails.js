import React from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export function Moviedetails({ MovieList }) {
  const { id } = useParams();
  const history = useHistory();
  console.log(id, MovieList);
  const movie = MovieList[id];
  return (
    <div>
      <iframe
        width="90%"
        height="620"
        src={movie.trailler}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="movie-details-container">
        <div className="moive-spec">
          <h3 className="movie-name">{movie.name}</h3>
          <p className="movie-rating">⭐{movie.Rating1}</p>
        </div>
        <p className="movie-summary">{movie.about}</p>
      </div>
      <Button
        variant="contained"
        onClick={() => history.goBack()}
        startIcon={<ArrowBackIosIcon />}
      >
        back
      </Button>
    </div>
  );
}
