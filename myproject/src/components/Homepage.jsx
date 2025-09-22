import React from 'react'
import './Homepage.css';

function Homepage() {
  return (
    <div className="card text-center">
  <div className="card-header">
    <ul className="nav nav-pills card-header-pills">
      <li className="nav-item">
       <button type="button" class="btn btn-light">Add blog</button>
      </li>
      <li className="nav-item">
       <button type="button" class="btn btn-light">Edit blog</button>
      </li>
      <li className="nav-item">
        <button type="button" class="btn btn-light">View blog</button>
      </li>
    </ul>
       <span className="header-title">Homepage</span>
  </div>
  <div className="card-body">
    <h1>Explore Dream Discover</h1>
     

    
  </div>
</div>
  )
}

export default Homepage