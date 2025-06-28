import React from "react";
import { Link } from "react-router-dom";
// adjust path if needed

function HomePage() {
  return (
    <div className="homepage-root">
      {/* Special Offer Banner */}
      <div className="homepage-playbook">
        <span className="homepage-playbook-badge">SEASONAL</span>
        <span className="homepage-playbook-text">
          Try Our Chef's Summer Tasting Menu - Limited Availability. Reserve Now &rarr;
        </span>
      </div>

      {/* Header */}
      <header className="homepage-header">
        <div className="homepage-logo">
          <span role="img" aria-label="logo">🍴</span>
          <span className="homepage-logo-text">Epicure</span>
        </div>
        <nav className="homepage-nav">
          <span>Our Story</span>
          <Link to="/menu">Menu</Link>
          <span>Private Dining</span>
          <Link to="/about">About</Link>
          <Link to="/BookingHistory">Events</Link>
          <span>Gift Cards</span>
        </nav>
        <div className="homepage-header-links">
          <span>Gallery</span>
          <span>Reviews</span>
          <span>Contact</span>
          <Link to="/reservation">
            <button className="homepage-trial-btn">RESERVE TABLE</button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="homepage-hero">
        <div className="homepage-badge">
          FROM THE TEAM BEHIND <span className="homepage-badge-code">MICHELIN-STARRED KITCHENS</span>
          <span className="homepage-badge-github" role="img" aria-label="quality">🌟</span>
        </div>
        <h1 className="homepage-title">
          Reimagine <br /> culinary excellence
        </h1>
        <p className="homepage-desc">
          Epicure redefines modern dining through hyper-local ingredients and innovative techniques. 
          Experience the harmony of farm-to-table freshness and avant-garde culinary artistry.
        </p>
        <div className="homepage-cta">
  <Link to="/menu" className="homepage-cta-main">EXPLORE MENU &rarr;</Link>
  <Link to="/reservation" className="homepage-cta-secondary">BOOK EXPERIENCE &rarr;</Link>
</div>
      </main>

      {/* Reservation Form Section */}
      
    </div>
  );
}

export default HomePage;
