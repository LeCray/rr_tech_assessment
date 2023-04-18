import React from 'react'
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { useSelector } from 'react-redux';

import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useTheme } from '@mui/material/styles';




function AccountPage() {

    const theme = useTheme();

    let email;
    email = useSelector((state) => state.auth.email) || localStorage.getItem('email')

    let password;
    password = useSelector((state) => state.auth.password) || localStorage.getItem('password')
    
    return (
        <Container component="main" maxWidth="xs" >
            <Box
                sx={{  
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>                               
                <Typography component="h1" variant="h5" >
                    Your Account
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>                
                    <TextField
                        margin="normal"                        
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"                                            
                        InputLabelProps={{
                            style: { color: theme.palette.text.primary },
                        }}
                        value={email}
                        sx={{
                            "& .MuiOutlinedInput-root.Mui-focused": {
                                "& > fieldset": {
                                    borderColor: theme.palette.text.primary
                                }
                            }
                        }}
                        InputProps={{
                            readOnly: true,
                          }}
                        />
                        
                    <TextField
                        margin="normal"                        
                        fullWidth
                        name="password"
                        label="Password"                        
                        id="password"                        
                        InputLabelProps={{
                            style: { color: theme.palette.text.primary },
                        }}
                        value={password}
                        sx={{
                            "& .MuiOutlinedInput-root.Mui-focused": {
                                "& > fieldset": {
                                    borderColor: theme.palette.text.primary
                                }
                            }
                        }}
                        InputProps={{
                            readOnly: true,
                          }}
                        />
                </Box>
            </Box>
        </Container>
    )
}

export default AccountPage