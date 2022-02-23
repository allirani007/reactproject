import {useState} from "react";

function Jopapp1(){

    // const [candName,setcandName]= useState("");
    // const [candAge,setcandAge]= useState("");
    // const [candEmail,setcandEmail]= useState("");
    // const [roleApplied,setroleApplied]= useState("");
    // const [termscond,settermscond]= useState("");
    
      const [state,setState] =useState({
        candName:"",
        candAge:"",
        candEmail:"",
        roleApplied:"",
        termscond:false,
      });

      const handlechange =({target:{name,value,type,checked}})=>{
        if(type==="checkbox") value=checked;
        setState({...state,[name]:value})
      };

    const handleSubmit =(e) => {
      e.preventDefault();
      //console.log(candName,candEmail,candAge,roleApplied,termscond)
      console.log(state);
    };
    return(
        <form action="/"onSubmit={handleSubmit}>
        <h3> Job Application</h3>
          <div>
          {/* cadidate Name */}
          <label>Candidate Name:</label>
          <input type="text" name="candName" placeholder="Enter the name" 
          value={state.candName} 
          onChange={handlechange}
          required />
         
         </div>
                <br />
        <div>
          {/* cadidate age */}
          <label>Candidate Age:</label>
          <input type="number" name="candAge" placeholder="Enter the age" 
          value={state.candAge}
          onChange={handlechange}
          required
                    />
        </div>
        <br />
        <div>
          {/* cadidate Email */}
          <label>Candidate Email id:</label>
          <input type="Email" name="candEmail" placeholder="Enter the Email id" 
          value={state.candEmail}
          onChange={handlechange}
          required/>

        </div>
        <br />
        <div>
          {/* Role Applied */}
          <label>Role Applied :</label>
          <select name="roleApplied" value={state.roleApplied}
           onChange={handlechange}
          required >
          <option value="">--select--</option>
            <option value="react">React Developer</option>
            <option value="Mern">Mern Developer</option>
            <option value="node">Node Developer</option>
          </select>
          
          </div>
        <br />
        <div>
          {/* Terms & Conditions*/}
          <input type="checkbox" name="termscond" checked={state.termscond} 
         onChange={handlechange}
          required  />
          <label>i agree to terms & Conditions for this role</label>
          
        </div>
        <br />
        <button>Submit</button>
      </form>  
    );

  }

export default Jopapp1;