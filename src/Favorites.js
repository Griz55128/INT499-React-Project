import React from "react";
import { useNavigate } from "react-router-dom";
import "./favorites.css";

export default function Favorites() {
  const navigate = useNavigate();

  // Example favorites data
  const favoriteMovies = [
    {
      id: 1,
      name: "Stranger Things",
      img: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
    },
    {
      id: 2,
      name: "The Witcher",
      img: "https://image.tmdb.org/t/p/w500/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg",
    },
    {
      id: 3,
      name: "Bridgerton",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJTBx7w_dRp8xbUqvoBFGkN7iwQZEhJ23Dtw&s",
    },
    {
      id: 4,
      name: "Squid Game",
      img: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
    },
    {
      id: 5,
      name: "The Mandalorian",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh5GNQbjHXraDa7CxgIHXIK8Z1SGzGou0jZA&s",
    },
  ];

  return (
    <div className="favorites-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        &larr; Back
      </button>
      <h1>My Favorites</h1>
      <div className="titles-row">
        {favoriteMovies.map((movie) => (
          <div className="title-card" key={movie.id}>
            <img src={movie.img} alt={movie.name} className="poster-img" />
          </div>
        ))}
      </div>
    </div>
  );
}
