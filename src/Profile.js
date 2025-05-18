// Profile.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
	const navigate = useNavigate();
  return (
    <div className="page">
      <h1>Profile</h1>
      <button className="nav-button" onClick={() => navigate('/')}>
        Home
      </button>
    </div>
  );
}

export default Profile;

