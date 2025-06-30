import React from 'react';
import { useLocation } from 'react-router-dom';

const BookingSuccess = () => {
  const { state } = useLocation();

  if (!state) return <p>No booking data found</p>;

  return (
    <div>
      <h2>Booking Confirmed!</h2>
      <p><strong>Booking ID:</strong> {state.bookingId}</p>
      <p><strong>Name:</strong> {state.name}</p>
      <p><strong>Email:</strong> {state.email}</p>
      <p><strong>Mobile:</strong> {state.mobile}</p>
    </div>
  );
};

export default BookingSuccess;
