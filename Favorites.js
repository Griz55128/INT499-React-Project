// Favorites.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Favorites() {
	const navigate = useNavigate();
	return (
    <div className="page">
      <h1>Favorites</h1>
      {/*<p>This page will be built in Week 4.</p>*/}
	  <button className="nav-button" onClick={() => navigate('/')}>
	  Home
	  </button>
    </div>
  );
}

export default Favorites;
