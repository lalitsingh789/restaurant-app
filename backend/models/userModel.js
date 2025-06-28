const connectDB = require("./db");

const userModel = {
  addReservation: async (reservationData) => {
    const db = await connectDB();
    const collection = db.collection("reservation");

    const result = await collection.insertOne({
      ...reservationData,
      createdAt: new Date(),
    });

    return { ...reservationData, _id: result.insertedId };
  },

  getReservationsByEmail: async (email) => {
    const db = await connectDB();
    const collection = db.collection("reservation");

    return await collection.find({ email }).sort({ createdAt: -1 }).toArray();
  },

  getAllReservations: async () => {
    const db = await connectDB();
    const collection = db.collection("reservation");

    return await collection.find({}).sort({ createdAt: -1 }).toArray();
  }
};

module.exports = userModel;
