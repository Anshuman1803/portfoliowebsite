/* eslint-disable react/prop-types */
import { createContext, useState, useCallback, useEffect } from "react";

export const MyThemeContext = createContext();

const ThemeContextStore = (props)=> {

    const [IsDarkMode, SetDarkMode] = useState(false);
    const handleSwitchTheme = useCallback(() => {
        SetDarkMode(!IsDarkMode);
        localStorage.setItem("darkMode", !IsDarkMode)
    }, [IsDarkMode]);

    useEffect(()=>{
        localStorage.getItem("darkMode") === 'false' ? SetDarkMode(false) : SetDarkMode(true)
    }, [])
    return (
        <MyThemeContext.Provider value={{ IsDarkMode, handleSwitchTheme }}>
          {props.children}
        </MyThemeContext.Provider>
    )
} 


export default ThemeContextStore
