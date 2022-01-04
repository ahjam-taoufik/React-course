
import { createContext, useState } from "react";


export const BookContext=createContext()

const BookContextProvider = (props) => {

    const [Books, setBooks] = useState([
        {title:"Don't worry be happy",id:1},
        {title:'father and son',id:2},
        {title:'I am Sailing',id:3},
        {title:'Hotel california',id:3},
    ])


    return ( 
         <BookContext.Provider value={Books}>
              {props.children}
          </BookContext.Provider>
     );
}
 
export default BookContextProvider;