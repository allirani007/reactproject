import {NavLink} from "react-router-dom";
function Navigation(){
    return(
    //     <>
    // <Link to="/Home">Home</Link>
    // <Link to="/Post">Post</Link>
    // <Link to="/About">About</Link>
    // <Link to="/Posts">Posts</Link>
    // </>
<>
    <NavLink activestyle={{color:"green"}} to="/Home">Home   </NavLink>
    <NavLink to="/Post">Post    </NavLink>
    <NavLink to="/About">About    </NavLink>
    <NavLink to="/Posts">Posts   </NavLink>
    </>

    );
}

export default Navigation ;