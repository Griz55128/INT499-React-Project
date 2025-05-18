// About.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
	const navigate = useNavigate();
  return (
    <div className="page">
      <h1>About</h1>
      {/*<p>This page will be built in Week 5.</p>*/}
	   <button className="nav-button" onClick={() => navigate('/')}>
	  Home
	  </button>
    </div>
  );
}

export default About;
