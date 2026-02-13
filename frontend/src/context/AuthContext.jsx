import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Hem Local hem Session storage kontrol edilir
    const localUser = localStorage.getItem('user');
    const sessionUser = sessionStorage.getItem('user');
    
    // Eğer Remember Me yapıldıysa local'den, yoksa session'dan gelir
    const savedUser = localUser || sessionUser;

    try {
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (e) {
      return null;
    }
  });

  // Login fonksiyonu artık "rememberMe" parametresi alıyor
  const login = (userData, rememberMe) => {
    setUser(userData);
    if (rememberMe) {
      // 30 Günlük Hatırlama (LocalStorage kalıcıdır, manuel silinmedikçe kalır)
      localStorage.setItem('user', JSON.stringify(userData));
    } else {
      // Sadece tarayıcı açıkken hatırla
      sessionStorage.setItem('user', JSON.stringify(userData));
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);