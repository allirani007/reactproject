import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  var mystyle={
    fontSize:40,
    fontFamily:'courier',
    color:'#003300'
  }
  const datacollection=[
    {id:1,
    title:'Rock beach'},
    {
      id:2,
      title:'auro beach'
    },
    {
      id:3,
      title:'Paradise beach'
    },
    {
      id:4,
      title:'Pondy Marina'
    }
  ];
      return (
      
          <div style={mystyle}>
            <div>Pondicherry famous beach area</div>
                        <ul>
              {
                datacollection.map((nn)=><li key={nn.id} >{nn.title}</li>
                //datacollection.map((item,index)=> <li key={index}>{item.title}</li>
                )
              }
            </ul>
            <Counter />

         </div>
            );
            
           }

export default App;

function Counter(){
  const [like , setLike]=useState(0);
  return(
    <div>
      <button onClick={() => setLike(like + 1)}>👍{like}</button>
    </div>
  );
}
