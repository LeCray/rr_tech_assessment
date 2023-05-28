import React from 'react'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useSelector } from 'react-redux';
import TextField from "@mui/material/TextField";
import { useTheme } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';



function AccountPage() {

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

    let email;
    email = useSelector((state) => state.auth.email) || localStorage.getItem('email')

    let password;
    password = useSelector((state) => state.auth.password) || localStorage.getItem('password')
    
    return (
        <div style={{textAlign: 'left', marginLeft: 50, marginTop: 100}}>
            <Box
                sx={{  
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    
                }}>                               
                <Typography component="h1" variant="h5" sx={{
                    background: '#121FCF',
                    background: 'repeating-linear-gradient(to right,' + colors.primary + ',' + colors.secondary + ')',
                    '-webkit-background-clip': 'text',
                    '-webkit-text-fill-color': 'transparent',
                    fontWeight: 800,
                    fontSize: 50,                    
                    textAlign: 'left'
                }}>
                    YOUR<br/>ACCOUNT                    
                </Typography>

                <Box sx={{width: 400, pt: 5}}>     

                    <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <PersonIcon sx={{ color: colors.primary, fontSize: 30 }} />
                            <p style={{marginLeft: 10, fontFamily: 'Montserrat', fontWeight: 'bold'}}>Name </p>
                        </Box>
                        <p style={{marginLeft: 10, fontFamily: 'Montserrat'}}>Thoko Rosemary Qwabe</p>                                                
                    </Box>

                    <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <AccountCircleOutlinedIcon sx={{ color: colors.primary, fontSize: 30 }} />
                            <p style={{marginLeft: 10, fontFamily: 'Montserrat',fontWeight: 'bold'}} >Username </p>
                        </Box>
                        <p style={{marginLeft: 10, fontFamily: 'Montserrat'}}>5509120757088</p>                                                
                    </Box>

                    {/* <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <LockOutlinedIcon sx={{ color: colors.primary, fontSize: 30 }} />
                            <p style={{marginLeft: 10, fontFamily: 'Montserrat'}}>Password </p>
                        </Box>
                        <p style={{marginLeft: 10, fontFamily: 'Montserrat'}}>QwabeGumedePhakathwayo#091255</p>                                                
                    </Box> */}

                    <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <OutlinedFlagIcon sx={{ color: colors.primary, fontSize: 30 }} />
                            <p style={{marginLeft: 10, fontFamily: 'Montserrat', fontWeight: 'bold'}}>Nationality </p>
                        </Box>
                        <p style={{marginLeft: 10, fontFamily: 'Montserrat'}}>South African</p>                                                
                    </Box>

                    <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <BadgeOutlinedIcon sx={{ color: colors.primary, fontSize: 30 }} />
                            <p style={{marginLeft: 10, fontFamily: 'Montserrat', fontWeight: 'bold'}}>I.D Number </p>
                        </Box>
                        <p style={{marginLeft: 10, fontFamily: 'Montserrat'}}>5509120757088</p>                                                
                    </Box>
{/*                     
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
                        /> */}
                </Box>
            </Box>
        </div>
    )
}

export default AccountPage