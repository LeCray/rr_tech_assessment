import React, {useEffect, useState} from 'react'
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
import ChartComponent from '../components/Chart'
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import StackedLineChartOutlinedIcon from '@mui/icons-material/StackedLineChartOutlined';



function PortfolioPage() {

    const [isMobile, setIsMobile] = useState(false);
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

    useEffect(() => {        
        if (window.innerWidth < 600) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
      }, []);

    let email;
    email = useSelector((state) => state.auth.email) || localStorage.getItem('email')

    let password;
    password = useSelector((state) => state.auth.password) || localStorage.getItem('password')
    
    return (
        <div style={{textAlign: 'left', marginLeft: isMobile? 20 : 50, marginTop: 100, paddingBottom: 100}}>
            <Box
                sx={{  
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    
                }}>                               
                <Typography component="h1" variant={isMobile ? "h5" : "h4"} sx={{
                    background: '#121FCF',
                    background: 'repeating-linear-gradient(to right,' + colors.primary + ',' + colors.secondary + ')',
                    '-webkit-background-clip': 'text',
                    '-webkit-text-fill-color': 'transparent',
                    fontWeight: 900,                                      
                    textAlign: 'left'
                }}>
                    YOUR PORTFOLIO
                </Typography>

                <Box sx={{width: isMobile? "90%" : 400, pt: 5}}>     

                    <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <AttachMoneyOutlinedIcon sx={{ color: colors.primary, fontSize: 30 }} />
                            <p style={{marginLeft: 10, fontFamily: 'Montserrat', fontWeight: 'bold'}}>Investment Value </p>
                        </Box>
                        <p style={{marginLeft: 10, fontFamily: 'Montserrat'}}>R 876 566,98</p>                                                
                    </Box>

                    <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <PercentOutlinedIcon sx={{ color: colors.primary, fontSize: 30 }} />
                            <p style={{marginLeft: 10, fontFamily: 'Montserrat',fontWeight: 'bold'}} >Percentage Return </p>
                        </Box>
                        <p style={{marginLeft: 10, fontFamily: 'Montserrat'}}>– %</p>                                                
                    </Box>

                    <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <StackedLineChartOutlinedIcon sx={{ color: colors.primary, fontSize: 30 }} />
                            <p style={{marginLeft: 10, fontFamily: 'Montserrat', fontWeight: 'bold'}}>Gain/Loss </p>
                        </Box>
                        <p style={{marginLeft: 10, fontFamily: 'Montserrat'}}>– %</p>                                                
                    </Box>

                    <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <AccessTimeOutlinedIcon sx={{ color: colors.primary, fontSize: 30 }} />
                            <p style={{marginLeft: 10, fontFamily: 'Montserrat', fontWeight: 'bold'}}>Holding Period </p>
                        </Box>
                        <p style={{marginLeft: 10, fontFamily: 'Montserrat'}}>– %</p>                                                
                    </Box>

                </Box>

                <div style={{display: 'flex', justifyContent: 'center', paddingBottom: 50}}>
                    <ChartComponent />
                </div>
            </Box>
        </div>
    )
}

export default PortfolioPage