import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import movies from '../data';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <p>Movie not found</p>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} />
      <p>{movie.description}</p>
      <button onClick={() => navigate(`/book/${movie.id}`)}>Book Seat</button>
    </div>
  );
};

export default MovieDetails;
