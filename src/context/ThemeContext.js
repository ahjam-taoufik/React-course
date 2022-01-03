import React, { createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
state = {
        islightTheme:true,
        light:{syntax:'#555',ui:'#ddd',bg:'#eee'},
        dark: {syntax:'#ddd',ui:'#333',bg:'#555'}
        }

    render() { 
        return(
            <div>
                 <ThemeContext.Provider value={{...this.state}} >
                    {this.props.children}
                 </ThemeContext.Provider>
              </div>
          ) 

    }
}
 


export default ThemeContextProvider;