// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home.jsx'; 
import ComingSoon from './pages/soon.jsx';
import LoginPage from './pages/login.jsx'; 
import RegisterPage from './pages/register.jsx'; 
import TankPage from './pages/tank.jsx';
import SupportPage from './pages/support.jsx';
import DPSPage from './pages/dps.jsx';
import Heroes from './pages/Heroes.jsx';
import DvaPage from './pages/dva.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/soon" element={<ComingSoon />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/tank" element={<TankPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/dps" element={<DPSPage />} />
        <Route path="/Heroes" element={<Heroes />} />
        <Route path="/dva" element={<DvaPage />} />
        {/* Otras rutas que necesites */}
      </Routes>
    </Router>
  );
}

export default App;
