import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

// as -> renaming
// HashRouter -> URL will contain #

// Very important
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);