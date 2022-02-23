import {Component} from "react";
import Jobapp1 from "./Jopappfun";
import Jobapp from "./Jobapp";
import PostApp from "./PostApp";

//import Jopapp1 from "./Jopappfun";


// import Jobapp from "./Jobapp";
//import Counter from "./Counterfun3";

// class App extends Component {
//          render()
//         {
//             console.log(this.props);
//             return <p>Hello app! class</p>;
//         }
    
//     }
//     // function App()
    // {
    //     return<p>hello app! function</p>;
    // }

    // export default App;
   
    class App extends Component{
        constructor(props){
            super(props);
            this.state={
                name:"My Counter",
                counter:0,
            };
            console.log("constrctor called")
        }
    increment=()=>{
        this.setState({counter:this.state.counter+ 1});
         }
    decrement=()=>{
        this.setState({counter:this.state.counter-1});
    }
    reset =()=>{
        this.setState({counter:0});
    }
    componentDidMount()
    {
        console.log("componetDidmount called")
    }
    componentDidUpdate()
    {
        console.log("componetDidupdate called")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount called")

    }
    render() {
   // console.log("rendered");
        return(

            <Jobapp1 />
        );

        // <>
        // {/* { <p>Hello {this.state.name}!</p>
        // <p>Counter : {this.state.counter}</p>
        // <button onClick={this.increment}>Add me </button><br></br>
        // <button onClick={this.decrement}>subtract me </button><br></br>
        // <button onClick={this.reset}>reset me </button><br></br> */}
          
        //  //<Jopapp1 />
        //  </>);
        //  {/* <Counter /> 
        // // <PostApp />
        //  // 
        //   */}
        

    }
}
    export default App;
