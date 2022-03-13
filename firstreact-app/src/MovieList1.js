import React from "react";
import { DisplayMovies } from "./DisplayMovies";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export function MovieList1({ MovieList, setMovieList }) {
  return(
  <div className="movie-list">
    {/*  sending orbject - then restructing {MovieList.map((usr) => (
          <Msg  name={usr.name} pic={usr.pic} about={usr.about} Rating={usr.Rating} Rating1={usr.Rating1} />
        ))} */}
    {MovieList.map(({ name, pic, about, Rating, Rating1 }, index) => (
      <DisplayMovies key={index} name={name}
        pic={pic} about={about}
        Rating={Rating} Rating1={Rating1}
        deletebutton={
          <IconButton aria-label="delete" color="error" onClick={() => { console.log(index);
            const Copymovielist=[...MovieList];
            Copymovielist.splice(index,1);
            setMovieList(Copymovielist);
          }}>
          <DeleteIcon />
        </IconButton>
        }  id={index}/>
         
        ))}

      </div>
  );
}

//for delete --> process  
    // <button
    //       onClick={() => { console.log(index);
    //         const Copymovielist=[...MovieList];
    //         Copymovielist.splice(index,1);
    //         setMovieList(Copymovielist);
    //       }}>delete me 🧨🧨</button>} />