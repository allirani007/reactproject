import React from "react";
import { DisplayMovies } from "./DisplayMovies";

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
        deletebutton={<button
          onClick={() => { console.log(index);
            const Copymovielist=[...MovieList];
            Copymovielist.splice(index,1);
            setMovieList(Copymovielist);
          }}>delete me 🧨🧨</button>} />
    ))}

    {/* <Welcome  profile="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" name="alli" />
      <Welcome name="rani" profile="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />

      <Welcome name="suresh" /> */}
  </div>);
}
