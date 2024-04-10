import { AppBar, Toolbar, Grid, Typography, Link, IconButton, Container } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import backgroundImage from '../../assets/images/image-banner1.png';
import { styled } from '@mui/material/styles';

export interface FooterProps { }


function Footer({ }: FooterProps) {

    const StyledAppBar = styled(AppBar)`
    background: url('${backgroundImage}') no-repeat center center;
    background-size: cover;`;

    return (
        <footer>
        <StyledAppBar position="static" sx={{ position: 'sticky', bottom: 0 }}>
            <Container>
                <Toolbar>
                    <Grid container spacing={2} justifyContent="center" sx={{ marginTop: 1 }} >
                        {/* Wulu Section */}
                        <Grid item xs={12} sm={4} lg={3}>
                            <Grid container direction="column" alignItems="center">
                                <Typography variant="h6">Wulu</Typography>
                                <Link href="servicios.html" variant="body2" underline="hover" color="inherit">Servicios</Link>
                                <Link href="login_usuario.html" variant="body2" underline="hover" color="inherit">Usuarios</Link>
                            </Grid>
                        </Grid>

                        {/* Acerca de Section */}
                        <Grid item xs={12} sm={4} lg={4}>
                            <Grid container direction="column" alignItems="center">
                                <Typography variant="h6">Acerca de</Typography>
                                <Link href="nosotros.html" variant="body2" underline="hover" color="inherit">Sobre nosotros</Link>
                                <Link href="https://www.sic.gov.co/" variant="body2" underline="hover" color="inherit">SIC</Link>
                            </Grid>
                        </Grid>

                        {/* Legal Section */}
                        <Grid item xs={12} sm={4} lg={5}>
                            <Grid container direction="column" alignItems="center">
                                <Typography variant="h6">Legal</Typography>
                                <Link href="politicas_privacidad_wulu.html" variant="body2" underline="hover" color="inherit">Políticas de privacidad</Link>
                                <Link href="terminos_condiciones_wulu.html" variant="body2" underline="hover" color="inherit">Términos y condiciones</Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>

                {/* Social Media Icons and Contact */}
                <Toolbar>
                    <Grid container spacing={2} justifyContent="center" alignItems="center">
                        {/* Social Media Icons */}
                        <Grid item>
                            <IconButton color='inherit' href="https://www.facebook.com/Wulu-Oficial-106345368545286">
                                <FacebookIcon />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton  color='inherit' href="https://www.instagram.com/wuluoficial/">
                                <InstagramIcon />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton color='inherit' href="https://api.whatsapp.com/send?phone=573007420034">
                                <WhatsAppIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>

                {/* Bottom Copyright */}
                <Typography variant="body2" color="inherit" align="center" sx={{ marginBottom: 2 }}>
                    © 2021 WULU. Todos los derechos reservados
                </Typography>
            </Container>
        </StyledAppBar>
        </footer>
    );

};


export default Footer;
