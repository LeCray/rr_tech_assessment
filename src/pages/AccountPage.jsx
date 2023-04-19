import React from 'react'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useSelector } from 'react-redux';
import TextField from "@mui/material/TextField";
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
                <Typography component="h1" variant="h5" sx={{
                    background: '#121FCF',
                    background: 'repeating-linear-gradient(to right, #121FCF 0%, #CF1512 100%)',
                    '-webkit-background-clip': 'text',
                    '-webkit-text-fill-color': 'transparent',
                    fontWeight: 800,
                    fontSize: 50,
                    marginTop: 10
                }}>
                    YOUR<br/>ACCOUNT                    
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
                        disabled={true}
                        sx={{
                            "& .MuiInputBase-input.Mui-disabled": {
                              WebkitTextFillColor: theme.palette.text.primary,
                            },
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
                        disabled={true}                   
                        InputLabelProps={{
                            style: { color: theme.palette.text.primary },
                        }}
                        value={password}
                        sx={{
                            "& .MuiInputBase-input.Mui-disabled": {
                              WebkitTextFillColor: theme.palette.text.primary,
                            },
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