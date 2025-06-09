import React from 'react';
import { useNavigate } from 'react-router-dom';
import './profile.css';

function Profile() {
  const navigate = useNavigate();

  return (
    <div className="profile-center-container">
      <div className="profile-page">
        <h1>John Doe</h1>
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="John Doe"
          className="profile-avatar"
        />
        <p><strong>Email:</strong> johndoe@example.com</p>
        <p><strong>Subscription:</strong> Premium Plan</p>
        <p><strong>Favorite Genres:</strong> Action, Sci-Fi, Drama</p>
        <button
          className="nav-button-profile"
          onClick={() => navigate('/')}
        >
          Home
        </button>
      </div>
    </div>
  );
}

export default Profile;
