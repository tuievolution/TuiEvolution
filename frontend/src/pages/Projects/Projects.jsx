// src/pages/Projects/Projects.jsx
import { Typography, Box, Grid, Card, CardContent, CardActions, Button } from '@mui/material';

const Projects = () => {
  const projects = [
    { id: 1, title: 'E-Ticaret Sitesi', description: 'React ve Node.js ile geliştirilmiş e-ticaret platformu' },
    { id: 2, title: 'Mobil Uygulama', description: 'React Native ile cross-platform mobil uygulama' },
    { id: 3, title: 'Dashboard Panel', description: 'Admin paneli ve analitik dashboard' },
    { id: 4, title: 'API Gateway', description: 'Microservices mimarisi için API gateway' },
  ];

  return (
    <Box>
      <Typography variant="h3" gutterBottom align="center">
        Projelerimiz
      </Typography>
      
      <Typography variant="body1" paragraph align="center" sx={{ mb: 4 }}>
        Tamamladığımız ve üzerinde çalıştığımız projeler
      </Typography>

      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item xs={12} md={6} key={project.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Detaylar</Button>
                <Button size="small">Demo</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;