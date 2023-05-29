import React, {useMemo, useEffect, useState} from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import ChartComponent from '../components/Chart'
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { restClient } from '@polygon.io/client-js';
import CryptoTable from '../components/CryptoTable'
import { useSelector, useDispatch } from 'react-redux'

const rest = restClient("OzUrvokwJJf1KfmSa1vROXAuXn_mvhMP");

function HomePage() {    

    let token;
    token = useSelector((state) => state.auth.token) || localStorage.getItem('token')

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

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);

        };

        if (window.innerWidth < 600) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }

        // Attach event listener to window resize
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };

      }, []); // Empty dependency array to run the effect only once
    
    useEffect(() => {              
        rest.stocks.aggregates("AAPL", 1, "day", "2023-01-01", "2023-04-14").then((data) => {
            //console.log(data);
        }).catch(e => {
            console.error('An error happened:', e);
        });
    }, [])

    return (
        <div>
            <div style={{textAlign: 'left', marginLeft: isMobile ? 20 : 50, marginTop: 100}}>
                {theme.palette.mode === 'dark' ?
                    <Typography component="h1" variant={isMobile ? "h5" : "h4"} sx={{
                        background: 'repeating-linear-gradient(to top right, #F5F5F5 0%, #9E9E9E 100%)',
                        '-webkit-background-clip': 'text',
                        '-webkit-text-fill-color': 'transparent',
                        fontFamily: 'Montserrat',
                        fontWeight: 900,                        
                        letterSpacing: '.2rem',
                    }}>                        
                        INVEST, EARN AND<br />
                        GROW WITH{' '}
                        <span style={{
                            backgroundImage: 'linear-gradient(to right,' + colors.primary + ',' + colors.secondary,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>
                            X CAPITAL
                        </span>
                    </Typography>
                :
                    <Typography component="h1" variant={isMobile ? "h5" : "h4"} sx={{
                        background: 'repeating-linear-gradient(to top right, #030303 0%, #595959 100%)',
                        '-webkit-background-clip': 'text',
                        '-webkit-text-fill-color': 'transparent',
                        fontFamily: 'Montserrat',
                        fontWeight: 900,                        
                        letterSpacing: '.2rem',
                        }}>
                        INVEST, EARN AND<br />
                        GROW WITH{' '}
                        <span style={{
                            backgroundImage: 'linear-gradient(to right,' + colors.primary + ',' + colors.secondary,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>
                            X CAPITAL
                        </span>
                    </Typography>
                }
                <div style={{
                        marginTop: 13,
                        fontFamily: 'Montserrat',
                        fontWeight: 400,
                        fontSize: 15,
                        width: isMobile ? '95%' : 450
                    }}>
                    X CAPITAL allows you to invest, earn interest and
                    grow your portfolio while ensuring maximum security for your digital assets.
                </div>

                <div style={{marginTop: 40}}>
                    {!token? 
                        <Link to="/login">
                            <Button  variant="contained"
                                color="primary"
                                sx={{
                                    fontFamily: 'Montserrat',
                                    fontWeight: 'bold',
                                    fontSize: 12,
                                    color: '#fff',
                                    bgcolor: colors.primary,
                                    '&:hover': {
                                        
                                        bgcolor: colors.secondary, // Update this with the desired hover color
                                    },
                                    width: isMobile ? 150 : 170, // Update with desired width
                                    height: isMobile ? 40 : 50, // Update with desired height
                                }}>
                            
                                LOGIN
                            </Button>
                        </Link>
                    :
                        <Link to="/Portfolio">
                            <Button  variant="contained"
                                color="primary"
                                sx={{
                                    fontFamily: 'Montserrat',
                                    fontWeight: 'bold',
                                    fontSize: 12,
                                    color: '#fff',
                                    bgcolor: colors.primary,
                                    '&:hover': {
                                        
                                        bgcolor: colors.secondary, // Update this with the desired hover color
                                    },
                                    width: isMobile ? 150 : 170, // Update with desired width
                                    height: isMobile ? 40 : 50, // Update with desired height
                                }}>                            
                                My Portfolio
                            </Button>
                        </Link>
                    }
                </div>
            </div>

 
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <CryptoTable />
            </div>
        </div>
    )
}

export default HomePage