import React from 'react';
import "./index.css";
import { Link } from 'react-router-dom';

function ComingSoon() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-Heroes">

    
    {/* Navbar */}
          <header className="navbar">
            <nav className="navbar-container">
              <div className="navbar-links">
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/heroes" className="nav-item">Héroes</Link>
                <Link to="/login" className="nav-item">Login</Link>
                <Link to="/register" className="nav-item">Register</Link>
              </div>
            </nav>
          </header>
          <div className="flex items-center justify-center flex-grow">
      <div className="login-container">
        <h1 className="text-2xl font-bold mb-6">COMING SOON</h1>
        </div>

        </div>
        </div>

  );
}

export default ComingSoon;