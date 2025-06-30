import React from 'react';
import movies from '../data';
import { useNavigate } from 'react-router-dom';

const MovieList = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Now Showing</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        {movies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => navigate(`/movie/${movie.id}`)}
            style={{
              cursor: 'pointer',
              backgroundColor: '#fff',
              padding: '10px',
              boxShadow: '0 0 10px rgba(0,0,0,0.1)'
            }}
          >
            <img src={movie.image} alt={movie.title} width="100%" />
            <h4>{movie.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
