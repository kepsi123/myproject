import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">

      {/* Hero Section */}
      <section className="about-hero text-center text-white d-flex flex-column justify-content-center align-items-center">
        <h1 className="display-4 fw-bold mb-3 animate-fade-in">About Our Travel Blog</h1>
        <p className="lead animate-fade-in-delay">
          Inspiring wanderlust and connecting travelers around the globe 🌍
        </p>
      </section>

      {/* About Content */}
      <section className="about-content container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img src="/abouttravel.jpg" alt="About Us" className="img-fluid rounded shadow-lg" />
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold mb-3">Who We Are</h2>
            <p className="text-muted">
              We are a team of passionate explorers, photographers, and storytellers dedicated to sharing the beauty of the world with you.
              Our mission is to inspire adventure, encourage responsible travel, and connect cultures through real experiences.
            </p>
            <p className="text-muted">
              Whether you’re planning your first trip or your hundredth, our stories, tips, and guides will help you make the most of your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section text-center py-5">
        <h2 className="fw-bold mb-4">Get in Touch</h2>
        <p className="text-muted mb-5">
          Have questions, suggestions, or want to collaborate? We’d love to hear from you!
        </p>

        <div className="contact-info container">
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4">
              <div className="contact-card shadow-sm p-4 rounded">
                <h5>Email Us</h5>
                <p><a href="mailto:travelblog@gmail.com">travelblog@gmail.com</a></p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="contact-card shadow-sm p-4 rounded">
                <h5>Call Us</h5>
                <p><a href="tel:+919876543210">+91 98765 43210</a></p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="contact-card shadow-sm p-4 rounded">
                <h5>Follow Us</h5>
                <p>
                  <a href="#" className="social-link mx-2">Instagram</a> |
                  <a href="#" className="social-link mx-2">Facebook</a> |
                  <a href="#" className="social-link mx-2">Twitter</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
