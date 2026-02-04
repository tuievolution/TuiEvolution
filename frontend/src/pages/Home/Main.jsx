// src/pages/Home/Main.jsx
import { Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <Box textAlign="center" py={10}>
      <Typography variant="h2" gutterBottom>
        Hoş Geldiniz
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph>
        TUIEVOLUTION'a hoş geldiniz
      </Typography>
      <Box mt={4}>
        <Button 
          variant="contained" 
          component={Link} 
          to="/projects"
          sx={{ mr: 2 }}
        >
          Projeleri Gör
        </Button>
        <Button 
          variant="outlined" 
          component={Link} 
          to="/about-us"
        >
          Hakkımızda
        </Button>
      </Box>
    </Box>
  );
};

export default Main;