import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-200 dark:bg-gray-800 p-4">
      <h1 className="text-2xl font-bold mb-6">Wiederlader</h1>
      <nav className="flex flex-col gap-2">
        <Link to="/" className="hover:bg-gray-300 dark:hover:bg-gray-700 p-2 rounded">
          Dashboard
        </Link>
        <Link to="/geschosse" className="hover:bg-gray-300 dark:hover:bg-gray-700 p-2 rounded">
          Geschosse
        </Link>
        <Link to="/huelsen" className="hover:bg-gray-300 dark:hover:bg-gray-700 p-2 rounded">
          Hülsen
        </Link>
        <Link to="/zuender" className="hover:bg-gray-300 dark:hover:bg-gray-700 p-2 rounded">
          Zünder
        </Link>
        <Link to="/pulver" className="hover:bg-gray-300 dark:hover:bg-gray-700 p-2 rounded">
          Pulver
        </Link>
        <Link to="/ladedaten" className="hover:bg-gray-300 dark:hover:bg-gray-700 p-2 rounded">
          Ladedaten
        </Link>
        <Link to="/einstellungen" className="hover:bg-gray-300 dark:hover:bg-gray-700 p-2 rounded">
          Einstellungen
        </Link>
        <Link to="/hilfe" className="hover:bg-gray-300 dark:hover:bg-gray-700 p-2 rounded">
          Hilfe
        </Link>
        <Link to="/ueber" className="hover:bg-gray-300 dark:hover:bg-gray-700 p-2 rounded">
          Über
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
