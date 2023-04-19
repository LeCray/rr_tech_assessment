import React, {useMemo, useEffect} from 'react';
import './App.css';
import RootNavigator from './routes/RootNavigator'
import { useMediaQuery } from "@material-ui/core";
import {CssBaseline} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ThemeContext from './theme/themeContext'
import {light, dark} from './theme/theme'
import ColorModeContext from './theme/ColorModeContext'
  

function App() {
    // check whether the client's system has enabled dark theme
    // if enabled then, use dark theme by default
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");   
    
    const [mode, setMode] = React.useState(null);    

    useMemo(() => {
        if (localStorage.getItem('theme') === "dark") {
            // if user has opted for dark theme
            // then set mode to dark           
            setMode('dark');
        } else if (localStorage.getItem('theme') === "light") {
            // if user has opted for light theme
            // then set mode to light
            setMode('light');
        } else {
            console.log("This one")
            // if there is nothing in the local storage,
            // then use the system theme by default
            setMode(prefersDarkMode? 'dark' : 'light');
        }
    }, [prefersDarkMode]);

    useEffect(() => {        
        if (mode === 'light') {            
            localStorage.setItem('theme', "light");            
        } else {
            localStorage.setItem('theme', "dark");            
        }
    }, [mode])

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
    [],);
    
  
    const theme = React.useMemo(
      () =>
        createTheme({
            palette: {
                mode,
                ...(mode == 'light' ? {light} : {dark}),
            },
        }),
        [mode]
    );
        
    return (
        <ColorModeContext.Provider value={colorMode}>        
            <ThemeContext.Provider value={theme}>
                <ThemeProvider theme={theme}> 
                    <CssBaseline />
                    <div className="App">
                        <RootNavigator />
                    </div>
                </ThemeProvider>
            </ThemeContext.Provider>        
        </ColorModeContext.Provider>
    );
}

export default App;
