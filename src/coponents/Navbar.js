import React from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";


class Navbar extends React.Component {
  
    render() { 

        return(
             
        <AuthContext.Consumer>{(AuthContext)=>(

                <ThemeContext.Consumer>{(themContext)=>{
                    
                    const{dark,islightTheme,light}=themContext
                    const{isAuthenticate,toggleAuthenticate}=AuthContext
                    const theme=islightTheme?light:dark;
                    return(
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
                    )
                
                }}</ThemeContext.Consumer>

        )}</AuthContext.Consumer>    
        
                


             





        ) 
    }
}
 
export default Navbar;