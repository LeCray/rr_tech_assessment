import React from 'react'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function HomePage() {    
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
                    fontSize: 50,
                    marginTop: 10
                }}>
                    WELCOME TO THE FUTURE                    
                </Typography>                
            </Box>
        </Container>
    )
}

export default HomePage