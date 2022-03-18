import "./App.css";
import React, { useContext, useState } from "react";
import Movie from "./Movie";
import { Msg, Double } from "./msg";
import Addcolor from "./Addcolor";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { HomeWorkOutlined, Subscriptions } from "@mui/icons-material";
import { TicTacToe } from "./TicTacToe";
import { Moviedetails } from "./Moviedetails";
import { Addmovies } from "./Addmovies";
import Example from "./Exuseeffectex";
import { Editmovie } from "./Editmovie";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Context from "@mui/base/TabsUnstyled/TabsContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  const INT_MOVIE_LIST = [
    {
      id:100,
      name: "Valimai",
      pic: "https://images.news18.com/ibnlive/uploads/2021/07/1626014989_valimai.jpg",
      about:
        "Synopsis:A super cop tries to track down the brain behind a series of robberies and murders, but things turn personal when his family become pawns in the criminal's game.",
      Rating: "⭐⭐⭐⭐⭐",
      Rating1: 9.4,
      trailler: "https://www.youtube.com/embed/rJM11ygwFHo",
    },
    {
      id:"101",
      name: "Veeramae Vaagai Soodum",
      pic: "https://assets.thehansindia.com/h-upload/2021/11/27/1600x960_1123689-veeramae-vaagai-soodum.jpg",
      about:
        "Synopsis:A police aspirant tries to track down the criminals who have murdered his sister.",
      Rating: "⭐⭐⭐",
      Rating1: 7.1,
      trailler: "https://www.youtube.com/embed/OLPYeeUytL8",
    },
    {
      id:"102",
      name: "Naai Sekar",
      pic: "https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      about:
        "Synopsis:Naai Sekar is likely to appeal more to kids, especially those under-10. For the rest, this is a film that will feel funny in parts and juvenile in the rest.",
      Rating: "⭐⭐",
      Rating1: 6.4,
      trailler: "https://www.youtube.com/embed/Ht5bwzeYszM",
    },
    {
      id:"103",
      name: "Enna Solla Pogirai",
      pic: "https://m.media-amazon.com/images/M/MV5BM2Y0ODBhYjctNzZiYi00ODIwLWJiMmYtM2ZlNjUwZDlkYjQ3XkEyXkFqcGdeQXVyMTQyOTU3OTMw._V1_FMjpg_UX1000_.jpg",
      about:
        "Synopsis:Three individuals with clear notions of what romance discover the indefinable magic that is love when they end up in a triangular romantic relationship. ",
      Rating: "⭐⭐⭐⭐⭐",
      Rating1: 9.5,
      trailler: "https://www.youtube.com/embed/K8ngHnShirw",
    },
    {
      id:"104",
      name: "Yaaro",
      pic: "https://i1.wp.com/www.socialnews.xyz/wp-content/uploads/2019/10/30/Yaaro-Movie-First-Look-Poster-.jpg?quality=80&zoom=1&ssl=1",
      about:
        "Synopsis:Yaaro, is an edge-of-the-seat thriller that revolves around the life of a loner, who had a troubled childhood.",
      Rating: "⭐⭐⭐",
      Rating1: 6.4,
      trailler: "https://www.youtube.com/embed/ATQi-_zUOh0",
    },
    {
      id:"105",
      name: "Maaran",
      pic: "https://static.toiimg.com/photo/msid-87310079/87310079.jpg?118968",
      about:
        "Synopsis:A man who follows the Gandhian path of non-violence is forced to resort to violence when he fails to get justice from the judicial system.",
      Rating: "⭐⭐⭐⭐",
      Rating1: 8.4,
      trailler: "https://www.youtube.com/embed/IpDwq7HvTF0",
    },
    {
      id:"106",
      name: "Mahaan",
      pic: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/02/mahaan-movie-review-1.jpg",
      about:
        "A middle-aged school teacher is abandoned by his family after he decides to live a life of his own. He realises his dream of becoming a billionaire, but misses his son.",
      Rating: "⭐⭐⭐⭐⭐",
      Rating1: 8.9,
      trailler: "https://www.youtube.com/embed/i4ORfM-q35Y",
    },
    {
      id:"107",
      name: "maara",
      pic: "https://m.media-amazon.com/images/M/MV5BYmM3OTEzOTEtM2Y4Yi00ZGNjLWJmMjAtOTQ4YjBiOGUzZmNkXkEyXkFqcGdeQXVyMTI3MjIwMzU2._V1_FMjpg_UX1000_.jpg",
      about:
        "Synopsis:A young woman named Paaru notices a painting on the walls of a coastal town that depicts a fairy tale she once heard as a child. Intrigued, she sets out to find the person who painted it.",
      Rating: "⭐⭐⭐",
      Rating1: 6.7,
      trailler: "https://www.youtube.com/embed/Lv5KUKKwQEw",
    },
    {
      id:"108",
      name: "annatha",
      pic: "https://m.media-amazon.com/images/M/MV5BMjNkNTE1NGUtNjNhMi00ZmY1LWI2NDEtZWZlYTkwZjNjMGMzXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
      about:
        "Synopsis:Kaalaiyan loves his younger sister dearly and does everything to make her happy. When she elopes with her lover to Kolkata, he goes to great lengths to protect her from the clutches of an evil don.",
      Rating: "⭐⭐⭐⭐⭐",
      Rating1: 9.5,
      trailler: "https://www.youtube.com/embed/zyVX8g71TGo",
    },
  ];
  const [MovieList, setMovieList] = useState(INT_MOVIE_LIST);
  // console.log(MovieList,setMovieList);
  const history = useHistory();
  const [mode, setmode] = useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ borderRadius: "0px", minHeight: "100vh" }} elevation={6}>
        <div className="App">
          {/* <ul>
          <li>
            <Link to="/Movie/add">Add-Movie</Link>
          </li>
          <li>
            <Link to="/Movie1">Welcome</Link>
          </li>
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
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>

      <hr /> */}
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => history.push("/")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => history.push("/Movie")}>
                Movie
              </Button>
              <Button
                color="inherit"
                onClick={() => history.push("/Movie/add")}
              >
                AddMovie
              </Button>
              <Button
                color="inherit"
                onClick={() => history.push("/tic-tac-toe")}
              >
                TicTacToe
              </Button>
              <Button
                color="inherit"
                onClick={() => history.push("/Color-game")}
              >
                Color-Game
              </Button>
              <Button
                color="inherit"
                style={{ marginLeft: "auto" }}
                startIcon={
                  mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
                }
                onClick={() => setmode(mode === "light" ? "dark" : "light")}
              >
                {mode === "light" ? "dark" : "light"} mode
              </Button>
              {  /* <Button color="inherit" 
         onClick={()=>setmode(mode==="light" ? "dark":"light")}>{mode}</Button> refallirani */}
            </Toolbar>
          </AppBar>

          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <div className="route-container">
            <Switch>
              {/* Each route is case, eg. - case '/about': */}
              <Route exact path="/">
                {/* Match url display the below component */}
                <h1> Hi, B30WD </h1>
                <Home />
                <Example />
              </Route>
              <Route path="/Movie/edit/:id">
                <Editmovie MovieList={MovieList} setMovieList={setMovieList} />
              </Route>
              <Route exact path="/Movie/add">
                <Addmovies MovieList={MovieList} setMovieList={setMovieList} />
              </Route>
              <Route path="/Movie/:id">
                <Moviedetails MovieList={MovieList} />
              </Route>
              <Route path="/Movie">
                <Movie MovieList={MovieList} setMovieList={setMovieList} />
              </Route>

              <Route path="/films">
                <Redirect to="/Movie" />
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
        </div>
      </Paper>
    </ThemeProvider>
  );
}

function NotFound() {
  return (
    <div>
      <h1 className="not-found"> 404 </h1>
      <img
        src="https://freshwater.b-cdn.net/wp-content/uploads/2020/08/404-image.jpg"
        alt="404 File not Found"
      ></img>
    </div>
  );
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

// create Context
// publisher  Context provider Context.Provider
// Subscriber  - use Context  useContext(Context)
