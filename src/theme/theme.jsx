import { grey } from '@mui/material/colors';

// Define theme settings
export const light = {
// palette values for light mode
    primary: {
        main: '#111',
    },
    secondary: {
        main: '#521c90',
    },   
    background: {
        default: "#111",
        paper: '#000',
    }, 
    text: {
        primary: grey[900],
        secondary: grey[800],
    },
    action: {                            
        disabled: '#555'
    }
};
  
export const dark = {
 // palette values for dark mode
    primary: {
        main: '#222'
    },   
    secondary: {
        main: '#521c90',
    },             
    background: {
        default: "#111",
        paper: '#000',
    },
    text: {
        primary: '#fff',
        secondary: '#fff',
    },
};



  //export default theme