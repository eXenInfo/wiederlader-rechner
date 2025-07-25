import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Projectiles from './pages/Projectiles';
import Cases from './pages/Cases';
import Primers from './pages/Primers';
import Powders from './pages/Powders';
import DataSets from './pages/DataSets';
import Settings from './pages/Settings';
import Help from './pages/Help';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Sidebar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/geschosse" element={<Projectiles />} />
            <Route path="/huelsen" element={<Cases />} />
            <Route path="/zuender" element={<Primers />} />
            <Route path="/pulver" element={<Powders />} />
            <Route path="/ladedaten" element={<DataSets />} />
            <Route path="/einstellungen" element={<Settings />} />
            <Route path="/hilfe" element={<Help />} />
            <Route path="/ueber" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
