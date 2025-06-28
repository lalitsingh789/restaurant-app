import React from "react";

const About = () => {
  return (
    <section className="about" style={{ padding: "4rem 0" }}>
      <div className="container">
        <div className="about-content">
          {/* Left Section - Story and Features */}
          <div className="about-text">
            <h2 className="section-title">Our Story</h2>
            <p>
              Founded in 2010 by renowned chef Maria Rossi, Plate to Palace began as a small
              family-owned bistro dedicated to bringing authentic flavors and culinary
              traditions to life.
            </p>
            <p>
              Over the years, our passion for exceptional ingredients and innovative cooking
              techniques has transformed our humble establishment into one of the city's most
              celebrated dining destinations.
            </p>
            <p>
              Today, we continue to honor our commitment to culinary excellence, sustainable
              practices, and creating memorable dining experiences for our guests. Every dish
              tells a story — a story of tradition, innovation, and our undying love for food.
            </p>

            <div className="about-features">
              <div className="feature">
                <div className="icon-circle">🌟</div>
                <div>
                  <h3>Culinary Excellence</h3>
                  <p>Award-winning chefs creating memorable dishes</p>
                </div>
              </div>

              <div className="feature">
                <div className="icon-circle">🌱</div>
                <div>
                  <h3>Sustainable Sourcing</h3>
                  <p>Local, seasonal ingredients from trusted farms</p>
                </div>
              </div>

              <div className="feature">
                <div className="icon-circle">🏆</div>
                <div>
                  <h3>Memorable Experiences</h3>
                  <p>Exceptional service and a warm atmosphere</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Images */}
          <div className="about-images">
            <div className="image-column">
              <img
                src="https://images.unsplash.com/photo-1498936178812-4b2e558d2937"
                alt="Restaurant interior"
                className="about-image"
              />
              <img
                src="https://images.unsplash.com/photo-1498936178812-4b2e558d2937"
                alt="Chef preparing food"
                className="about-image"
              />
            </div>
            <div className="image-column" style={{ marginTop: "2rem" }}>
              <img
                src="https://images.unsplash.com/photo-1498936178812-4b2e558d2937"
                alt="Signature dish"
                className="about-image"
              />
              <img
                src="https://images.unsplash.com/photo-1498936178812-4b2e558d2937"
                alt="Restaurant exterior"
                className="about-image"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="about-cta">
          <h2>Experience the Plate to Palace Difference</h2>
          <p>
            Join us for an unforgettable culinary journey. Whether it's a romantic dinner, family
            gathering, or special celebration, we're dedicated to making every moment special.
          </p>
          <div className="cta-buttons">
            <a href="/reservation" className="btn-outline">Make a Reservation</a>
            <a href="/menu" className="btn-outline">View Our Menu</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
