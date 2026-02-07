import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Başlangıçta giriş yapılmamış

  // İleride burası SQL veritabanına bağlanacak
  const login = () => {
    setUser({ 
      id: 1, 
      name: "Admin User", 
      email: "admin@tuievolution.com",
      role: "admin" 
    });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);