import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './Landingpage.css' 
import { Link } from "react-router-dom";

function Landingpage() {
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">Travel Blog</a>
         <Link to="/login" ><button className="btn btn-outline-primary">Login</button></Link>
        </div>
      </nav>

      
      <section className="hero">
        <div className="hero-content text-center text-white">
          <h1 className="display-3 fw-bold">Explore the World with Us</h1>
          <p className="lead">Discover hidden places, amazing cultures, and unforgettable journeys.</p>

        </div>
      </section>

    
      <section id="blogs" className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Latest Adventures</h2>
          <p className="text-muted">Check out our travel stories, guides, and tips to inspire your next journey.</p>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img src='/beach.jpeg' className="card-img-top" alt="Beach" />
                <div className="card-body">
                  <h5 className="card-title">Beautiful Beaches</h5>
                  <p className="card-text">Relax and enjoy the sound of the waves at the world’s most beautiful beaches.</p>
                  <a href="#" className="btn btn-outline-primary">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img src='\Mountain.jpeg' className="card-img-top" alt="Mountains" />
                <div className="card-body">
                  <h5 className="card-title">Majestic Mountains</h5>
                  <p className="card-text">Adventure through breathtaking mountain landscapes and trails.</p>
                  <a href="#" className="btn btn-outline-primary">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img src='\city.jpeg' className="card-img-top" alt="City" />
                <div className="card-body">
                  <h5 className="card-title">City Escapes</h5>
                  <p className="card-text">Discover vibrant cities full of culture, food, and unforgettable experiences.</p>
                  <a href="#" className="btn btn-outline-primary">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Landingpage
