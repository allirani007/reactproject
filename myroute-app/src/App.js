import React from 'react';
import './index.css';
import './App.css';
import Shop from './shop';
import Home from './home';
import About from './about';
import Nav1 from './navigation';
import {BrowserRouter,Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router>
       <Nav1 />
<Routes>
  <Route  exact path="/about" component={Home} />

</Routes>
     </Router>


    {/* <BrowserRouter>
        <Switch>
        <Nav1 />   
        <Route path="/"  exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/shop" component={Shop} />
      
      </Switch>
     </BrowserRouter> */}
      </div>
  );
}

export default App;
