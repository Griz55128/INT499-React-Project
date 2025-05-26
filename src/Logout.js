import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout({ setIsLoggedIn }) {
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(false);   // Log out the user
    navigate('/');          // Redirect to login or home
  }, [setIsLoggedIn, navigate]);

  return null; // Don't render anything
}

export default Logout;

