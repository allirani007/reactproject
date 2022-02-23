import React from "react";
import { BrowserRouter as Router, Switch,Route,Link } from "react-router-dom";

export default function BasicExample(){
    return(
        <Router>
            <div>
                <ul>
                    <li>
                        <link to ="/">Home </link>
                    </li>
                    <li>
                    <link to ="/">About </link>
                    </li>
                    <li> <link to ="/">Dashboard </link>
                    </li>
                </ul>
                <hr />
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route path="/about"><About /></Route>
                    <Route path="/dashboard"><Dashboard/></Route>
                   </Switch>
           </div>
        </Router>
    );
}
function Home() {
    return(
        <div><h2>Home</h2></div>
    );
}
function About() {
    return(
        <div><h2>About</h2></div>
    );
}
function Dashboard() {
    return(
        <div><h2>Dashboard</h2></div>
    );
}