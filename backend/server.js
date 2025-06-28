const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
const userController = require('./controllers/userController');

app.use(cors());
app.use(express.json());

// Routes
app.post('/api/reservation', userController.addReservation);
app.get('/api/reservation', userController.getReservations);
app.put('/api/reservation/:id', async (req, res) => {
  try {
    const updatedReservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.json({ success: true, updatedReservation });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Update failed', error });
  }
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
