import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {

  return (
    <div className="flex flex-col min-h-screen bg-register">
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

      {/* Contenedor de registro */}
      <div className="flex items-center justify-center flex-grow">
        <div className="login-container">
          <h1 className="text-2xl font-bold mb-6">Register</h1>

          <label className="block text-gray-700 mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="login-input"
            placeholder="Enter your username"
          />

          <label className="block text-gray-700 mb-2" htmlFor="main-role">
            Main Role
          </label>
          <select id="main-role" className="login-input mb-4">
            <option value="" disabled selected>Select your role</option>
            <option value="support">Support</option>
            <option value="tank">Tank</option>
            <option value="dps">DPS</option>
          </select>

          <label className="block text-gray-700 mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="login-input"
            placeholder="Enter your password"
          />

          <label className="block text-gray-700 mb-2" htmlFor="re-password">
            Re-Password
          </label>
          <input
            type="password"
            id="re-password"
            className="login-input"
            placeholder="Re-enter your password"
          />

          <button className="login-button">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
