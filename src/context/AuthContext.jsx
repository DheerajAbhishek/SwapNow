import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('mockToken');
    const storedUser = localStorage.getItem('mockUser');

    if (token) {
      setIsAuthenticated(true);

      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch {
          setUser({ name: 'User' });
        }
      } else {
        setUser({ name: 'User' });
      }
    }
  }, []);

  const login = (userData) => {
    localStorage.setItem('mockToken', 'mock-token-xyz');
    localStorage.setItem('mockUser', JSON.stringify(userData || {}));
    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('mockToken');
    localStorage.removeItem('mockUser');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
