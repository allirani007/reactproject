import React from "react";
import R from "../images/R.png";

const ContactCard =(props)=>{
    const {id,name,email}=props.contact;
    console.log(props);
return(
    <div className="item">
         <img className="ui avatar image" src={R} alt="user" /> 
        <div className="content">
            <div className="header">Name:{name} </div>
            <div>Email:{email}</div>
            </div>
        <i className="trash alternate outline icon right" style={{color:"red",marginTop:"7px", marginRight: "10px"}} 
        onClick={()=>props.clickHandler(id)}></i>
        </div>    
               
);
}
export default ContactCard;