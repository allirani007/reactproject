import "./App.css";
import React from "react";
import Movie from "./Movie";
import { Msg, Double } from "./msg";
import Addcolor from "./Addcolor";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { HomeWorkOutlined } from "@mui/icons-material";
import { TicTacToe } from "./TicTacToe";

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
        <Route exact path="/">
          {/* Match url display the below component */}
          <h1> Hi, B30WD </h1>
          <Home />
        </Route>
        <Route path="/Movie">
          <Movie />
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

