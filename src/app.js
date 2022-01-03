import React from 'react'
import Navbar from './coponents/Navbar';
import Booklist from './coponents/Booklist';
import './style.css'
import ThemeContextProvider from './context/ThemeContext';
import ThemToggle from './coponents/ThemeToggle';



function App(){
  return(
      <div className='App'>
          <ThemeContextProvider>
              <Navbar/>
              <Booklist/>
              <ThemToggle/>
          </ThemeContextProvider>
            
         </div>
         ) 

}

export default App;
