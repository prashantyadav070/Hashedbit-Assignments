import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingId = Math.floor(Math.random() * 100000);
    navigate('/success', {
      state: { name, email, mobile, bookingId }
    });
  };

  return (
    <div>
      <h2>Book Your Seat</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br /><br />
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />
        <input
          type="tel"
          placeholder="Mobile"
          required
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        /><br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookingForm;
