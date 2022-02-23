import {useState,useEffect} from "react";

function Counter(){
    const [count,setcount] = useState(0);
    const [name,setName] = useState("guvi");
    //component didMount()
    useEffect(() => { 
        console.log("useEffect called");

    });
    //componentDidUpdata()
    useEffect(() => { 
        console.log("useEffect2 called");

     //componentWillUnmount
     return() =>{
        console.log("useEffect4 called");
     };
     
    },[]);

    useEffect(() => { 
        console.log("useEffect3 called");

    },[count]);

    return(
    <>
        <h3>Counter App</h3>
        <p>count-{count}</p>
        <button onClick={()=>setcount(count+1)}>increment</button>
        <button onClick={()=>setcount(count-1)}>decrement</button>
        <button onClick={()=>setcount(0)}>Reset</button>
        <p>count-{name}</p>
        <button onClick={()=>setName("zen")}>Change Name</button>
  </>
    );
}

export default Counter ;
