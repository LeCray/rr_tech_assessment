import React, { useState, useEffect, useContext } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { logout } from '../redux/authSlice';
import { useSelector, useDispatch } from 'react-redux'

import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';

import { Link, useLocation, useNavigate } from "react-router-dom";


import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';

import ColorModeContext from '../theme/ColorModeContext'

const pages = ['Home', 'Account'];
const settings = ['Account', 'Logout'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    let token;
    token = useSelector((state) => state.auth.token) || localStorage.getItem('token')
    
    let email;
    email = useSelector((state) => state.auth.email) || localStorage.getItem('email')

    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
      };

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {            
        setMobileOpen((prevState) => !prevState);
    };

    const location = useLocation()
    
    useEffect(() => {
        if (location.pathname == '/Logout'){        
            dispatch(logout())                
            navigate("/", { replace: true })
            localStorage.clear()
                
        }
    }, []);


    const drawerWidth = 240;
    const navItems = ['Home', 'Account'];
    
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2, fontFamily: 'Montserrat', fontWeight: 700}}>
            R & R TECH
        </Typography>
        
        <List>
            {navItems.map((item) => (
                <ListItem key={item} disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }} href={item}>
                        <ListItemText primary={item} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
        </Box>
    );

    var window;

    const container = window !== undefined ? () => window().document.body : undefined;

    //const { darkMode, handleDarkMode } = useThemeMode();

    //const user = useContext(UserContext);

    return (
        <AppBar position="static">
            <Container maxWidth="xl" sx={{backgroundColor: theme.palette.background}}>
                <Toolbar disableGutters>
                
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href={token ? "Home": "/"}
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'Montserrat',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        R&R TECH
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleDrawerToggle}                    
                            color="inherit"
                            disabled={token ? false : true}
                            >
                            <MenuIcon />
                        </IconButton>
                        {/* <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                            >
                            
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu> */}
                    </Box>          
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'Montserrat',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        R&R TECH
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {token && pages.map((page) => (
                            <Button
                                key={page}
                                href={page}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                    
                        <IconButton onClick={colorMode.toggleColorMode} sx={{ p: 0 }}>
                        {theme.palette.mode === 'dark' ? 
                                <ModeNightIcon />
                            : 
                                <LightModeIcon sx={{ color: "#fff"}}/>
                            }                                          
                        </IconButton>
                    
                    </Box>
                    {token &&
                        <Box sx={{ flexGrow: 0, marginLeft: 2 }}>
                            <Tooltip title="Account options">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt={email} sx={{ width: 30, height: 30 }} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                                >
                                {settings.map((setting) => (
                                   <ListItem key={setting} disablePadding>
                                        <ListItemButton sx={{ textAlign: 'center' }} href={setting}>
                                            <ListItemText primary={setting} />
                                        </ListItemButton>
                                    </ListItem>
                                    
                                ))}
                            </Menu>
                        </Box>
                    }

                </Toolbar>
            </Container>

            <Box component="nav">
                <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </AppBar>
    );
}
export default ResponsiveAppBar;