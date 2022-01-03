import React from 'react';
import { ThemeContext } from '../context/ThemeContext';


class ThemToggle extends React.Component {
    static contextType=ThemeContext
    render() { 
        const {toggleTheme}=this.context;
        return (
            <button onClick={toggleTheme}>Toogle the theme</button>
        )

       
    }
}
 
export default ThemToggle;