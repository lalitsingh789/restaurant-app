import React, { useEffect, useState } from 'react';

function UpdateReservation({ id, setUpdateId, setReservations }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    requests: ''
  });

  useEffect(() => {
    fetch(`http://localhost:5000/api/reservation`)
      .then(res => res.json())
      .then(data => {
        const existing = data.reservations.find(r => r._id === id);
        if (existing) setFormData(existing);
      });
  }, [id]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/reservation/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await res.json();
      if (result.success) {
        setReservations(prev =>
          prev.map(r => (r._id === id ? result.updatedReservation : r))
        );
        setUpdateId(null);
      } else {
        alert("Update failed.");
      }
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3>Update Reservation</h3>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
      <input name="date" type="date" value={formData.date} onChange={handleChange} />
      <input name="time" type="time" value={formData.time} onChange={handleChange} />
      <input name="guests" type="number" value={formData.guests} onChange={handleChange} />
      <textarea name="requests" placeholder="Requests" value={formData.requests} onChange={handleChange} />
      <br />
      <button onClick={handleUpdate}>Save</button>
      <button onClick={() => setUpdateId(null)}>Cancel</button>
    </div>
  );
}

export default UpdateReservation;
