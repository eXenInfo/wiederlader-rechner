import React from 'react';

const Help = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Hilfe</h2>

      <p className="mb-4">
        Diese Anwendung unterstützt Sie bei der Verwaltung Ihrer Wiederladedaten. Sie können Komponenten wie Geschosse, Hülsen, Zünder und Pulver eingeben und daraus Ladedaten-Sätze erstellen.
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6">
        <li><strong>Geschosse:</strong> Tragen Sie hier Ihre verwendeten Projektile ein.</li>
        <li><strong>Hülsen:</strong> Erfassung von Kaliber, Hersteller und Zustand der Hülsen.</li>
        <li><strong>Zünder:</strong> Verwaltung von Zündertypen und Losnummern.</li>
        <li><strong>Pulver:</strong> Erfassung von Pulversorten, Brennverhalten und Ladeempfehlungen.</li>
        <li><strong>Ladedaten:</strong> Zusammenführung der Komponenten zu einem vollständigen Datensatz.</li>
        <li><strong>Einstellungen:</strong> Wechsel zwischen metrischen und imperialen Einheiten sowie Dunkelmodus.</li>
      </ul>

      <p className="text-sm text-gray-600 dark:text-gray-400">
        Hinweis: Alle Daten werden lokal im Browser gespeichert. Es findet keine Synchronisierung mit einem Server statt.
      </p>
    </div>
  );
};

export default Help;
