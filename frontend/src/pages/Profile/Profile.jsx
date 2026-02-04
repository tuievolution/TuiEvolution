// src/pages/Profile/Profile.jsx
import { Typography, Box, Avatar, Paper, Grid } from '@mui/material';

const Profile = () => {
  return (
    <Box>
      <Typography variant="h3" gutterBottom align="center">
        Profil
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Avatar 
              sx={{ 
                width: 120, 
                height: 120, 
                margin: '0 auto 20px',
                fontSize: '2.5rem'
              }}
            >
              K
            </Avatar>
            <Typography variant="h5" gutterBottom>
              Kullanıcı
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Son giriş: Bugün
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Bilgiler
            </Typography>
            <Typography variant="body1" paragraph>
              Kullanıcı profili sayfası. Buraya kişisel bilgiler, ayarlar ve diğer özellikler eklenecek.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;