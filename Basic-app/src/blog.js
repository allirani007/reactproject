import { createContext ,useContext} from 'react';
import React from 'react';


// context:

// 1.create
// 2.Provider
// 3.Subscribe


const userctx=createContext(null);  //create
export default function Blong() {
   // const st=["sanjai","https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"]
    const st={
        name:"sankari",
        pic:"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }        
    return (
      <div className="App">
        <userctx.Provider value={st} >  
              <Dashboard />
        </userctx.Provider>
      </div>
    );
  }
  
  function Dashboard()
  {
    return(
      <div>
        <h1>dashboard</h1>
        <User/>
        </div>
    );
  }
  function User()
  {
      const st=useContext(userctx);// subscribe
    return(
      <div>
          {/* <img src={ss1[1]} alt={ss1[0]}></img>
        <h1>welcome to {ss1[0]} 🤩</h1> */}
        <img src={st.pic} alt={st.name} />
        <h2>welcome to my website: {st.name}</h2>
                </div>
    );
  }