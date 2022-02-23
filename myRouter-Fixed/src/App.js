import React from "react";
import "./index.css";
import "./App.css";
import Shop from "./shop";
import Home from "./home";
import About from "./about";
import Nav1 from "./navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav1 />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
