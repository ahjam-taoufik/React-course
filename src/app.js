import React from 'react'
import Navbar from './coponents/Navbar';
import Booklist from './coponents/Booklist';
import './style.css'
import ThemeContextProvider from './context/ThemeContext';



function App(){
  return(
      <div className='App'>
          <ThemeContextProvider>
              <Navbar/>
              <Booklist/>
          </ThemeContextProvider>
            
         </div>
         ) 

}

export default App;
