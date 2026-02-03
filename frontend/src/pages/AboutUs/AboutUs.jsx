import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mt: 4 }}>
        Hakkımızda
      </Typography>
      
      <Typography variant="body1" paragraph align="center" sx={{ mb: 6 }}>
        Ekibimiz ve çalışmalarımız hakkında bilgi edinin.
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
              <Typography variant="body1" paragraph>
                Uzmanlık alanları: Java, Spring Boot, Database Management
              </Typography>
              <Button 
                component={Link} 
                to="/about-us/evrim-aluc" 
                variant="contained" 
                color="primary"
              >
                Profili Gör
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
              <Typography variant="body1" paragraph>
                Uzmanlık alanları: React, UI/UX Design, Frontend Architecture
              </Typography>
              <Button 
                component={Link} 
                to="/about-us/tuana-akyildiz" 
                variant="contained" 
                color="primary"
              >
                Profili Gör
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;