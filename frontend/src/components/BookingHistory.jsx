import React, { useState, useEffect } from 'react';
import UpdateReservation from './UpdateReservation';
import { FaPlaneDeparture } from 'react-icons/fa';

function BookingHistory() {
  const [reservations, setReservations] = useState([]);
  const [updateId, setUpdateId] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/reservation')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setReservations(data.reservations);
        } else {
          console.error('Fetch failed:', data.message);
        }
      })
      .catch(err => console.error('Error:', err));
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this reservation?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:5000/api/reservation/${id}`, { method: 'DELETE' });
      const result = await res.json();
      if (result.success) {
        setReservations(prev => prev.filter(r => r._id !== id));
      }
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  return (
    <div className="booking-history">
      <h2 className="title">Booking History</h2>
      <div className="ticket-list">
        {reservations.length === 0 ? (
          <p className="no-bookings">No bookings found.</p>
        ) : (
          reservations.map(res => (
            <div key={res._id} className="boarding-pass">
              <div className="boarding-pass-header">
                <span>BOARDING AIRLINES</span>
                <span>BOARDING PASS</span>
              </div>

              <div className="boarding-pass-body">
                <div className="passenger-details">
                  <p><strong>Passenger:</strong> {res.name}</p>
                  <p><strong>From:</strong> {res.email}</p>
                  <p><strong>To:</strong> {res.phone}</p>
                  <p><strong>Date:</strong> {res.date}</p>
                  <p><strong>Boarding Time:</strong> {res.time}</p>
                  <p><strong>Guests:</strong> {res.guests}</p>
                  <p><strong>Requests:</strong> {res.requests || 'None'}</p>
                </div>

                <div className="plane-icon">
                  <FaPlaneDeparture size={50} />
                </div>
              </div>

              <div className="dashed-line"></div>

              <div className="boarding-pass-footer">
                <div className="ticket-id">Ticket ID: {res._id.slice(-6).toUpperCase()}</div>
                <div className="ticket-actions">
                  <button className="update-btn" onClick={() => setUpdateId(res._id)}>Update</button>
                  <button className="delete-btn" onClick={() => handleDelete(res._id)}>Delete</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {updateId && (
        <UpdateReservation
          id={updateId}
          setUpdateId={setUpdateId}
          setReservations={setReservations}
        />
      )}
    </div>
  );
}

export default BookingHistory;
