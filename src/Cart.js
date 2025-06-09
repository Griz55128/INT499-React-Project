import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './cart.css';

// Sample data for demonstration
const initialMovies = [
  { id: 1, title: "Inception", price: 4.99 },
  { id: 2, title: "Interstellar", price: 3.99 },
];

const subscriptionPlan = {
  name: "Premium Subscription",
  description: "Unlimited movies, HD streaming, cancel anytime.",
  price: 12.99,
};

// Popular movies for background carousel
const popularMovies = [
  { id: 1, title: "The Dark Knight", image: "https://image.tmdb.org/t/p/w780/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg" },
  { id: 2, title: "Avengers: Endgame", image: "https://image.tmdb.org/t/p/w780/or06FN3Dka5tukK1e9sl16pB3iy.jpg" },
  { id: 3, title: "Parasite", image: "https://image.tmdb.org/t/p/w780/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg" },
  { id: 4, title: "Joker", image: "https://image.tmdb.org/t/p/w780/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" },
  { id: 5, title: "Spider-Man: No Way Home", image: "https://image.tmdb.org/t/p/w780/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg" },
];

function Cart() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState(initialMovies);
  const [hasSubscription, setHasSubscription] = useState(true);

  // Carousel state
  const [bgIndex, setBgIndex] = useState(0);

  // Cycle background images every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % popularMovies.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const removeMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const subtotal =
    movies.reduce((sum, movie) => sum + movie.price, 0) +
    (hasSubscription ? subscriptionPlan.price : 0);

  return (
    <div className="cart-background-container">
      {/* Rotating Poster Backgrounds (left and right) */}
      {["left", "right"].map((side, i) => (
        <div
          key={side}
          className={`bg-poster bg-poster-${side}`}
          style={{
            backgroundImage: `url(${popularMovies[(bgIndex + i) % popularMovies.length].image})`,
          }}
        />
      ))}

      {/* Cart Content */}
      <div className="cart-page">
        <h1>🛒 Your Cart</h1>
        <section className="cart-section">
          <h2>Movies</h2>
          {movies.length === 0 ? (
            <p>No movies in cart.</p>
          ) : (
            <ul className="cart-movie-list">
              {movies.map((movie) => (
                <li key={movie.id} className="cart-movie-item">
                  <span>{movie.title}</span>
                  <span>${movie.price.toFixed(2)}</span>
                  <button onClick={() => removeMovie(movie.id)} className="remove-btn">
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
        <section className="cart-section">
          <h2>Subscription</h2>
          <div className="cart-subscription">
            <input
              type="checkbox"
              checked={hasSubscription}
              onChange={() => setHasSubscription(!hasSubscription)}
              id="subscription-toggle"
            />
            <label htmlFor="subscription-toggle">
              <strong>{subscriptionPlan.name}</strong> — ${subscriptionPlan.price.toFixed(2)}
              <br />
              <small>{subscriptionPlan.description}</small>
            </label>
          </div>
        </section>
        <hr />
        <div className="cart-total">
          <span>Total:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <button className="checkout-button" disabled={subtotal === 0}>
          Checkout
        </button>
        <button className="nav-button-cart" onClick={() => navigate('/')}>
          Home
        </button>
      </div>
    </div>
  );
}

export default Cart;
