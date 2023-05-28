import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
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
    const dispatch = useDispatch();
    const [openDialogue, setOpenDialogue] = useState(false);    
    const [error, setError] = useState("")
    const [signingIn, setSigningIn] = useState(false)

    const navigate = useNavigate();
    const theme = useTheme();
    
    var colors = {};

    if (theme.palette.mode === 'dark') {
        colors = {
            primary: theme.palette.dark.primary.main,
            secondary: theme.palette.dark.secondary.main,            
        }
    } else {
        colors = {
            primary: theme.palette.light.primary.main,
            secondary: theme.palette.light.secondary.main,            
        }
    }

    // Create a password schema
    var passwordSchema = new passwordValidator();
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

        if (!email) {
            setError("Email is required.")
            setOpenDialogue(true);        
            return
        }
        if (!password) {
            setError("A password is required.")
            setOpenDialogue(true);        
            return
        }
        if (!validate(email)) {
            setError("Invalid email. Please try again.")
            setOpenDialogue(true);        
            return
        }
        // if (!passwordSchema.validate(password)) {
        //     setError("Invalid password. Make sure your password contains:")
        //     setOpenDialogue(true);        
        //     return
        // }

        console.log("Password validator: ", passwordSchema.validate(password))

        if (email === "xola@gmail.com" && password === "xola") { //Hard coded creds
            const token = "Example Token"; //Some API logic to provide user with a unique token            
           
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
            <Box sx={{  
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",                                
            }}>
                <Typography component="h1" variant="h5" sx={{
                    background: '#121FCF',
                    background: 'repeating-linear-gradient(to right,' + colors.primary + ',' + colors.secondary + ')',
                    '-webkit-background-clip': 'text',
                    '-webkit-text-fill-color': 'transparent',
                    fontWeight: 800,
                    fontSize: 50,                    
                }}>
                    LOGIN                              
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
                                    borderColor: colors.primary
                                }
                            },
                            "& .MuiOutlinedInput-root:hover": {
                                "& > fieldset": {
                                  borderColor: colors.primary,
                                  borderWidth: 2
                                }
                            }
                        }}/>                                                
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
                                    borderColor: colors.primary
                                }
                            },
                            "& .MuiOutlinedInput-root:hover": {
                                "& > fieldset": {
                                    borderColor: colors.primary,
                                    borderWidth: 2
                                }
                            }
                        }}/>                        
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
                        <>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                sx={{ mt: 3, mb: 2, bgcolor: '#222', color: '#fff',
                                    ":hover": {
                                      bgcolor: '#444',
                                      color: "white"
                                    }
                                  }}
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
                        </>
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
