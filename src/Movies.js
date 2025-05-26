// Movies.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './movies.css';

// Helper to generate random movies
function getRandomMovies(count = 50) {
  const sampleTitles = [
    "The Last Dawn", "Shadow Realm", "Infinite Skies", "Neon Nights", "Lost Horizon",
    "Echoes of Time", "Quantum Drift", "Celestial", "Redemption Road", "The Forgotten City",
    "Silent Storm", "Nightfall", "Solaris", "The Outpost", "Blackout",
    "Zero Hour", "Obsidian", "The Arrival", "Aftermath", "Ironclad",
    "Starlight", "Dark Matter", "Ghost Protocol", "The Heist", "Wildfire",
    "Blue Moon", "Mirage", "The Crossing", "Pulse", "Vortex",
    "Gravity", "Frostbite", "The Divide", "Specter", "The Pact",
    "Genesis", "The Signal", "Nova", "Reckoning", "The Maze",
    "Revolt", "The Hunt", "Phantom", "The Escape", "Lifeline",
    "The Grid", "The Summit", "The Cure", "The Rift", "The Return"
  ];
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: sampleTitles[i % sampleTitles.length] + ' ' + (Math.floor(Math.random() * 100) + 1),
    poster: `https://picsum.photos/seed/movie${i}/300/450`
  }));
}

const MOVIES = getRandomMovies(50);

export default function Movies() {
  const navigate = useNavigate();

  // Carousel state
  const [startIdx, setStartIdx] = useState(0);
  const visibleCount = 6; // Number of posters visible at once

  const handlePrev = () => {
    setStartIdx(idx => Math.max(0, idx - visibleCount));
  };

  const handleNext = () => {
    setStartIdx(idx => Math.min(MOVIES.length - visibleCount, idx + visibleCount));
  };

  return (
    <div className="movies-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        &larr; Back
      </button>
      <h1 className="movies-title">Browse Movies</h1>
      <div className="carousel-container">
        <button
          className="carousel-arrow left"
          onClick={handlePrev}
          disabled={startIdx === 0}
        >
          &#8249;
        </button>
        <div className="carousel">
          {MOVIES.slice(startIdx, startIdx + visibleCount).map(movie => (
            <div className="carousel-item" key={movie.id}>
              <img src={movie.poster} alt={movie.title} className="carousel-poster" />
              <div className="carousel-caption">{movie.title}</div>
            </div>
          ))}
        </div>
        <button
          className="carousel-arrow right"
          onClick={handleNext}
          disabled={startIdx >= MOVIES.length - visibleCount}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}

