import { Navigate } from 'react-router-dom';
import { CircularProgress, Box } from '@mui/material';
import { useState, useEffect } from 'react';

const PrivateRoute = ({ children, requiresAdmin = false }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Burada authentication kontrolü yapın
    // Örnek: localStorage'dan token kontrolü
    const token = localStorage.getItem('authToken');
    const userRole = localStorage.getItem('userRole');
    
    setIsAuthenticated(!!token);
    setIsAdmin(userRole === 'admin');
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!isAuthenticated) {
    // Giriş yapılmamışsa login sayfasına yönlendir
    return <Navigate to="/" />;
  }

  if (requiresAdmin && !isAdmin) {
    // Admin değilse ana sayfaya yönlendir
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;