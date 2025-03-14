import React from 'react';
import "./index.css";
import { Link } from 'react-router-dom';
import axios from "axios";

const LoginPage = () => {
  
  return (
    <div className="flex flex-col min-h-screen bg-login"> {/* Usa una clase CSS para el fondo */}
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

      {/* Contenedor de inicio de sesión */}
      <div className="flex items-center justify-center flex-grow">
        <div className="login-container bg-white p-8 rounded-lg shadow-lg w-96"> {/* Ajusta el ancho según sea necesario */}
          <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

          <div className="mb-4">
  <label className="block text-gray-700 mb-2" htmlFor="username">
    Username
  </label>
  <input
    type="text"
    id="username"
    className="w-full login-input border border-gray-300 p-2 rounded"
    placeholder="Enter your username"
  />
</div>

<div className="mb-4">
  <label className="block text-gray-700 mb-2" htmlFor="password">
    Password
  </label>
  <input
    type="password"
    id="password"
    className="w-full login-input border border-gray-300 p-2 rounded"
    placeholder="Enter your password"
  />
</div>
          <button className="login-button mt-4 w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-500">
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
