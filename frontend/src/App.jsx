import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Component Imports
import HomePage from "./components/HomePage";
import MenuList from "./components/MenuList";
import ReservationForm from "./components/ReservationForm";
import About from "./components/About";
import BookingHistory from "./components/BookingHistory";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuList />} />
          <Route path="/reservation" element={<ReservationForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/BookingHistory" element={<BookingHistory />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
