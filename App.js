// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import StreamList from './StreamList';
import Movies from './Movies';
import Cart from './Cart';
import About from './About';
import Profile from './Profile';
import Favorites from './Favorites';
import Logout from './Logout';
import './styles.css';
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=diamond" />

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StreamList />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
		<Route path="/profile" element={<Profile />} />
		<Route path="/favorites" element={<Favorites />} />
		<Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;

