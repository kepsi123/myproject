// src/pages/Landingpage.jsx
import React from "react";
import Navbar from "../components/Navbar";
import "./Landingpage.css";

function Landingpage() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content text-center text-white">
          <h1 className="display-3 fw-bold">Explore the World with Us</h1>
          <p className="lead">
            Discover hidden places, amazing cultures, and unforgettable journeys.
          </p>
        </div>
      </section>

      {/* Latest Adventures */}
      <section id="blogs" className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Latest Adventures</h2>
          <p className="text-muted mb-4">
            Check out our travel stories, guides, and tips to inspire your next journey.
          </p>

          <div className="card-row">
            <div className="card shadow-sm">
              <img src="/beach.jpeg" alt="Beach" />
              <div className="card-body">
                <h5 className="card-title">Beautiful Beaches</h5>
                <p className="card-text">
                  Relax and enjoy the sound of the waves at the world’s most beautiful beaches.
                </p>
                <a href="#" className="btn btn-outline-primary">Read More</a>
              </div>
            </div>

            <div className="card shadow-sm">
              <img src="/Mountain.jpeg" alt="Mountains" />
              <div className="card-body">
                <h5 className="card-title">Majestic Mountains</h5>
                <p className="card-text">
                  Adventure through breathtaking mountain landscapes and trails.
                </p>
                <a href="#" className="btn btn-outline-primary">Read More</a>
              </div>
            </div>

            <div className="card shadow-sm">
              <img src="/city.jpeg" alt="City" />
              <div className="card-body">
                <h5 className="card-title">City Escapes</h5>
                <p className="card-text">
                  Discover vibrant cities full of culture, food, and unforgettable experiences.
                </p>
                <a href="#" className="btn btn-outline-primary">Read More</a>
              </div>
            </div>

            <div className="card shadow-sm">
              <img src="/forest.jpg" alt="Forest" />
              <div className="card-body">
                <h5 className="card-title">Mystic Forests</h5>
                <p className="card-text">
                  Walk through serene forests and connect with nature.
                </p>
                <a href="#" className="btn btn-outline-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landingpage;
