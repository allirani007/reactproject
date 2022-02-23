import{useReducer} from "react";

//Current State,Params-dispatch()
const countReducer = () => {
  //  console.log("Reducer Called") -TESTING PUR

  console.log(count,action);

  switch(action){
      case "INCREMENT" : return count +1 ;
      case "DECREMENT" : return count -1 ;
      case "RESET" : return 0 ;
      default: return count
          
      }
  }

function Counter(){
    const [count,dispatch] =useReducer(countReducer,0);
    const [count1,dispatch1] =useReducer(countReducer,5);
      console.log("render");
    return(
        <>
        <h3>Counter App</h3>
        <p>count-{count}</p>
        <button onClick={()=>dispatch("INCREMENT")}>increment</button>
        <button onClick={()=>dispatch("DECREMENT")}>decrement</button>
        <button onClick={()=>dispatch("RESET")}>Reset</button>
        <p>count-{count}</p>
        <button onClick={()=>dispatch1("INCREMENT")}>increment1 </button>
        <button onClick={()=>dispatch1("DECREMENT")}>decrement1</button>
        <button onClick={()=>dispatch1("RESET")}>Reset1</button>     
              
              
                </>
    );
}
export default Counter;