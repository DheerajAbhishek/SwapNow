import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check local storage or AWS Cognito tokens here.
    // For now, simple mock based on local storage
    const token = localStorage.getItem('mockToken');
    if (token) {
      setIsAuthenticated(true);
      setUser({ name: 'User' });
    }
  }, []);

  const login = (userData) => {
    localStorage.setItem('mockToken', 'mock-token-xyz');
    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('mockToken');
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
