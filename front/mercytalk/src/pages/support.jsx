import React from 'react';
import "./index.css";
import { Link } from 'react-router-dom';

const SupportPage = () => {
  // Lista de personajes de support
  const supportCharacters = [
    { name: 'ana', image: '/images/ana.png', path: '/soon' },
    { name: 'baptiste', image: '/images/baptiste.png', path: '/soon' },
    { name: 'brigitte', image: '/images/briggite.png', path: '/soon' },
    { name: 'illari', image: '/images/illari.png', path: '/soon' },
    { name: 'kiriko', image: '/images/kiriko.png', path: '/soon' },
    { name: 'lifeweaver', image: '/images/lifeweaver.png', path: '/soon' },
    { name: 'lucio', image: '/images/lucio.png', path: '/soon' },
    { name: 'mercy', image: '/images/mercy.png', path: '/soon' },
    { name: 'moira', image: '/images/moira.png', path: '/soon' },
    { name: 'zenyatta', image: '/images/zennyata.png', path: '/soon' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-support"> {/* Cambiado a bg-support */}
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

      {/* Tabla de personajes de soporte */}
      <main className="flex flex-grow items-center justify-center w-full">
      <div className="flex-grow flex items-center justify-center p-8">
        <table className="table-auto bg-white shadow-lg rounded-lg">
          <thead>
            <tr>
              <th className="px-4 py-2">Support Characters</th>
            </tr>
          </thead>
          <tbody className="grid grid-cols-3 gap-4 p-4">
            {supportCharacters.map((character, index) => (
              <tr key={index}>
                <td className="flex justify-center">
                  <Link to={character.path}>
                    <img
                      src={character.image}
                      alt={character.name}
                      className="w-24 h-24 object-cover rounded-lg transition-transform duration-200 transform hover:scale-110"
                    />
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

export default SupportPage;
