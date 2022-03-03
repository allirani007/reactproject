import React, { useState } from "react";
export default function Addcolor(){
      const [color,setcolor]=useState("pink");
      const styles={
        background:color,
      };
     // const colorList=["red","blue","green","skyblue"]
      const [colorList,setcolorList]=useState([
        "crimson",
        "orange",
        "skyblue",
        "red",
      ]);
      return(
        <div>
          <input type= "text" style={styles} 
          onChange={(event) => 
          setcolor(event.target.value) }
          placeholder="Enter a color" value={color}></input>
         {/* <button>AddColor</button> */}
          <button onClick={()=>setcolorList([...colorList,color])}>
         AddColor
           </button>
            {colorList.map((clr)=>(
              <Colorbox color={clr} />
            ))}      
           {/* <Colorbox color="red" />
           <Colorbox color="green" />
           <Colorbox color="blue" /> */}
              </div>
      )
    }
    
    function Colorbox({color}){
      const styles={
        backgroundColor:color,
        height:"50px",
        width:"200px",
        marginTop:"10px"
      };
      return (<div style={styles}></div>)
    }