import React from "react";
import Button from 'react-bootstrap/Button';

function Logion()
{
    const [useName,setUsename] = React.useState("");
    const [password,setpassword] = React.useState("");
return(
    <form>

             <div>
            <lable>UserName</lable>
            <input type="Text" name="userName" value={useName}  Placeholder="Enter the userName " 
            onChange={({target:{value}})=>setUsename(value)}
            required
            />
         </div>
         <br />
         <div>
         <lable>password</lable>
         <input type="password" name="title" value={password}  Placeholder="Enter the password" 
            onChange={({target:{value}})=>setpassword(value)}
            required />
            </div>
            <br />
        <div>
            <Button variant="success" type="submit">Login</Button>
        </div>
        </form>
);
}
export default Logion;