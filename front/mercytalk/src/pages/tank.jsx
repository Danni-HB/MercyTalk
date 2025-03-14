import React from 'react';
import "./index.css";
import { Link } from 'react-router-dom';

const TankPage = () => {
  // Lista de personajes de tanque
  const tankCharacters = [
    { name: 'dva', image: '/images/dva.png', path: '/dva' },
    { name: 'doomfist', image: '/images/doomfist.png', path: '/soon' },
    { name: 'junkerqueen', image: '/images/junkerqueen.png', path: '/soon' },
    { name: 'mauga', image: '/images/mauga.png', path: '/soon' },
    { name: 'orisa', image: '/images/orisa.png', path: '/soon' },
    { name: 'ramattra', image: '/images/ramattra.png', path: '/soon' },
    { name: 'rein', image: '/images/rein.png', path: '/soon' },
    { name: 'roadhog', image: '/images/roadhog.png', path: '/soon' },
    { name: 'sigma', image: '/images/sigma.png', path: '/soon' },
    { name: 'winston', image: '/images/winston.png', path: '/soon' },
    { name: 'ball', image: '/images/ball.png', path: '/soon' },
    { name: 'zarya', image: '/images/zarya.png', path: '/soon-' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-tank">
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
              <th className="px-4 py-2">Tank Characters</th>
            </tr>
          </thead>
          <tbody className="grid grid-cols-3 gap-4 p-4">
            {tankCharacters.map((character, index) => (
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

export default TankPage;
