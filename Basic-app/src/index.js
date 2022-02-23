import React from 'react';
import ReactDOM from 'react-dom';
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom'  
import App from './App';
import Counter from './Test1';
import './index.css';
import Blong from './blog';
import Service from'./Services'

const routing =(
  <Router>
     <div>
      <h1>Routing</h1>
      <Routes>
      <Route path ="/" element={<App />} />
      <Route path ="/Blog" element={<Blong />} />
      <Route path ="/Services" element={<Service />} />
      <Route path ="/Test1" element={<Counter />} /> 
      </Routes>
    </div>
    </Router>
);


ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
