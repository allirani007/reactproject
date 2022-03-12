import "./App.css";
import React, { useState } from "react";
import Nature from "./Nature";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import MailIcon from '@mui/icons-material/Mail';
import DeleteIcon from '@mui/icons-material/Delete';
import { NoEncryption } from "@mui/icons-material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { listClasses } from "@mui/material";
import { MovieList1 } from "./MovieList1";
 

//Movie--->MovieList---->DisplayMovies --flow of Movie app
 export default function Movie() {
   
  const INT_MOVIE_LIST = [
    {
      name: "Valimai",
      pic:
        "https://images.news18.com/ibnlive/uploads/2021/07/1626014989_valimai.jpg",
      about:
      "Synopsis:A super cop tries to track down the brain behind a series of robberies and murders, but things turn personal when his family become pawns in the criminal's game.",
       Rating:"⭐⭐⭐⭐⭐",
       Rating1:9.4

    },
    {
      name: "Veeramae Vaagai Soodum",
      pic:
        "https://assets.thehansindia.com/h-upload/2021/11/27/1600x960_1123689-veeramae-vaagai-soodum.jpg",
      about:
        "Synopsis:A police aspirant tries to track down the criminals who have murdered his sister.",
         Rating:"⭐⭐⭐",
         Rating1:7.1
    },
    {
      name: "Naai Sekar",
      pic:
        "https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      about:
        "Synopsis:Naai Sekar is likely to appeal more to kids, especially those under-10. For the rest, this is a film that will feel funny in parts and juvenile in the rest.",
        Rating:"⭐⭐",
        Rating1:6.4
    },
    {
      name: "Enna Solla Pogirai",
      pic:
        "https://m.media-amazon.com/images/M/MV5BM2Y0ODBhYjctNzZiYi00ODIwLWJiMmYtM2ZlNjUwZDlkYjQ3XkEyXkFqcGdeQXVyMTQyOTU3OTMw._V1_FMjpg_UX1000_.jpg",
      about:
        "Synopsis:Three individuals with clear notions of what romance discover the indefinable magic that is love when they end up in a triangular romantic relationship. ",
        Rating:"⭐⭐⭐⭐⭐",
        Rating1:9.5
    },
    {
      name: "Yaaro",
      pic:
        "https://i1.wp.com/www.socialnews.xyz/wp-content/uploads/2019/10/30/Yaaro-Movie-First-Look-Poster-.jpg?quality=80&zoom=1&ssl=1",
      about:
        "Synopsis:Yaaro, is an edge-of-the-seat thriller that revolves around the life of a loner, who had a troubled childhood.",
       Rating:"⭐⭐⭐",
       Rating1:6.4
    },
    {
      name: "Maaran",
      pic:
        "https://static.toiimg.com/photo/msid-87310079/87310079.jpg?118968",
      about:
        "Synopsis:A man who follows the Gandhian path of non-violence is forced to resort to violence when he fails to get justice from the judicial system.",
       Rating:"⭐⭐⭐⭐",
       Rating1:8.4
    },
    {
      name: "Mahaan",
      pic:
        "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/02/mahaan-movie-review-1.jpg",
      about:
        "A middle-aged school teacher is abandoned by his family after he decides to live a life of his own. He realises his dream of becoming a billionaire, but misses his son.",
       Rating:"⭐⭐⭐⭐⭐",
       Rating1:8.9

    },
    {
      name: "maara",
      pic:
        "https://m.media-amazon.com/images/M/MV5BYmM3OTEzOTEtM2Y4Yi00ZGNjLWJmMjAtOTQ4YjBiOGUzZmNkXkEyXkFqcGdeQXVyMTI3MjIwMzU2._V1_FMjpg_UX1000_.jpg",
      about:
        "Synopsis:A young woman named Paaru notices a painting on the walls of a coastal town that depicts a fairy tale she once heard as a child. Intrigued, she sets out to find the person who painted it.",
       Rating:"⭐⭐⭐",
       Rating1:6.7
    },
    {
    name: "annatha",
      pic:
        "https://m.media-amazon.com/images/M/MV5BMjNkNTE1NGUtNjNhMi00ZmY1LWI2NDEtZWZlYTkwZjNjMGMzXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
      about:
        "Synopsis:Kaalaiyan loves his younger sister dearly and does everything to make her happy. When she elopes with her lover to Kolkata, he goes to great lengths to protect her from the clutches of an evil don.",
       Rating:"⭐⭐⭐⭐⭐",
       Rating1:9.5
    }
  ];
  const [MovieList,setMovieList]=useState(INT_MOVIE_LIST);
  const [name,setName]=useState("");
  const [poster,setPoster]=useState("");
  const [rating,setRating]=useState("");
  const [summary,setsummary]=useState("");
  const [rating1,setRating1]=useState("");
  
  return (
    <div className="App">
        <div className="add-movie-form">
        <TextField  variant="outlined" onChange={(event) => 
          setName(event.target.value) }
          placeholder="Enter the name of Movie" value={name}/>
        <TextField  variant="outlined" onChange={(event) => 
          setPoster(event.target.value) }
          placeholder="Enter the Poster of Movie" value={poster}/>
       <TextField  variant="outlined" onChange={(event) => 
          setRating(event.target.value) }
          placeholder="Enter the Rating star of Movie" value={rating}/>
        <TextField  variant="outlined" onChange={(event) => 
          setRating1(event.target.value) }
          placeholder="Enter the Rating of Movie" value={rating1}/>
         <TextField  variant="outlined" onChange={(event) => 
          setsummary(event.target.value) }
          placeholder="Enter the Summary of Movie" value={summary}/>
         {/* <input type="text" onChange={(event) =>  //general form element model 
          setsummary(event.target.value) }
          placeholder="Enter the Summary of Movie" value={summary}/> */}
       
            <Button variant="contained" onClick={()=>{
            const newMovie={
                name:name,
                pic:poster,
                about:summary,
                Rating:rating,
                Rating1:rating1,
                
            };
            setMovieList([...MovieList,newMovie])}}>Add Movie</Button>
        </div>
      <h1>List of Tamil films of 2021</h1>
      <h3>Total click Viewer :</h3>
      <hr />
      <MovieList1 MovieList={MovieList} setMovieList={setMovieList}/>
    </div>
  );
 }

