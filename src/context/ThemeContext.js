import React, { createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
state = {
        islightTheme:true,
        light:{syntax:'#555',ui:'#ddd',bg:'#eee'},
        dark: {syntax:'#ddd',ui:'#333',bg:'#555'}
        }
   toggleTheme=()=>{
      this.setState({ islightTheme: !this.state.islightTheme });
  }      

    render() { 
        return(
           
                 <ThemeContext.Provider value={{...this.state,toggleTheme:this.toggleTheme}} >
                    {this.props.children}
                 </ThemeContext.Provider>
             
          ) ;

    }
}
 


export default ThemeContextProvider;