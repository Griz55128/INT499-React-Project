// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import StreamList from './StreamList';
import Movies from './Movies';
import Cart from './Cart';
import About from './About';
import Profile from './Profile';
import Favorites from './Favorites';
import Logout from './Logout';
import Login from './Login';
import './styles.css';

// Replace with your Google Client ID
const GOOGLE_CLIENT_ID = '884788015736-nciiqc0fkctod7mvntvr2f9cm5ie2jj3.apps.googleusercontent.com';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem('google_token')
  );

  if (!isLoggedIn) {
    return (
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <Login setIsLoggedIn={setIsLoggedIn} />
      </GoogleOAuthProvider>
    );
  }

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <Router>
        <Routes>
          <Route path="/" element={<StreamList />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/logout" element={<Logout setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
