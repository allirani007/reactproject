import React from "react";
import ContactCard from "./ContactCard";
// import user from ".images/R.png";

const ContactList =(props) => {
    console.log(props);

    const deletecontactHanlder =(id) =>{
        props.getcontactid(id);
    }

    const contacts=[{
        
    }]
    const rendercontactList = contacts.map((contact)=>{
        return(
           <ContactCard contact={contact} clickHandler={deletecontactHanlder} key={contact.id}/>                     
        );
    });
    return(
      <div className="ui celled list">
          {rendercontactList}
      </div>
    )
        
    };
export default ContactList