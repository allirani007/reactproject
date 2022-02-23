import { Component } from "react";

class Jobapp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candName:"",
      candAge:"",
      candEmail:"",
      roleApplied:"node",
      termscond:false,
      error:{
        candName:"",
        candAge:"",
        candEmail:"",
        roleApplied:"",
        termscond:"",
      },
      touched:{
        candName:false,
        candAge:false,
        candEmail:false,
        roleApplied:false,
        termscond:false,
      }
    };
  }
  
// handlechange =(event) =>{
//  console.log(event.target.name,event.target.value);
//   const state ={...this.state};
//   state[event.target.name]=event.target.value;
//   //console.log(state);
//   this.setState({...state});
// }
// handlechange=(event) =>{
//   console.log(event.target.name,event.target.value);
//   const state ={...this.state};
//   state[event.target.name]=event.target.value;
//   this.setState({...state});
// };

// handlechange =({target:{name,value}})=>{
//   this.setState({...this.state,[name]:value});
// };
handlechange =({target:{name,value,type,checked}})=>{
if(type==="checkbox") value=checked;
const error={...this.state.error};
switch(name){
case "candName":{
//validatation of candidate Name
error.candName=!value ? "Please enter your correct name":"";
break;
}
case "candAge":{
  //validatation of candidate age
  error.candAge=!value ? "Please enter your12 correct Age":"";
  break;
}
case "candEmail" :{
  //validatation of candidate Email
  error.candEmail=!value ? "Please enter your correct Email id":"";
break;

}
case "roleapplied" :{
  //validatation of Roleapplied 
  error.roleApplied=!value ? "Please enter your correct Role":"";
break;

}
case "termscond":{
  //validatation of terms and conditions 
  error.termscond=!value ? "Please check the terms and conditions": "";
  break;
}
}
console.log(error);
  this.setState({...this.state,[name]:value,error});
};
handleBlur =({target:{name}}) =>{
  const touched = {...this.state.touched,[name]:true};
  this.setState({touched});
}
handleSubmit = (event) =>{
   event.preventDefault();
   const notTouched= Object.values(this.state.touched).filter((err) => !err);
   const errors= Object.values(this.state.error).filter((err) =>err !=="");
  if(!errors.length && !notTouched.length){
   console.log(this.state);
  //fetch api here
}
else
{
  return false;
}
};

  render() {

    return (
      <form action="/"onSubmit={this.handleSubmit}>
        <h3> Job Application</h3>
          <div>
          {/* cadidate Name */}
          <label>Candidate Name:</label>
          <input type="text" name="candName" placeholder="Enter the name" 
          value={this.state.candName} 
          onChange={this.handlechange}
          onBlur={this.handleBlur}
          required
                              />
          <span className="error">{this.state.error.candName}</span>
                </div>
                <br />
        <div>
          {/* cadidate age */}
          <label>Candidate Age:</label>
          <input type="number" name="candAge" placeholder="Enter the age" 
          value={this.state.candAge}
          onChange={this.handlechange}
          onBlur={this.handleBlur}
          required
                    />
          <span className="error">{this.state.error.candAge}</span>
        </div>
        <br />
        <div>
          {/* cadidate Email */}
          <label>Candidate Email id:</label>
          <input type="Email" name="candEmail" placeholder="Enter the Email id" 
          value={this.state.candEmail}
          onChange={this.handlechange} 
          onBlur={this.handleBlur}
          required/>
          <span className="error">{this.state.error.candEmail}</span>
        </div>
        <br />
        <div>
          {/* Role Applied */}
          <label>Role Applied :</label>
          <select name="roleApplied" value={this.state.roleApplied}
          onChange={this.handlechange}
          onBlur={this.handleBlur}
          required
          >
          <option value="">--select--</option>
            <option value="react">React Developer</option>
            <option value="Mern">Mern Developer</option>
            <option value="node">Node Developer</option>
          </select>
          <span className="error">{this.state.error.roleApplied}</span>
          </div>
        <br />
        <div>
          {/* Terms & Conditions*/}
          <input type="checkbox" name="termscond" checked={this.state.termscond} 
          onChange={this.handlechange}
          onBlur={this.handleBlur}
          required
          />
          <label>i agree to terms & Conditions for this role</label>
          <span className="error">{this.state.error.termscond}</span>
        </div>
        <br />
        <button>Submit</button>
      </form>
    );
  }
}

export default Jobapp;
