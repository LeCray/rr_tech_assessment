import React, {useMemo, useEffect} from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import ChartComponent from '../components/Chart'
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import { restClient } from '@polygon.io/client-js';

const rest = restClient("OzUrvokwJJf1KfmSa1vROXAuXn_mvhMP");

function HomePage() {    

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
        rest.stocks.aggregates("AAPL", 1, "day", "2023-01-01", "2023-04-14").then((data) => {
            console.log(data);
        }).catch(e => {
            console.error('An error happened:', e);
        });
    }, [])

    return (
        <div>
            <div style={{textAlign: 'left', marginLeft: 50, marginTop: 100}}>
                {theme.palette.mode === 'dark' ?
                    <Typography component="h1" variant="h5" sx={{
                        background: 'repeating-linear-gradient(to top right, #F5F5F5 0%, #9E9E9E 100%)',
                        '-webkit-background-clip': 'text',
                        '-webkit-text-fill-color': 'transparent',
                        fontFamily: 'Montserrat',
                        fontWeight: 900,
                        fontSize: 50,
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
                    <Typography component="h1" variant="h5" sx={{
                        background: 'repeating-linear-gradient(to top right, #030303 0%, #595959 100%)',
                        '-webkit-background-clip': 'text',
                        '-webkit-text-fill-color': 'transparent',
                        fontFamily: 'Montserrat',
                        fontWeight: 900,
                        fontSize: 50,
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
                        width: 450
                    }}>
                    X CAPITAL allows you to invest, earn interest and
                    grow your portfolio while ensuring maximum security for digital assets.
                </div>

                <div style={{marginTop: 40}}>
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
                                width: '170px', // Update with desired width
                                height: '50px', // Update with desired height
                            }}>
                        
                            LOGIN
                        </Button>
                    </Link>
                </div>
            </div>

 
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <ChartComponent />
            </div>
        </div>
    )
}

export default HomePage