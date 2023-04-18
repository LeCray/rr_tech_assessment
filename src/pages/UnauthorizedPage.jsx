import React from 'react'
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { keyframes } from "styled-components";
import Link from "@mui/material/Link";
import { useTheme } from '@mui/material/styles';



function UnauthorizedPage() {
    const theme = useTheme();

    const gradient = keyframes`{        
        0% {
            background-position: 0 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0 50%;
        }
    }`;
    
    const AnimatedGradientText = styled.h1`
        animation: ${gradient} 5s ease-in-out infinite;
        background: linear-gradient(to right, #ee9ca7, #ffdde1, #2193b0, #6dd5ed);
        background-size: 300%;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    `;
    return (
        <Container component="main" maxWidth="xs" >
            <Box
                sx={{  
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
                >
                
                <Typography component="h1" variant="h5" sx={{
                    background: '#121FCF',
                    background: 'repeating-linear-gradient(to right, #121FCF 0%, #CF1512 100%)',
                    '-webkit-background-clip': 'text',
                    '-webkit-text-fill-color': 'transparent',
                    fontWeight: 800,
                    fontSize: 50,
                    marginTop: 10
                }}>
                    UNAUTHORIZED
                    
                </Typography>
                <Link href="/" variant="body2" sx={{fontSize: 16, color: theme.palette.text.primary}}>
                    Login
                </Link>
                {/* <AnimatedGradientText>Hi, I'm Alexander</AnimatedGradientText> */}
            </Box>
        </Container>
    )
}

export default UnauthorizedPage