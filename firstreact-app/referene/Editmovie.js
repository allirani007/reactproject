import React, { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ContactlessOutlined } from "@mui/icons-material";



export function Editmovie({ MovieList, setMovieList }) {
  const {id} = useParams();
  console.log(id);
  const movie1=MovieList[id];
  console.log(movie1);
  const [name, setName] = useState(movie1.name);
  const [poster, setPoster] = useState(movie1.pic);
  const [rating, setRating] = useState(movie1.Rating);
  const [summary, setsummary] = useState(movie1.about);
  const [rating1, setRating1] = useState(movie1.Rating1);
  const [trailler, setTrailler] = useState(movie1.trailller);
  const history = useHistory();
  
  //movie1={name,poster,rating,rating1,summary,trailler}
  return (
    <div className="App">
      <div className="edit-movie-form">
        <TextField variant="outlined" onChange={(event) => setName(event.target.value)}
          placeholder="Enter the name of Movie" value={name} />
        <TextField variant="outlined" onChange={(event) => setPoster(event.target.value)}
          placeholder="Enter the Poster of Movie" value={poster} />
        <TextField variant="outlined" onChange={(event) => setRating(event.target.value)}
          placeholder="Enter the Rating star of Movie" value={rating} />
        <TextField variant="outlined" onChange={(event) => setRating1(event.target.value)}
          placeholder="Enter the Rating of Movie" value={rating1} />
        <TextField variant="outlined" onChange={(event) => setsummary(event.target.value)}
          placeholder="Enter the Summary of Movie" value={summary} />
        <TextField variant="outlined" onChange={(event) => setTrailler(event.target.value)}
          placeholder="Enter the trailler of Movie" value={trailler} />
        {/* <input type="text" onChange={(event) =>  //general form element model
                 setsummary(event.target.value) }
                 placeholder="Enter the Summary of Movie" value={summary}/> */}

        <Button variant="contained" onClick={() => {

        const updateMovie = {
          name: name,
          pic: poster,
          about: summary,
          Rating: rating,
          Rating1: rating1,
          trailler:trailler,
        };
          const Copymovielist=[...MovieList];
          Copymovielist[id]=updateMovie;
          setMovieList(Copymovielist);
          history.push("/Movie");}} > save</Button>
      </div>
    </div>
  );
}
