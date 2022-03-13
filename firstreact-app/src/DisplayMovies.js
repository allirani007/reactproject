import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from "react-router-dom";

// // export default function App() {
// //     return (
// //       <div className="App">
// //         <Nature />
// //       </div>
// //     );
// //   }


export function DisplayMovies({ name, pic, about, Rating, Rating1, deletebutton,id }) {
  const [hide, sethide] = useState(true);
  const history = useHistory(true);
  //conditional styling model
  // const styes2= {
  // display: hide ? "block" :"none" }  
  const styles = {
    color: Rating1 > 8.5 ? "purple" : "red",
  };

  // const name = "Allirani🤷‍♂️✔✔💖";
  //console.log(Props, name);
  return (
    <div className="col-4 mb-3">
      <img className="movie-img" src={pic} alt="Movie name" />
      <div>
        <h6>Movie Title: {name}
          <IconButton color="primary" aria-label="add to shopping cart">
            {hide ? <ExpandLessIcon onClick={() => sethide(!hide)} /> : <ExpandMoreIcon onClick={() => sethide(!hide)} />}
          </IconButton>

          <IconButton color="primary" onClick={()=> history.push(`/Movie/${id}`)}>
          <InfoIcon />
          </IconButton>
        </h6>
        {/* conditional styling model */}
        {/* <p style={styes2}>{about}<br></br><span style={styles} className="rr">{Rating}</span></p> */}
        {/* conditional rendering model */}
        {hide ? <p>{about}<br></br><span style={styles} className="rr">{Rating}</span></p> : ""}

        {/* <Button variant="outlined" size="small" onClick={()=>sethide(!hide)}>
              Toggle Description</Button>           */}
        <p style={styles} className="Movie-rating">Rating:{Rating1}</p>

        {/* <a href="#" className="btn btn-primary">
              Home
            </a> */}
        <div>
        <Counter /> {deletebutton} </div>
      </div>
    </div>
  );
}
function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div className="counter-container">
      <IconButton aria-label="delete" color="primary" onClick={() => setLike(like + 1)}>
        <Badge badgeContent={like} color="primary" showZero>
          👍
        </Badge>
      </IconButton>
      <IconButton aria-label="delete" color="error" onClick={() => setDislike(dislike + 1)}>
        <Badge badgeContent={dislike} color="error" showZero>
          👎
        </Badge>
      </IconButton>


    </div>
  );
}
