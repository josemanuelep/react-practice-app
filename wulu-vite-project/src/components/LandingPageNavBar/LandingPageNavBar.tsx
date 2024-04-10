import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
// icons
import ThreePIcon from '@mui/icons-material/ThreeP';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ConstructionIcon from '@mui/icons-material/Construction';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HelpIcon from '@mui/icons-material/Help';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import backgroundImage from '../../assets/images/image-banner1.png';
import logo from './../../assets/images/logo.png';

const pages = ['Servicios', 'Precios', 'Expertos', 'Testimonios'];

// Mapping of page names to icons
const iconMap: { [key: string]: JSX.Element } = {
    Servicios: <ConstructionIcon />,
    Precios: <MonetizationOnIcon />,
    Expertos: <EngineeringIcon />,
    Testimonios: <ThreePIcon />,
};

const StyledAppBar = styled(AppBar)`
background: url('${backgroundImage}') no-repeat center center;
background-size: cover;`;



const logoStyle = {
    width: '95px',
    height: 'auto',
    margin: '15px',
    cursor: 'pointer',
};

function LandingPageNavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <StyledAppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img
                        src={logo}
                        style={logoStyle}
                        alt="Wulu"
                    />
                    {/* responsive menu with items */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        {/* iconButton component to handle responsive (small screen sizes) */}
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Menu
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
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                startIcon={iconMap[page]}
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100%',
                                    textAlign: 'center',
                                    transition: 'background-color 0.2s',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    },
                                }}
                                fullWidth 
                                >
                                {page}
                            </Button>

                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </StyledAppBar>
    );
}

export default LandingPageNavBar;
