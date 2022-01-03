import React from "react";
import { ThemeContext } from "../context/ThemeContext";


class Navbar extends React.Component {
    static contextType=ThemeContext;
  
    render() { 
          //console.log(this.context);
         const{dark,islightTheme,light}=this.context
        //  console.log(dark);
        //  console.log(islightTheme);
        //  console.log(light);
        const theme=islightTheme?light:dark;
        //console.log(theme);
        return(
              <nav style={{background:theme.ui, color:theme.syntax}}>
                <h1>Context App</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
              </nav>

        ) 
    }
}
 
export default Navbar;