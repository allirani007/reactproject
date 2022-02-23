import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
function Nav1() {
  const navstyle = {
    color: "red",
  };
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>{" "}
        </Link>
        <Link to="/Shop">
          <li>Shop</li>{" "}
        </Link>
        <Link to="/About">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav1;
