// src/pages/AboutUs/AboutUs.jsx
import { Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <Box>
      <Typography variant="h3" gutterBottom align="center">
        Hakkımızda
      </Typography>
      
      <Typography variant="body1" paragraph align="center" sx={{ mb: 4 }}>
        Ekibimiz hakkında daha fazla bilgi edinin.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Evrim Aluç
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Backend Geliştirici
              </Typography>
              <Button 
                component={Link} 
                to="/about-us/evrim-aluc" 
                variant="contained" 
                fullWidth
              >
                Detaylı Profil
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Tuana Akyıldız
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Frontend Geliştirici
              </Typography>
              <Button 
                component={Link} 
                to="/about-us/tuana-akyildiz" 
                variant="contained" 
                fullWidth
              >
                Detaylı Profil
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;