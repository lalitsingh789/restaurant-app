const userModel = require("../models/userModel");

const userController = {
  // POST /api/reservation
  addReservation: async (req, res) => {
    try {
      const { name, email, phone, date, time, guests, requests } = req.body;
      if (!name || !email || !phone || !date || !time || !guests) {
        return res.status(400).json({ success: false, message: "All fields except special requests are required" });
      }

      const reservation = await userModel.addReservation({
        name,
        email,
        phone,
        date,
        time,
        guests,
        requests,
      });

      res.status(201).json({ success: true, message: "Reservation submitted successfully", reservation });
    } catch (error) {
      console.error("Reservation error:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  },

  // GET /api/reservation or /api/reservation?email=someone@example.com
  getReservations: async (req, res) => {
    try {
      const { email } = req.query;

      const reservations = email
        ? await userModel.getReservationsByEmail(email)
        : await userModel.getAllReservations();

      res.status(200).json({ success: true, reservations });
    } catch (error) {
      console.error("Get reservations error:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  }
};

module.exports = userController;
