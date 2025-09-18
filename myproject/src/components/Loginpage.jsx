import React from 'react';
import './Loginpage.css';

function Loginpage() {
  return (
    <div className="page-container">
      <div className="login-box">
        <h1 className="title">Login</h1>
        <form>
          <div className="input-group">
            <label>Username</label>
            <input type="text" placeholder="Enter your username" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div className="button-group">
            <button type="submit" className="btn login-btn">Login</button>
            <button type="reset" className="btn reset-btn">Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Loginpage;
