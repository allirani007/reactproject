import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { API } from "./globe";

export function Addmovies() {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setsummary] = useState("");
  //const [rating1, setRating1] = useState("");
  const [trailler, setTrailler] = useState("");
  const history = useHistory();
  // 1. method must be POST
  // 2. body - JSON data
  // 3. headers -

  return (
    <div className="App">
      <div className="add-movie-form">
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
            const newMovie = {
              name: name,
              poster: poster,
              summary: summary,
              rating: rating,
              //Rating1: rating1,
              trailler: trailler,
            };
            fetch(`${API}/movie/`, {
              method: "POST",
              body: JSON.stringify([newMovie]),
              headers: { "Content-Type": "application/json" },
            }).then(() => history.push("/Movie"));
          }}
        >
          Add Movie
        </Button>
      </div>
    </div>
  );
}
