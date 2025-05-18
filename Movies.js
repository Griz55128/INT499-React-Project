// Movies.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Movies() {
	const navigate = useNavigate();
	return (
    <div className="page">
      <h1>Movies</h1>
      {/*<p>This page will be built in Week 4.</p>*/}
	  <button className="nav-button" onClick={() => navigate('/')}>
	  Home
	  </button>
    </div>
  );
}

export default Movies;
