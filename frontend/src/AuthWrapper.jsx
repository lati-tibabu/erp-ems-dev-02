import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthWrapper = ({ children }) => {
  const navigate = useNavigate();

  const handleTokenExpiration = () => {
    // Clear LocalStorage
    localStorage.removeItem('jwt');
    localStorage.removeItem('jwtExpiration');

    // Redirect to login
    navigate('/auth/login');
  };

  useEffect(() => {
    const storedExpiration = localStorage.getItem('jwtExpiration');
    if (storedExpiration) {
      const expirationTime = new Date(parseInt(storedExpiration));
      if (expirationTime < new Date()) {
        handleTokenExpiration();
      }
    }
  }, []); // Run this effect once on mount

  return children;
};

export default AuthWrapper;
