import React from "react";
import { Switch, Route, Link } from "react-router-dom";

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
          <a href="/about">About with anchor</a>
        </li>
        <li>
          {/* Change the url bar but dont refresh */}
          <Link to="/somewhere">Name of the link</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* <li>
          <Link to="/fun">Wowwww</Link>
        </li> */}
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        {/* <li>
            <a href="/about" >Go to about</a>
          </li> */}
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
        <Route path="/about">
          {/* Match url display the below component */}
          <h1> Hi, B30WD </h1>
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
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
      <h2>Home, Welcome All!!!</h2>
      {/* <TableComp /> */}
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About, this nice!!!</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard ***</h2>
    </div>
  );
}
