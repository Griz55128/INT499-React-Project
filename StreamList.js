import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';





function StreamList() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      setHistory(prev => [input, ...prev]);
      setInput('');
    }
  };
  
  // Array of card data, each with an icon class
  const cards = [
    { id: 1, icon: 'fa-solid fa-diamond', label: 'Top Titles' },
    { id: 2, icon: 'fa-solid fa-film', label: 'Coming Soon' },
    { id: 3, icon: 'fa-solid fa-cart-shopping', label: 'Out this Week' },
    { id: 4, icon: 'fa-solid fa-circle-question', label: 'Blast in the Past' },
  ];

  return (
    <div className="streamlist-container">
      <div className="top-controls">
        <Link to="/Profile" className="profile-button">Profile</Link>
        <Link to="/cart" className="profile-button">Cart</Link>
        <Link to="/Logout" className="profile-button">Logout</Link>
      </div>

      <div className="navbar">
        <Link to="/favorites" className="nav-button">Favorites</Link>
        <Link to="/movies" className="nav-button">Movies</Link>
        <div className="search-container">
  <form onSubmit={handleSubmit} className="search-form">
    <span className="search-label">Search:</span>
    <input
      type="text"
      value={input}
      onChange={e => setInput(e.target.value)}
      className="search-input"
      placeholder=""
    />
  </form>
  {history.length > 0 && (
    <div className="search-history">
      <strong>Search History:</strong>
      <ul>
        {history.map((term, idx) => (
          <li key={idx}>{term}</li>
        ))}
      </ul>
    </div>
  )}
</div>

        <Link to="/about" className="nav-button">About</Link>
      </div>
	  
      <div className="card-grid">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <i className={card.icon}></i>
            <span className="card-label">{card.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StreamList;
