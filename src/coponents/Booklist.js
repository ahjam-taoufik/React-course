
import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { ThemeContext } from "../context/ThemeContext";


const Booklist = () => {
    const{dark,islightTheme,light}=useContext(ThemeContext)
    const Books=useContext(BookContext)
    const theme=islightTheme?light:dark;
    //console.log(theme);
  return (
      <div className="book-list" style={{background:theme.bg, color:theme.syntax}}>
          <ul>

               {Books.map((book)=>{
                     return(
                         <li key={book.id}  style={{background:theme.ui}}>{book.title}</li>
                     )
               })}
            
             
          </ul>
        </div>
  ) 
}
 
export default Booklist;

