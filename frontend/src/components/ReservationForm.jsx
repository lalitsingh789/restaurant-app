import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegCalendarAlt, FaRegClock } from 'react-icons/fa';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    requests: '', // <-- use 'requests' to match backend
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const dateRef = useRef();
  const timeRef = useRef();
  const navigate = useNavigate();

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const res = await fetch('http://localhost:5000/api/reservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        navigate('/');
      } else {
        setMessage(data.message || 'Reservation failed.');
      }
    } catch (error) {
      setMessage('Error! Try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="new-reservation-wrapper">
      <form className="new-reservation-form" onSubmit={handleSubmit}>
        <h1>🪑 Table Reservation</h1>
        <div className="form-grid">
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleInput} required />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleInput} required />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInput} required />

          <div className="with-icon">
            <input type="date" name="date" placeholder='Date' value={formData.date} ref={dateRef} onChange={handleInput} required />
           
          </div>

          <div className="with-icon">
            <input type="time" name="time" placeholder='Timing' value={formData.time} ref={timeRef} onChange={handleInput} required />
            
          </div>

          <input type="number" name="guests" placeholder="No. of Guests" min="1" value={formData.guests} onChange={handleInput} required />
        </div>

        <textarea
          name="requests"
          placeholder="Special notes or requests"
          value={formData.requests}
          onChange={handleInput}
        />

        {message && <div className="form-error">{message}</div>}

        <button type="submit" disabled={loading}>
          {loading ? 'Reserving...' : 'Book Now'}
        </button>
      </form>

      <div className="summary-box">
        <h3>📅 Quick Info</h3>
        <ul>
          <li>Open Daily: 10AM - 10PM</li>
          <li>Phone: (555) 123-4567</li>
          <li>Email: book@platepalace.com</li>
        </ul>
      </div>
    </div>
  );
};

export default ReservationForm;
