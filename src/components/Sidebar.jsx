import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaCalculator, FaBoxOpen, FaSyncAlt, FaDownload, FaUpload } from 'react-icons/fa';
import { GiBulletBill, GiPowderBag } from 'react-icons/gi';
import { BsFillCircleFill } from 'react-icons/bs';
import { HiOutlineDocumentText } from 'react-icons/hi';

const Sidebar = () => {
  const linkClass =
    'flex items-center gap-2 px-4 py-2 rounded hover:bg-blue-100 dark:hover:bg-blue-900';

  const activeClass = 'bg-blue-500 text-white';

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-md flex flex-col justify-between">
      <nav className="p-4 space-y-4">
        <h2 className="text-xl font-bold mb-2 text-blue-700">Wiederlader</h2>

        <NavLink to="/" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ''}`}>
          <FaCalculator /> Kalkulator
        </NavLink>

        <NavLink
          to="/ladedaten"
          className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ''}`}
        >
          <HiOutlineDocumentText /> Ladedaten
        </NavLink>

        <div className="border-t pt-2 mt-2 space-y-1 text-sm">
          <span className="block px-4 text-gray-500 dark:text-gray-400 uppercase text-xs">Komponenten</span>
          <NavLink
            to="/geschoss"
            className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ''}`}
          >
            <GiBulletBill /> Geschosse
          </NavLink>
          <NavLink
            to="/huelse"
            className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ''}`}
          >
            <FaBoxOpen /> Hülsen
          </NavLink>
          <NavLink
            to="/zuender"
            className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ''}`}
          >
            <BsFillCircleFill /> Zünder
          </NavLink>
          <NavLink
            to="/pulver"
            className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ''}`}
          >
            <GiPowderBag /> Pulver
          </NavLink>
        </div>

        <NavLink
          to="/umrechner"
          className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ''}`}
        >
          <FaSyncAlt /> Umrechner
        </NavLink>
      </nav>

      <div className="p-4 border-t flex flex-col gap-2">
        <button className="flex items-center gap-2 text-sm text-blue-700 hover:underline">
          <FaUpload /> Daten Importieren
        </button>
        <button className="flex items-center gap-2 text-sm text-blue-700 hover:underline">
          <FaDownload /> Daten Exportieren
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
