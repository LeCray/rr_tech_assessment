import { grey } from '@mui/material/colors';

const color1 = '#2193b0'
const color2 = '#6dd5ed'

// Define theme settings
export const light = {
// palette values for light mode
    primary: {
        main: color1,
    },
    secondary: {
        main: color2,
    },   
    button: {
        main: '#135058'
    },
    background: {
        default: "#111",
        paper: '#000',
    }, 
    text: {
        primary: grey[900],
        secondary: '#135058',
    },
    action: {                            
        disabled: '#555'
    }
};
  
export const dark = {
 // palette values for dark mode
    primary: {
        main: color1
    },
    secondary: {
        main: color2,
    },        
    button: {
        main: '#F1F2B5'
    },            
    background: {
        default: "#111",
        paper: '#000',
    },
    text: {
        primary: '#fff',
        secondary: '#135058',
    },
};
