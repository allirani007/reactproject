import React from "react";
import './App.css';


function Ticket(){
    const msgtype="closed";
    return(
        <div>
            <div className="App">Status of your Ticket</div>
        {(() =>{
            switch(msgtype){
                case "resolved":return(
                    <div className="resolved">
                        Your Ticket is Resolved succesfully 
                
                    </div>)
                    case "pending":return(
                        <div className="resolved">
                        Your Ticket is under pending 
                    
                    </div>)
                    case "closed":return(
                        <div className="msg-closed">
                        Your Ticket is closed succesfully
                        </div>)
                    default:return(
                        <div className="msg-empty">
                         Your Ticket is unknown check back later
                         </div>)
            }
        })()}
         </div>
    );
}
export default Ticket;