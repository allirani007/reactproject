import "./App.css";
import React, { useState } from "react";
import Movie from "./Movie";
import {Msg,Double} from "./msg"
import Addcolor from "./Addcolor";
import { Switch, Route, Link,Redirect } from "react-router-dom";
import { HomeWorkOutlined } from "@mui/icons-material";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'


// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  return (
    <div>
      <ul>
                     
        <li>
          <Link to="/Movie">Movie</Link>
        </li>
        <li>
          <Link to="/Color-game">Color-game</Link>
        </li>
        <li>
          <Link to="/tic-tac-toe">TicTacToe</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        </ul>

      <hr />

      {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
      <Switch>
        {/* Each route is case, eg. - case '/about': */}
        <Route  exact path="/">
          {/* Match url display the below component */}
          <h1> Hi, B30WD </h1>
          <Home />
        </Route>
        <Route path="/Movie">
          <Movie />
        </Route>
        <Route path="/films">
          <Redirect to ="/Movie" />
        </Route>
          <Route path="/Color-game">
          <Addcolor />
        </Route>
        <Route path="/tic-tac-toe">
          <TicTacToe />
        </Route>
        <Route path="**">
         <NotFound />
        </Route>
      </Switch>
    </div>
  );
}
function NotFound(){
  return (
    <div>
      <h1 className="not-found"> 404 </h1>
      <img src="https://freshwater.b-cdn.net/wp-content/uploads/2020/08/404-image.jpg" alt="404 File not Found"></img>
    </div>
  )
}
// Task
// /movies - add movie & movie list
// / -> Welcome to movie app

// /movies - add movie & movie list
// / -> Welcome to movie app

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2> Welcome All!!! My Movie app & Interesting Color Game</h2>
      <h2>🏝🏜🏜🏘🏘🏗🏗</h2>
      {/* <TableComp /> */}
    </div>
  );
}
//loop --> map
//parent component  -> child component(data has be passed)-> props
function TicTacToe() {
const [board,setboard] = useState ([null,null,null,null,null,null,null,null,null]);
//useState([0,1,2,3,4,5,6,7,8]);


const decideWinner=(board)=>{
const lines=[
[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],];
//if winning condition present in the board then we have a winner
for(let i=0;i<lines.length;i++)
{
const [a,b,c]=lines[i];
//console.log(a,b,c);
if(board[a]!=="null" && board[a]===board[b] && board[b]===board[c]){
  console.log("Winner is",board[a]);
  return board[a];
}
}
return null;
};

const winner=decideWinner(board);

const [isXturn,setisXturn]=useState(true);

const handleClick=(index)=>
{
  //copy the board and replace with "X" in the clicked gamebox
  // update only untouched boxes &  until no winner
  if(winner===null && board[index]===null){
  const boardcopy=[...board];
  console.log(boardcopy,index);
  boardcopy[index]=isXturn ? "X" : "O";
  setisXturn(!isXturn);
  setboard(boardcopy);
}
}

// function getStatus() {
//   if (winner) {
//     return "Winner: " + winner;
//   } else if (board[index]===null) {
//     return "Draw!";
//   } 
// }
const { width, height } = useWindowSize()
  
      

  return  ( <div className="full-game">
    {winner? <Confetti
      width={width}
      height={height}
      gravity={0.01}
      wind={0}
    /> : ""}
  <div className="game1">
	{board.map((val,index)=>(
            <Gamebox  val={val} onPlayerClick={()=>handleClick(index)}/>
            ))}
          </div>
          {/* <div className="game-info">{getStatus()}</div> */}
          {winner?<h2>Winner is {winner}</h2> : ""}
           <button onClick={()=>{setboard([null,null,null,null,null,null,null,null,null]);
            setisXturn(true);          
          }}>Restart</button>
          </div>
  );
}
//{val} -> object destructuring
// function Gamebox({val}){
// //const val="x";
//   const styles={
//     color:val==="X" ? "Green" :"red",
//   };

//      return (<div style={styles} className="game-box">{val}</div>);
// }

//changing val requires Hook

function Gamebox({val,onPlayerClick}){
 // const [val,setval]=useState(null);
  //const val="x";
    const styles={
      color:val==="X" ? "Green" :"red",
    };
  
       return (<div onClick={()=>onPlayerClick()}
        // onClick={()=>setval(val==="X" ? "O":"X")} 
        style={styles} className="game-box">{val}</div>);
  }



//  export default function App() {
  
//   const user = [
//     {
//       name: "Valimai",
//       pic:
//         "https://images.news18.com/ibnlive/uploads/2021/07/1626014989_valimai.jpg",
//       about:
//       "Synopsis:A super cop tries to track down the brain behind a series of robberies and murders, but things turn personal when his family become pawns in the criminal's game.",
//        Rating:"⭐⭐⭐⭐⭐",
//        Rating1:9.4

//     },
//     {
//       name: "Veeramae Vaagai Soodum",
//       pic:
//         "https://assets.thehansindia.com/h-upload/2021/11/27/1600x960_1123689-veeramae-vaagai-soodum.jpg",
//       about:
//         "Synopsis:A police aspirant tries to track down the criminals who have murdered his sister.",
//          Rating:"⭐⭐⭐",
//          Rating1:7.1
//     },
//     {
//       name: "Naai Sekar",
//       pic:
//         "https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//       about:
//         "Synopsis:Naai Sekar is likely to appeal more to kids, especially those under-10. For the rest, this is a film that will feel funny in parts and juvenile in the rest.",
//         Rating:"⭐⭐",
//         Rating1:6.4
//     },
//     {
//       name: "Enna Solla Pogirai",
//       pic:
//         "https://m.media-amazon.com/images/M/MV5BM2Y0ODBhYjctNzZiYi00ODIwLWJiMmYtM2ZlNjUwZDlkYjQ3XkEyXkFqcGdeQXVyMTQyOTU3OTMw._V1_FMjpg_UX1000_.jpg",
//       about:
//         "Synopsis:Three individuals with clear notions of what romance discover the indefinable magic that is love when they end up in a triangular romantic relationship. ",
//         Rating:"⭐⭐⭐⭐⭐",
//         Rating1:9.5
//     },
//     {
//       name: "Yaaro",
//       pic:
//         "https://i1.wp.com/www.socialnews.xyz/wp-content/uploads/2019/10/30/Yaaro-Movie-First-Look-Poster-.jpg?quality=80&zoom=1&ssl=1",
//       about:
//         "Synopsis:Yaaro, is an edge-of-the-seat thriller that revolves around the life of a loner, who had a troubled childhood.",
//        Rating:"⭐⭐⭐",
//        Rating1:6.4
//     },
//     {
//       name: "Maaran",
//       pic:
//         "https://static.toiimg.com/photo/msid-87310079/87310079.jpg?118968",
//       about:
//         "Synopsis:A man who follows the Gandhian path of non-violence is forced to resort to violence when he fails to get justice from the judicial system.",
//        Rating:"⭐⭐⭐⭐",
//        Rating1:8.4
//     },
//     {
//       name: "Mahaan",
//       pic:
//         "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/02/mahaan-movie-review-1.jpg",
//       about:
//         "A middle-aged school teacher is abandoned by his family after he decides to live a life of his own. He realises his dream of becoming a billionaire, but misses his son.",
//        Rating:"⭐⭐⭐⭐⭐",
//        Rating1:8.9

//     },
//     {
//       name: "maara",
//       pic:
//         "https://m.media-amazon.com/images/M/MV5BYmM3OTEzOTEtM2Y4Yi00ZGNjLWJmMjAtOTQ4YjBiOGUzZmNkXkEyXkFqcGdeQXVyMTI3MjIwMzU2._V1_FMjpg_UX1000_.jpg",
//       about:
//         "Synopsis:A young woman named Paaru notices a painting on the walls of a coastal town that depicts a fairy tale she once heard as a child. Intrigued, she sets out to find the person who painted it.",
//        Rating:"⭐⭐⭐",
//        Rating1:6.7
//     },
//     {
//     name: "annatha",
//       pic:
//         "https://m.media-amazon.com/images/M/MV5BMjNkNTE1NGUtNjNhMi00ZmY1LWI2NDEtZWZlYTkwZjNjMGMzXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
//       about:
//         "Synopsis:Kaalaiyan loves his younger sister dearly and does everything to make her happy. When she elopes with her lover to Kolkata, he goes to great lengths to protect her from the clutches of an evil don.",
//        Rating:"⭐⭐⭐⭐⭐",
//        Rating1:9.5
//     }
//   ];
//   return (
//     <div classNameName="App">
//       <h1>List of Tamil films of 2021</h1>
//       <h3>Total click Viewer :</h3>
//       <hr />
//       <div className="row">
//         {user.map((usr) => (
//           <Msg name={usr.name} pic={usr.pic} about={usr.about} Rating={usr.Rating} Rating1={usr.Rating1} />
//         ))}
//         {/* <Welcome  profile="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" name="alli" />
//       <Welcome name="rani" profile="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />

//       <Welcome name="suresh" /> */}
//       </div>
//     </div>
//   );
// }
// // export default function App() {
// //   const names = ["uma", "mani", "sudha", "suresh", "hema"];
// //   return (
// //     <div classNameName="App">
// //       {names.map((nm) => (
// //         <Msg name={nm} />
// //       ))}
// //     </div>
// //   );
// // }
// export default function App() {
//   //console.log(Double(3)); 
//     return (
//       <div classNameName="App">
//         {/* <Msg profile="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" name="alli" /> */}
//         <Movie />
        
//       </div>
      
//     );
//   }


