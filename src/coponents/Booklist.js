
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";


const Booklist = () => {
    const{dark,islightTheme,light}=useContext(ThemeContext)
    const theme=islightTheme?light:dark;
    //console.log(theme);
  return (
      <div className="book-list" style={{background:theme.bg, color:theme.syntax}}>
          <ul>
              <li style={{background:theme.ui}}>ths first book</li>
              <li style={{background:theme.ui}}>the gist</li>
              <li style={{background:theme.ui}}>the best one</li>
             
          </ul>
        </div>
  ) 
}
 
export default Booklist;

