// src/App.jsx
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container,
  Box,
  CircularProgress
} from '@mui/material';

// Lazy loading ile sayfaları yükle
const Main = lazy(() => import('./pages/Home/Main.jsx'));
const Projects = lazy(() => import('./pages/Projects/Projects.jsx'));
const AboutUs = lazy(() => import('./pages/AboutUs/AboutUs.jsx'));
const EvrimAluc = lazy(() => import('./pages/AboutUs/EvrimAluc.jsx'));
const TuanaAkyildiz = lazy(() => import('./pages/AboutUs/TuanaAkyildiz.jsx'));
const Profile = lazy(() => import('./pages/Profile/Profile.jsx'));

// Yükleme bileşeni
const Loader = () => (
  <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
    <CircularProgress />
  </Box>
);

// Ana uygulama bileşeni
function App() {
  const menuItems = [
    { path: '/', label: 'Ana Sayfa' },
    { path: '/projects', label: 'Projeler' },
    { path: '/about-us', label: 'Hakkımızda' },
    { path: '/profile', label: 'Profil' },
  ];

  return (
    <BrowserRouter>
      {/* Navigation Bar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            TUIEVOLUTION
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            {menuItems.map((item) => (
              <Button
                key={item.path}
                color="inherit"
                component={Link}
                to={item.path}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/about-us/evrim-aluc" element={<EvrimAluc />} />
            <Route path="/about-us/tuana-akyildiz" element={<TuanaAkyildiz />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Suspense>
      </Container>
    </BrowserRouter>
  );
}

export default App;