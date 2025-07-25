import React from 'react';

const About = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Über dieses Projekt</h2>

      <p className="mb-4">
        Der <strong>Wiederlader-Rechner</strong> ist eine Progressive Web App (PWA), die Ihnen hilft, Ihre Wiederladedaten systematisch zu erfassen, zu verwalten und auszuwerten. Ziel ist es, ambitionierten Sportschützen und Jägern eine einfach bedienbare, offlinefähige Anwendung zur Verfügung zu stellen.
      </p>

      <p className="mb-4">
        Dieses Projekt wird im Rahmen eines persönlichen Hobbys entwickelt. Es basiert auf modernen Webtechnologien (React, Vite, Tailwind CSS) und speichert Daten lokal im Browser.
      </p>

      <p className="mb-4">
        Vorschläge zur Weiterentwicklung sind willkommen – über GitHub Issues oder Pull Requests.
      </p>

      <p className="text-sm text-gray-600 dark:text-gray-400">
        © 2025 – eXenInfo. Alle Rechte vorbehalten.
      </p>
    </div>
  );
};

export default About;
