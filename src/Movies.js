import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './movies.css';

const API_KEY = '643e67f6d76fe73a135c78592c718194'; // <-- Replace with your actual TMDB API key
const BASE_URL = 'https://api.themoviedb.org/3';

export default function Movies() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  // Initialize results from localStorage if available
  const [results, setResults] = useState(() => {
    const saved = localStorage.getItem('lastMovieResults');
    return saved ? JSON.parse(saved) : [];
  });
  const [error, setError] = useState(null);

  // Persist results to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('lastMovieResults', JSON.stringify(results));
  }, [results]);

  // Handle search form submission
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;
    try {
      const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const data = await response.json();
      setResults(data.results || []);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="movies-container" style={{ padding: 24 }}>
      <h2>Movie Search (Powered by TMDB)</h2>
	  <button className="back-btn" onClick={() => navigate(-1)}>
        &larr; Back
      </button>
      <form onSubmit={handleSearch} style={{ marginBottom: 20 }}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search movies..."
          style={{ padding: 8, width: '300px', marginRight: 8 }}
        />
        <button type="submit">Search</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
        {results.length === 0 && <p>No results found.</p>}
        {results.map(movie => (
          <div key={movie.id} style={{ width: 150 }}>
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                style={{ width: '100%', borderRadius: 8 }}
              />
            ) : (
              <div
                style={{
                  width: '100%',
                  height: 225,
                  backgroundColor: '#ccc',
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                No Image
              </div>
            )}
            <h4>{movie.title}</h4>
            <p>Release: {movie.release_date || 'N/A'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
