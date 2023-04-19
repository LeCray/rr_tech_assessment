import { useMediaQuery } from "@material-ui/core";

import React, { createContext, useContext, useEffect, useMemo } from "react";

// function ThemeContext() {

//     // check whether the client's system has enabled dark theme
//     // if enabled then, use dark theme by default
//     const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");   

//     const [mode, setMode] = React.useState(null);    

//     useMemo(() => {
//         if (localStorage.getItem('theme') === "dark") {
//             // if user has opted for dark theme
//             // then set the value of darkMode as true            
//             setMode('dark');
//         } else if (localStorage.getItem('theme') === "light") {
//             // if user has opted for light theme
//             // then set the value of darkMode as false            
//             setMode('light');
//         } else {
//             console.log("This one")
//             // if there is nothing in the local storage
//             // then, use the system theme by default
//             setMode(prefersDarkMode? 'dark' : 'light');
//         }
//     }, [prefersDarkMode]);

//     useEffect(() => {        
//         if (mode === 'light') {            
//             localStorage.setItem('theme', "light");            
//         } else {
//             localStorage.setItem('theme', "dark");            
//         }
//     }, [mode])

//     return createContext(mode)
// }

const ThemeContext = createContext('light');

export default ThemeContext