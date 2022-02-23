import{useReducer} from "react";

//Current State,Params-dispatch()
const countReducer = () => {
  //  console.log("Reducer Called") -TESTING PUR

  console.log(count,action);

  switch(action){
      case "INCREMENT" : return count +action.by;
      case "DECREMENT" : return count -action.by ;
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
        <button onClick={()=>dispatch({type:"INCREMENT",by:1})}>increment</button>
        <button onClick={()=>dispatch({type:"DECREMENT",by:1})}>decrement</button>
        <button onClick={()=>dispatch("RESET")}>Reset</button>
        <p>count-{count}</p>
        <button onClick={()=>dispatch1({type:"INCREMENT",by:2})}>increment1 </button>
        <button onClick={()=>dispatch1({type:"DECREMENT", by:2})}>decrement1</button>
        <button onClick={()=>dispatch1("RESET")}>Reset1</button>     
              
              
                </>
    );
}
export default Counter;