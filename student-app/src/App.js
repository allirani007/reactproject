import React, { useState } from "react";


export default function App() {
const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [Dob, setDob] = useState("");
  const [Pemail, setPemail] = useState("");

    
    

  const handleSubmit= (e) => {
   //  studentdata([name, password,Dob,Pemail]);
    e.preventDefault();
    
    console.log(name,Pemail,Dob,password);
    alert(name,Pemail,Dob,password);
    //console.log(studentdata);
  }
  const handlereset= () => {
    //  studentdata([name, password,Dob,Pemail]);
    setName("");
    setDob("");
    setPassword("");
    setPemail("");
     //console.log(studentdata);
   }
  //  validate() {
  //   let nameError = "";
  //   let emailError = "";
  //   let passwordError = "";
  //   if (!name) {
  //     nameError = "Name field is required";
  //   }
  //   const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   if (!Pemail || reg.test(Pemail) === false) {
  //     emailError = "Email Field is Invalid ";
  //   }
  //   if (!password) {
  //     passwordError = "Password field is required";
  //   }
  //   if (!Dob) {
  //     passwordError = "Dob field is required";
  //   }
  //   if (emailError || nameError || passwordError) {
  //     //this.setState({ nameError, emailError, passwordError });
  //     return false;
  //   }
  //   return true;
  // }
  
  const validatename=()=>{
    if(name===""||!(/^[a-zA-Z()]+$/.test(name))){
      alert("pleas enter correct value")
    }
  }



  return (
    <div className="App">
      <h1>welcome</h1>
      <div className="student-form">
      <form onSubmit={e => { handleSubmit(e) }}>
        <label>Student Form</label>
        <br />
        <lable>Student name :</lable>
        <input type="Text" name={name} onChange={(event) => setName(event.target.value)}
          placeholder="Enter the name of student" value={name} onBlur={()=>validatename} /><br /><br />
          <lable>Password :</lable>
        <input type="password"  name={password} onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter the Password" value={password}  onBlur={(event)=>{ return (password==="")?alert("please enter a value"):"" }}/> <br /><br />
          <lable>Student Date of Birth :</lable>
        <input type ="text"  name={Dob} onChange={(event) => setDob(event.target.value)}
          placeholder="dd/mm/yyyy" value={Dob} /> <br /><br />
          <lable>Student email id :</lable>
        <input type= "email"  name={Pemail} onChange={(event) => setPemail(event.target.value)}
          placeholder="Enter the email id " value={Pemail} /><br /><br />
        <input type="reset" name="reset" value="reset" onClick={handlereset}></input>
        <input type="submit" name="submit" value="submit"></input>
        <input type="button" name="cancel" value="cancel"></input>
        </form>
      </div>
    </div>
  );

  }


