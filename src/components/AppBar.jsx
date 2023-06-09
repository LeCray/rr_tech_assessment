import React, { useEffect, useContext } from 'react'
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
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { logout } from '../redux/authSlice';
import { useSelector, useDispatch } from 'react-redux'
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import ColorModeContext from '../theme/ColorModeContext'

const pages = ['Home', 'Account', 'Portfolio'];
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
    const navItems = ['Home', 'Account', 'Portfolio'];
    
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2, fontFamily: 'montserrat', fontWeight: 700, letterSpacing: '.2rem'}}>
            X CAPITAL
        </Typography>
        
        <List>
            {navItems.map((item) => (
                <ListItem key={item} disablePadding>
                    <ListItemButton sx={{ textAlign: 'center', }} href={item}>
                        <ListItemText style={{fontFamily: 'montserrat' }} primary={item} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
        </Box>
    );

    var window;

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <AppBar position="static">
            <Container maxWidth="xl" sx={{backgroundColor: '#111'}}>
                <Toolbar disableGutters>
                
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href={'/Home'}
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'montserrat',
                        fontWeight: 700,
                        letterSpacing: '.2rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        X CAPITAL
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
                    </Box>          
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'montserrat',
                            fontWeight: 700,
                            letterSpacing: '.2rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        X CAPITAL
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
                                    <Avatar 
                                        alt={email.toUpperCase() } 
                                        sx={{ width: 30, height: 30, bgcolor: '#521c90' }}
                                        />
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