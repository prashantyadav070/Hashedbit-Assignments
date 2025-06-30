import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieList from './components/movielist';
import MovieDetails from './components/moviedetails';
import BookingForm from './components/bookingform';
import BookingSuccess from './components/bookingsuccess';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/book/:id" element={<BookingForm />} />
      <Route path="/success" element={<BookingSuccess />} />
    </Routes>
  );
}

export default App; // ✅ Ye line honi zaroori hai
