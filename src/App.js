import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import RootNavigator from './routes/RootNavigator'

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
  import { createTheme, ThemeProvider } from "@mui/material/styles";

  

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
    const [mode, setMode] = React.useState('light');
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
          },
        }),
      [mode],
    );

    const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
    
  return (
    <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="App">
                <RootNavigator />
            </div>
        </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
