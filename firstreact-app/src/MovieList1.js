import React,{useEffect, useState} from "react";
import { DisplayMovies } from "./DisplayMovies";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const API="https://60f821399cdca0001745522d.mockapi.io";
export function MovieList1() {
  const [MovieList,setMovieList] =useState
  const getMovies = () => {fetch(`${API}/movies`, {method: "GET",}) // promise
  .then((data) => data.json()) // Response object
  .then((mvs) => setMovieList(mvs));};
  
  useEffect(() => getMovies(), []);// Delete movie -> Refresh data 


  const  deleteMovie = (id) => {fetch(`${API}/movies/${id}`, {method: "DELETE",}).then(() => getMovies());};

  const history =useHistory();
  return(
  <div className="movie-list">
    {/*  sending orbject - then restructing {MovieList.map((usr) => (
          <Msg  name={usr.name} pic={usr.pic} about={usr.about} Rating={usr.Rating} Rating1={usr.Rating1} />
        ))} */}
    {MovieList.map(({ name, pic, about, Rating, Rating1,id }, index) => (
      <DisplayMovies key={index} name={name}
        pic={pic} about={about}
        Rating={Rating} Rating1={Rating1}
        deletebutton={
          
          <IconButton aria-label="delete" color="error" style={{ marginLeft: "auto" }} onClick={deleteMovie}>
          <DeleteIcon />
        </IconButton>
        }  id={id} 
        editbutton={<IconButton aria-label="delete" color="secondary" 
        onClick={() => history.push(`/Movie/edit/${id}`)} > 
        <EditIcon/>
      </IconButton>
      }  
        />
         
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