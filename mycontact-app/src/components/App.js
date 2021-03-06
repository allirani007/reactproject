import React,{useEffect, useState} from "react";
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { uuid } from "uuidv4";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";


function App() 
{
  const[contacts,setContacts]=useState([]);
  const LOCAL_STORAGE_KEY = "contacts";
  
  const addcontactHandler=(contact)=>{
   setContacts([...contacts,{id:uuid(),...contact}])
    console.log(contact);
  }

  const removeContactHandler=(id)=>{
    const newconductList= contacts.filter((contact)=>{
      return contact.id !== id;
    });
    setContacts(newconductList);
  }

  useEffect(() =>{
   const retrivecontacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
   if(retrivecontacts) setContacts(retrivecontacts); 
  }, []);
  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  }, [contacts]);

  
  
    return (
    <div className="ui container">
      <Router>
      <Header />
      <Route path="/add" component={AddContact}/>
      <Route path="/" component={ContactList}/>

        </Router>
      
      <AddContact addcontactHandler={addcontactHandler} />
      <ContactList  contacts={contacts} getcontactid={removeContactHandler}/>
            </div>
  );
}

export default App;
