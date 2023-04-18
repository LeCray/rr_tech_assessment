import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import Alert from '@mui/material/Alert';

import { useNavigate } from "react-router-dom";


import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox, { checkboxClasses } from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

import { useTheme } from '@mui/material/styles';

import { validate } from 'react-email-validator';
import passwordValidator from 'password-validator'
import CircularProgress from '@mui/material/CircularProgress';


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const [openDialogue, setOpenDialogue] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false)
    const [invalidPassword, setInvalidPassword] = useState(false)
    const [error, setError] = useState("")
    const [signingIn, setSigningIn] = useState(false)

    const theme = useTheme();

    // Create a schema
    var passwordSchema = new passwordValidator();

    const navigate = useNavigate();

    // Add properties to it
    passwordSchema
        .is().min(8)         // Minimum length 8    
        .has().uppercase()   // Must have uppercase letters
        .has().digits(1)     // Must have at least 1 digits
        .has().symbols(1)    // Must have at least 1 special character


    const handleClose = () => {
        setOpenDialogue(false);
        setError("")
    };

    const handleSubmit = (event) => {
        
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get("email")
        const password = data.get("password")

        if (!validate(email)) {
            setError("Invalid email. Please try again.")
            setOpenDialogue(true);        
            return
        }
        if (!passwordSchema.validate(password)) {
            setError("Invalid password. Make sure your password contains:")
            setOpenDialogue(true);        
            return
        }

        console.log("Password validator: ", passwordSchema.validate(password))

        if (email === "darryn@randrtechsa.com" && password === "P@55w0rd@1") {
            const token = "Example Token"; //Some API logic to provide user with a unique token
            // Dispatch a login action to update the global state with the token
           
            setSigningIn(true)
            setTimeout(() => {    
                dispatch(login({token: token, email: email, password: password}))
                    
                localStorage.setItem("token", token)
                localStorage.setItem('email', email);
                localStorage.setItem('password', password);            
                navigate("/home");
                    

            }, 2000);
            
        } else {
            setError("Invalid login details. Please try again.")
            setOpenDialogue(true);        
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{  
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
                >
            <Typography component="h1" variant="h5" >
                Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    InputLabelProps={{
                        style: { color: theme.palette.text.primary },
                    }}
                    sx={{
                        "& .MuiOutlinedInput-root.Mui-focused": {
                            "& > fieldset": {
                                borderColor: theme.palette.text.primary
                            }
                        }
                    }}
                    />
                    
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    InputLabelProps={{
                        style: { color: theme.palette.text.primary },
                    }}
                    sx={{
                        "& .MuiOutlinedInput-root.Mui-focused": {
                            "& > fieldset": {
                                borderColor: theme.palette.text.primary
                            }
                        }
                    }}
                    />
                <Grid display="flex" justifyContent="flex-start">
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" sx={{
                            [`&, &.${checkboxClasses.checked}`]: {
                            color: theme.palette.text.primary,
                            },
                        }}/>}
                        label="Remember me"
                        />
                </Grid>
                {signingIn?
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt:3, mb:2 }}>
                        <CircularProgress size={25} color="primary" sx={{color: theme.palette.text.primary}}/>    
                    </Box>
                :
                    <div>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            >
                            Sign In
                        </Button>
                    
                        <Grid container>
                            <Grid item xs display="flex" justifyContent="flex-start">
                                <Link href="#" variant="body2" sx={{color: theme.palette.text.primary}}>
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item display="flex" flexDirection="row">
                                <div style={{fontSize: 14, marginRight: 5}}>Don't have an account?</div>
                                <Link href="#" variant="body2" sx={{color: theme.palette.text.primary}}>
                                    Sign Up
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
                }
            </Box>
            </Box>
            <Dialog open={openDialogue} onClose={handleClose} fullWidth maxWidth="xs">            
                <DialogContent>
                    <DialogContentText sx={{fontFamily: "Montserrat"}}>
                        {error}
                        {error === "Invalid password. Make sure your password contains:" && 
                            <Box>                        
                                <ul>
                                    <li>A minimum of 8 characters</li>
                                    <li>At least 1 capital letter</li>
                                    <li>At least 1 number</li>
                                    <li>At least 1 special character</li>
                                </ul>
                            </Box>
                        }                          
                    </DialogContentText>
                </DialogContent>
                <DialogActions>                
                    <Button 
                        onClick={handleClose} 
                        autoFocus 
                        sx={{
                            fontFamily: "Montserrat", 
                            fontWeight: 700, 
                            color: theme.palette.text.primary
                        }}>
                        Okay
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}

export default Login;
