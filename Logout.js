// Logout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
	const navigate = useNavigate();
	return (
    <div className="page">
      <h1>Welcome to Streamlist</h1>
      {/*<p>This page will be built in Week 4.</p>*/}
	  <button className="nav-button" onClick={() => navigate('/')}>
	  Login
	  </button>
    </div>
  );
}

export default Logout;
