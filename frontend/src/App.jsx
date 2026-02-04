import { Container } from '@mui/material';
import AppRouter from './router/index.jsx'; // index.jsx olduğundan emin olun
import NavBar from './components/NavBar.jsx';
import { navRoutes } from './router/routes.jsx';

function App() {
  return (
    // BrowserRouter AppRouter içinde olduğu için burada tekrar kullanmıyoruz
    <>
      <NavBar routes={navRoutes} />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <AppRouter />
      </Container>
    </>
  );
}

export default App;