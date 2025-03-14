import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Home() {
  const roles = [
    { name: "Tanque", image: "/images/tank.png", path: "/tank" },
    { name: "DPS", image: "/images/dps.png", path: "/dps" },
    { name: "Soporte", image: "/images/support.png", path: "/support" },
  ];

  return (
    <div className="relative w-full h-screen flex flex-col items-center overflow-hidden">
      {/* Video de fondo */}
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover -z-10">
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>

      {/* Navbar más grande */}
      <nav className="navbar-container">
              <div className="navbar-links">
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/heroes" className="nav-item">Héroes</Link>
                <Link to="/login" className="nav-item">Login</Link>
                <Link to="/register" className="nav-item">Register</Link>
              </div>
            </nav>
      {/* Contenedor de imágenes más grandes */}
      <main className="flex flex-grow items-center justify-center w-full">
        <div className="relative flex items-center justify-center bg-gray-800/40 backdrop-blur-md p-10 rounded-lg shadow-xl">
          {roles.map((role, index) => (
            <div key={index} className="relative flex items-center justify-center mx-4">
              <Link to={role.path} className="focus:outline-none">
                <img
                  src={role.image}
                  alt={role.name}
                  className="w-[300px] h-[300px] object-cover rounded-lg shadow-lg border-0 border-gray-800 cursor-pointer hover:scale-110 transition-transform duration-300"
                />
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
