// src/pages/AboutUs/EvrimAluc.jsx
import { Typography, Box, Button, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const EvrimAluc = () => {
  return (
    <Box>
      <Button 
        startIcon={<ArrowBackIcon />}
        component={Link}
        to="/about-us"
        sx={{ mb: 3 }}
      >
        Geri Dön
      </Button>

      <Box textAlign="center">
        <Avatar 
          sx={{ 
            width: 150, 
            height: 150, 
            margin: '0 auto 20px',
            fontSize: '3rem'
          }}
        >
          EA
        </Avatar>
        
        <Typography variant="h3" gutterBottom>
          Evrim Aluç
        </Typography>
        
        <Typography variant="h5" color="primary" gutterBottom>
          Backend Geliştirici
        </Typography>
        
        <Typography variant="body1" paragraph sx={{ maxWidth: 600, margin: '0 auto' }}>
          Uzmanlık alanları: Java, Spring Boot, Database Management, Microservices
        </Typography>
      </Box>
    </Box>
  );
};

export default EvrimAluc;