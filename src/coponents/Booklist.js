
import React from "react";
import { ThemeContext } from "../context/ThemeContext";


class Booklist extends React.Component {
    static contextType=ThemeContext;
  
    render() { 
          const{dark,islightTheme,light}=this.context;
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
}
 
export default Booklist;