import React from 'react'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useTheme } from '@mui/material/styles';


function UnauthorizedPage() {
    
    const theme = useTheme();

    return (
        <Container component="main" maxWidth="xs" >
            <Box sx={{  
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
                    fontSize: 40,
                    marginTop: 10
                }}>
                    UNAUTHORIZED                    
                </Typography>
                <Link href="/" variant="body2" sx={{fontSize: 16, color: theme.palette.text.primary}}>
                    Login
                </Link>                
            </Box>
        </Container>
    )
}

export default UnauthorizedPage