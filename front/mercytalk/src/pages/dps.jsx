import React from 'react';
import "./index.css";
import { Link } from 'react-router-dom';

const DPSPage = () => {
  // Lista de personajes de support
  const dpsCharacters = [
    { name: 'ashe', image: '/images/ashe.png', path: '/soon' },
    { name: 'bastion', image: '/images/bastion.png', path: '/soon' },
    { name: 'cassidy', image: '/images/cassidy.png', path: '/soon' },
    { name: 'echo', image: '/images/echo.png', path: '/soon' },
    { name: 'genji', image: '/images/genji.png', path: '/soon' },
    { name: 'hanzo', image: '/images/hanzo.png', path: '/soon' },
    { name: 'junkrat', image: '/images/junkrat.png', path: '/soon' },
    { name: 'mei', image: '/images/mei.png', path: '/soon' },
    { name: 'pharah', image: '/images/pharah.png', path: '/soon' },
    { name: 'reaper', image: '/images/reaper.png', path: '/soon' },
    { name: 'sojourn', image: '/images/soujorn.png', path: '/soon' },
    { name: 'soldier76', image: '/images/soldier76.png', path: '/soon' },
    { name: 'sombra', image: '/images/sombra.png', path: '/soon' },
    { name: 'symmetra', image: '/images/symmetra.png', path: '/soon' },
    { name: 'tobjorn', image: '/images/tobjorn.png', path: '/soon' },
    { name: 'tracer', image: '/images/tracer.png', path: '/soon' },
    { name: 'widowmaker', image: '/images/widowmaker.png', path: '/soon' },

  ];

  return (
    <div className="flex flex-col min-h-screen bg-dps">
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

      {/* Tabla de personajes de tanque */}
      <main className="flex flex-grow items-center justify-center w-full">
      <div className="flex-grow flex items-center justify-center p-8">
        <table className="table-auto bg-white shadow-lg rounded-lg">
          <thead>
            <tr>
              <th className="px-4 py-2">DPS Characters</th>
            </tr>
          </thead>
          <tbody className="grid grid-cols-3 gap-4 p-4">
            {dpsCharacters.map((character, index) => (
              <tr key={index}>
                <td className="flex justify-center">
                  <Link to={character.path}>
                    <img
                      src={character.image}
                      alt={character.name}
                      className="w-24 h-24 object-cover rounded-lg transition-transform duration-200 transform hover:scale-110"
                    />
                    <span className="absolute bottom-0 left-0 right-0 bg-gray-800 text-white text-center py-1 opacity-0 transition-opacity duration-200 hover:opacity-100">
                    {character.name} {/* Mostrar el nombre del personaje */}
                    </span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </main>
    </div>
  );
};

export default DPSPage;