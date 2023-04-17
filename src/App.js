import React, {createContext, useState, useMemo, useEffect} from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import RootNavigator from './routes/RootNavigator'

import { useMediaQuery } from "@material-ui/core";

import {
    Card,
    CardHeader,
    Switch,
    CardContent,
    Box,
    Container,
    Typography,
    FormGroup,
    FormControlLabel,
    CssBaseline,
  } from "@mui/material";
  //import { createTheme, ThemeProvider } from "@mui/material/styles";

  import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';

  import { green, purple, grey } from '@mui/material/colors';

  import ThemeContext from './theme/themeContext'

  import ColorModeContext from './theme/ColorModeContext'
  

  // Define theme settings
const light = {
    palette: {
      mode: "light",
    },
  };
  
  const dark = {
    palette: {
      mode: "dark",
    },
  };

function App() {
    

    // check whether the client's system has enabled dark theme
    // if enabled then, use dark theme by default
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");   
    
    const [mode, setMode] = React.useState(null);    

    useMemo(() => {
        if (localStorage.getItem('theme') === "dark") {
            // if user has opted for dark theme
            // then set the value of darkMode as true            
            setMode('dark');
        } else if (localStorage.getItem('theme') === "light") {
            // if user has opted for light theme
            // then set the value of darkMode as false            
            setMode('light');
        } else {
            console.log("This one")
            // if there is nothing in the local storage
            // then, use the system theme by default
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
      [],
    );
  
    const theme = React.useMemo(
      () =>
        createTheme({
            palette: {
                mode,
                ...(mode == 'light' ?
                    {
                        // palette values for light mode
                        primary: {
                            main: '#111',
                        },
                        divider: green[200],
                        text: {
                            primary: grey[900],
                            secondary: grey[800],
                        },
                    }
                : 
                    {
                        // palette values for dark mode
                        primary: {
                            main: '#222'
                        },                
                        background: {
                            default: "#111",
                            paper: '#000',
                        },
                        text: {
                            primary: '#fff',
                            secondary: '#fff',
                        },
                    }
                ),
            },
        }),
      [mode],
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
