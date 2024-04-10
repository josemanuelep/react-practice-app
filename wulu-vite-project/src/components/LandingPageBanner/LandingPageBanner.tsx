import * as React from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid, Typography, Box } from '@mui/material';

export interface LandingPageBannerProps { }

function LandingPageBanner({ }: LandingPageBannerProps) {

    return (
          <Container >
          <Box
            display="flex"
            alignItems="center"
            p={2}
           marginTop={2}
        >
            <Grid container spacing={2} justifyContent="center" sx={{ border: '2.5px solid #5c026c', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', backgroundColor:'#f5f5f5' }}>
                <Grid item xs={12} md={10} lg={8}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant="h3" align="center">¿Quiénes Somos?</Typography>
                        </Grid>
                        <Grid item xs={12} marginBottom={3}>
                            <Typography align="center">
                                Wulu es una plataforma nacida en Medellín que conecta a los hogares que requieren servicios de reparación y/o mantenimiento con los expertos ideales.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
          </Container>
      );
}

export default LandingPageBanner;
