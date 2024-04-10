import { Grid, Typography, Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Services } from '../../types/services';
import electricity from '../../assets/images/categories//electricity.png';
import whiteWork from '../../assets/images/categories/white-work.png';
import plumbing from '../../assets/images/categories/plumbing.png';
import roofs from '../../assets/images/categories/roofs.png';
import technology from '../../assets/images/categories/technology.png';
import darkBackground from '../../assets/images/dark-background.jpg';

const services: Services[] = [
    {
        name: 'Tecnologia',
        description: 'Wulu es tu socio confiable en servicios eléctricos para hogares y negocios. Nuestro equipo de expertos ofrece instalaciones seguras, mantenimiento preventivo y reparaciones rápidas. Cumplimos con los más altos estándares de seguridad y eficiencia para mantener tu energía en marcha.',
        shortDescription: 'Wulu es tu socio confiable en servicios eléctricos para hogares y negocios',
        imagePath: technology,
    },
    {
        name: 'Electricidad',
        description: 'Wulu es tu socio confiable en servicios eléctricos para hogares y negocios. Nuestro equipo de expertos ofrece instalaciones seguras, mantenimiento preventivo y reparaciones rápidas. Cumplimos con los más altos estándares de seguridad y eficiencia para mantener tu energía en marcha.',
        shortDescription: 'Wulu es tu socio confiable en servicios eléctricos para hogares y negocios.',
        imagePath: electricity,
    },
    {
        name: 'Obra Blanca',
        description: 'Wulu ofrece servicios de obra blanca y pintura de alta calidad para hogares y negocios. Nuestro equipo experto transforma espacios con precisión y estilo, desde la instalación de tabiques hasta el acabado final con pintura de primera calidad',
        shortDescription: 'Wulu ofrece servicios de obra blanca y pintura de alta calidad para hogares y negocios',
        imagePath: whiteWork,
    },
    {
        name: 'Plomeria',
        description: 'Wulu ofrece servicios de obra blanca y pintura de alta calidad para hogares y negocios. Nuestro equipo experto transforma espacios con precisión y estilo, desde la instalación de tabiques hasta el acabado final con pintura de primera calidad',
        shortDescription: 'Wulu ofrece servicios de obra blanca y pintura de alta calidad para hogares y negocios.',
        imagePath: plumbing,
    },
    {
        name: 'Techos',
        description: 'Wulu ofrece servicios de obra blanca y pintura de alta calidad para hogares y negocios. Nuestro equipo experto transforma espacios con precisión y estilo, desde la instalación de tabiques hasta el acabado final con pintura de primera calidad',
        shortDescription: 'Wulu ofrece servicios de obra blanca y pintura de alta calidad para hogares y negocios.',
        imagePath: roofs,
    },
];

function OurServices() {

    return (
        <Box display="flex"
            alignItems="center"
            gap={4}
            p={2}
            sx={{ my: 1 }}>
            <Grid container spacing={2} justifyContent="center" >
                {services.map((service, index) => (
                    <Grid item key={service.name} xs={12} sm={6} md={2}>
                        <Card
                            key={index}
                            variant="outlined"
                            sx={{
                                border: '2.5px solid #5c026c',
                                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                                transition: 'transform 0.3s ease, background 2s ease',
                                '&:hover': {
                                    background: 'radial-gradient(circle, rgba(161,69,177,0.7611241217798594) 0%, rgba(124,52,137,1) 100%)'
                                },
                            }}
                        >
                            <CardContent sx={{

                                transition: 'transform 0.3s ease, background-color 0.7s ease',
                                '&:hover': {
                                    color: 'white'
                                },
                            }}>
                                <Typography
                                    gutterBottom
                                    color='white'
                                    variant="h5"
                                    p={1}
                                    sx={{
                                        fontWeight: 'bold',
                                        borderRadius: '5px',
                                        textAlign: 'center',
                                        backgroundImage: `url(${darkBackground})`,
                                    }}
                                >
                                    {service.name}
                                </Typography>
                                <Box display="flex" alignItems="center" justifyContent="center">
                                    <CardMedia
                                        component="img"
                                        image={service.imagePath}
                                        alt={service.name}
                                        style={{ width: '50%', margin: '12px' }}
                                    />
                                </Box>
                                <Typography variant="body1">
                                    {service.shortDescription}
                                </Typography>
                            </CardContent>
                            <CardActions>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default OurServices;
