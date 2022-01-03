import React, { createContext } from 'react'

export const AuthContext = createContext()

class AuthContextProvider extends React.Component {
    state={
        isAuthenticate:false
    }

      toggleAuthenticate=()=> {
         this.setState({isAuthenticate:!this.state.isAuthenticate})
     }


    render() { 
        return(<AuthContext.Provider value={{...this.state, toggleAuthenticate:this.toggleAuthenticate}}  >
                 {this.props.children}
               </AuthContext.Provider>) ;
    }
}
 
export default AuthContextProvider;