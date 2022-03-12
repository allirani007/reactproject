
import{BrowserRouter,Route,Routes,Link}  from "react-router-dom";
import Logion from "./components/Login";
import About from "./components/About";
import Blog from "./components/Blog";
import Counter from "./components/Test1";
import Services from "./components/Services";

function App(){
  return(
    
    <BrowserRouter>
    <Routes>
      
       <Route path="/Blog" element={<Blog />} />
       <Route path="/Service" element={<Services />} />
       <Route path="/About" element={<About />} />
       <Route path="/Test1" element={<Counter />} />
       <Route path="/" element={<Logion />} />
       </Routes>
       <ul>

         <Link to="/"><li>Home</li></Link>
         <Link to="/Blog"><li>Blog</li></Link>
         <Link to="/Service"><li>Services</li></Link>
         <Link to="/About"><li>About</li></Link>
         <Link to="/Test1"><li>Couter</li></Link>
       </ul>
       </BrowserRouter>
      );
}
export default App;

