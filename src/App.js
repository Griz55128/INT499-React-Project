// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import StreamList from './StreamList';
import Movies from './Movies';
import Cart from './Cart';
import About from './About';
import Profile from './Profile';
import Favorites from './Favorites';
import Logout from './Logout';
import Login from './Login'; // Import your Login component
import './styles.css';

function App() {
  // Track login status. In real apps, use a token or check localStorage/session.
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Show login page if not logged in
  if (!isLoggedIn) {
    return <Login setIsLoggedIn={setIsLoggedIn} />;
  }

  // Show the rest of the app after login
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StreamList />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/logout" element={<Logout setIsLoggedIn={setIsLoggedIn}/>} />
        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
