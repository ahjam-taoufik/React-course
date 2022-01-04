import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";


const Navbar = () => {
   
    const{dark,islightTheme,light}=useContext(ThemeContext)
    const{isAuthenticate,toggleAuthenticate}=useContext(AuthContext)
    const theme=islightTheme?light:dark;
    return ( 
                <nav style={{background:theme.ui, color:theme.syntax}}>
                <h1>Context App</h1>
                <div>
                    {isAuthenticate?'Logged in...':'Logged out....'}
                {/* <button onClick={toggleAuthenticate}>click</button> */}
                </div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                </nav>

     );
}
 
export default Navbar;