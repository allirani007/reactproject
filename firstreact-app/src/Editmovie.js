import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ContactlessOutlined } from "@mui/icons-material";
import { API } from "./globe";

//const API="https://60f821399cdca0001745522d.mockapi.io";

export function Editmovie() {
  const { id } = useParams();
  console.log(id);

  //const [MovieList,setMovieList] =useState({});
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setsummary] = useState("");
  //const [rating1, setRating1] = useState("");
  const [trailler, setTrailler] = useState("");
  const getMovies = (id) => {
    fetch(`${API}/movie/${id}`, { method: "GET" }) // promise
      .then((data) => data.json()) // Response object
      //.then((mvs)=>console.log(mvs))};
      //.then((mvs) => setMovieList(mvs));};
      .then((Mvs) => {
        setName(Mvs.name);
        setPoster(Mvs.poster);
        setRating(Mvs.rating);
        // setRating1(Mvs.Rating1);
        setsummary(Mvs.summary);
        setTrailler(Mvs.trailler);
      });
  };
  useEffect(() => {
    getMovies(id);
  }, []);
  // useEffect(() => {getMovies(id)}, []);
  // console.log(id);
  // const movie1=MovieList;
  // console.log(movie1);

  const history = useHistory();

  //const  deleteMovie = (id) => {fetch(`${API}/movie/${id}`, {method: "DELETE",})
  //const  updateMoviefn = (id) => {
  // {fetch(`${API}/Movie/edit/${id}`, {method: "PUT",body: JSON.stringify(movie1),headers: {"Content-Type": "application/json",},}
  // .then(() => getMovies()))}
  // };

  //movie1={name,poster,rating,rating1,summary,trailler}
  return (
    <div className="App">
      <div className="edit-movie-form">
        <TextField
          variant="outlined"
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter the name of Movie"
          value={name}
        />
        <TextField
          variant="outlined"
          onChange={(event) => setPoster(event.target.value)}
          placeholder="Enter the Poster of Movie"
          value={poster}
        />
        <TextField
          variant="outlined"
          onChange={(event) => setRating(event.target.value)}
          placeholder="Enter the Rating star of Movie"
          value={rating}
        />
        {/* <TextField
          variant="outlined"
          onChange={(event) => setRating1(event.target.value)}
          placeholder="Enter the Rating of Movie"
          value={rating1}
        /> */}
        <TextField
          variant="outlined"
          onChange={(event) => setsummary(event.target.value)}
          placeholder="Enter the Summary of Movie"
          value={summary}
        />
        <TextField
          variant="outlined"
          onChange={(event) => setTrailler(event.target.value)}
          placeholder="Enter the trailler of Movie"
          value={trailler}
        />
        {/* <input type="text" onChange={(event) =>  //general form element model
                 setsummary(event.target.value) }
                 placeholder="Enter the Summary of Movie" value={summary}/> */}

        <Button
          variant="contained"
          onClick={() => {
            const updateMovie = {
              name: name,
              poster: poster,
              summary: summary,
              rating: rating,
              //Rating1: rating1,
              trailler: trailler,
            };
            {
              fetch(`${API}/movie/${id}`, {
                method: "PUT",
                body: JSON.stringify(updateMovie),
                headers: { "Content-Type": "application/json" },
              }).then(() => history.push("/Movie"));
            }
          }}
        >
          save
        </Button>
      </div>
    </div>
  );
}
