import React from 'react'
import Navbar from './coponents/Navbar';
import Booklist from './coponents/Booklist';
import './style.css'
import ThemeContextProvider from './context/ThemeContext';
import ThemToggle from './coponents/ThemeToggle';
import AuthContextProvider from './context/AuthContext';
import BookContextProvider from './context/BookContext';



function App(){
  return(
      <div className='App'>
          <ThemeContextProvider>
            <AuthContextProvider>
                  <Navbar/>
                  <BookContextProvider>
                      <Booklist/>
                  </BookContextProvider>
                  <ThemToggle/>
            </AuthContextProvider>
            
          </ThemeContextProvider>
            
         </div>
         ) 

}

export default App;
