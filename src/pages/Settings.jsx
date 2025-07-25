import React, { useState, useEffect } from 'react';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [unitSystem, setUnitSystem] = useState('metric');

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    const storedUnitSystem = localStorage.getItem('unitSystem');
    if (storedDarkMode) setDarkMode(storedDarkMode === 'true');
    if (storedUnitSystem) setUnitSystem(storedUnitSystem);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    localStorage.setItem('unitSystem', unitSystem);
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode, unitSystem]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleUnitChange = (e) => setUnitSystem(e.target.value);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Einstellungen</h2>

      <div className="mb-6">
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={toggleDarkMode}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span>Dunkelmodus aktivieren</span>
        </label>
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-medium">Einheitensystem</label>
        <select
          value={unitSystem}
          onChange={handleUnitChange}
          className="p-2 border rounded w-full max-w-xs"
        >
          <option value="metric">Metrisch (mm, g, m/s)</option>
          <option value="imperial">Imperial (inch, gr, fps)</option>
        </select>
      </div>
    </div>
  );
};

export default Settings;
