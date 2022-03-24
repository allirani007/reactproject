import "./App.css";
import React, { useState, useEffect } from "react";
import Nature from "./Nature";
import Stack from "@mui/material/Stack";
import MailIcon from "@mui/icons-material/Mail";
import DeleteIcon from "@mui/icons-material/Delete";
import { NoEncryption } from "@mui/icons-material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { listClasses } from "@mui/material";
import { MovieList1 } from "./MovieList1";
import { DisplayMovies } from "./DisplayMovies";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { API } from "./globe";

//const API="https://60f821399cdca0001745522d.mockapi.io";

//Movie--->DisplayMovies --flow of Movie app
//MovieList1--- i combined to movie-- but my refernce i maintaining in this app
export default function Movie() {
  const [MovieList, setMovieList] = useState([]);
  const getMovies = () => {
    fetch(`${API}/movie`, { method: "GET" }) // promise
      .then((data) => data.json()) // Response object
      .then((mvs) => setMovieList(mvs));
  };

  useEffect(() => getMovies(), []); // Delete movie -> Refresh data

  //const deleteMovie=(id)=>console.log("deleteing",id);
  const deleteMovie = (id) => {
    fetch(`${API}/movie/${id}`, { method: "DELETE" })
      .then(() => console.log("deleted"))
      .then(() => getMovies());
  };

  const history = useHistory();
  return (
    <div className="app">
      <h1>List of Tamil films of 2021</h1>
      <h3>Total click Viewer :</h3>
      <hr />
      <div className="movie-list">
        {/*  sending orbject - then restructing {MovieList.map((usr) => (
          <Msg  name={usr.name} pic={usr.pic} about={usr.about} Rating={usr.Rating} Rating1={usr.Rating1} />
        ))} */}

        {MovieList.map(({ name, pic, about, Rating, Rating1, id }, index) => (
          <DisplayMovies
            key={index}
            name={name}
            pic={pic}
            about={about}
            Rating={Rating}
            Rating1={Rating1}
            deletebutton={
              <IconButton
                aria-label="delete"
                color="error"
                style={{ marginLeft: "auto" }}
                onClick={() => deleteMovie(id)}
              >
                <DeleteIcon />
              </IconButton>
            }
            id={id}
            editbutton={
              <IconButton
                aria-label="delete"
                color="secondary"
                onClick={() => history.push(`/movie/edit/${id}`)}
              >
                <EditIcon />
              </IconButton>
            }
          />
        ))}
      </div>
    </div>
  );
}
