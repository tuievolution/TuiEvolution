import { Container } from '@mui/material';
import AppRouter from './router';
import NavBar from './components/NavBar';
import { navRoutes } from './router/routes';

function App() {
  return (
    <>
      <NavBar routes={navRoutes} />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <AppRouter />
      </Container>
    </>
  );
}

export default App;