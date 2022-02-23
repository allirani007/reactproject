import {Route,Switch} from "react-router-dom";
import Home from "./Home";
import Logion from "/.Login";
import About from "./About";
import Post from "./Post";
import Posts from "./Posts";
import Notfound from "./Notfound";
import { Redirect } from "react-router";
function Rout100(){
    return(
        <>
       <Switch>
           <Route path="/Login" component={Logion}/>
           
        <Route path="/" component={Home} />
        <Route path="/Home"
        render={()=>{
            const isLoggedIn = localStorage.getItem("isLoggedIn");
            return isLoggedIn ? <Home /> : <Redirect to="/Login" />
            // if(isLoggedIn)
            // {
            //     return <Home />;
            // }
            // else
            // {
            //    return <Redirect to="/Login" />;
            // }
        }}
         />
        <Route path="/About" component={About}/>
        <Route path="/Posts" component={Posts}/>
        <Route path="/Post"  component={Post}/>
        <Route path="*" component={Notfound}/>
        </Switch>
    </>
    //     <>
    //    <Routes>
    //     <Route path="/" element={(routconfig)=><Home name="allirani"{...routconfig} />}/>
    //     <Route path="/Home" element={<Home name="allirani"/>}/>
    //     <Route path="/About" element={<About />}/>
    //     <Route path="/Posts" element={<Posts />}/>
    //     <Route path="/Post"  element={<Post />}/>
    //     <Route path="*" element={<Notfound />}/>
    //     </Routes>
    // </>
    );
}

export default Rout100 ;
