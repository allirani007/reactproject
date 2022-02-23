import{useState} from "react";



function Counter(){
    const [count,setcount] =useState(0);
    const [name,setname]=useState("alli");

    

    const increment =()=>setcount(count+1);
    const decrement =()=>setcount(count-1);
    const reset =()=>setcount(0);
    const changeName=()=>setname("Rani");
    console.log("render");
    return(
        <>
        <h3>Counter App</h3>
        <p>count-{count}</p>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>Reset</button>
        <p>Name:{name}</p>
        <button onClick={changeName}>changeName</button>
        </>
    );
}
export default Counter;