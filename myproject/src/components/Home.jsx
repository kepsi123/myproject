import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="home-hero text-center text-white d-flex flex-column justify-content-center align-items-center">
        <h1 className="display-3 fw-bold mb-3 animate-fade-in">Discover. Travel. Live.</h1>
        <p className="lead mb-4 animate-fade-in-delay">Your next great adventure begins here 🌍</p>
        
      </section>

      {/* Popular Destinations Section */}
      <section className="home-destinations text-center py-5">
        <h2 className="fw-bold mb-4">Popular Destinations</h2>
        <p className="text-muted mb-5">Find inspiration from top-trending locations across the world.</p>

        <div className="destination-grid container">
          <div className="destination-card shadow-sm">
            <img src="/beach.jpeg" alt="Beach" />
            <h5>Maldives</h5>
            <p>Crystal-clear waters and endless sunsets await you.</p>
          </div>
          <div className="destination-card shadow-sm">
            <img src="/Mountain.jpeg" alt="Mountain" />
            <h5>Swiss Alps</h5>
            <p>Adventure through breathtaking snowy peaks.</p>
          </div>
          <div className="destination-card shadow-sm">
            <img src="/city.jpeg" alt="City" />
            <h5>Tokyo</h5>
            <p>Where tradition meets futuristic wonder.</p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="home-quote text-center py-5">
        <blockquote className="blockquote">
          <p className="mb-4">“Jobs fill your pockets, but adventures fill your soul.”</p>
          <footer className="blockquote-footer text-white">Jamie Lyn Beatty</footer>
        </blockquote>
      </section>
    </div>
  );
}

export default Home;
