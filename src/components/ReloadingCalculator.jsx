import React, { useState } from 'react';

export default function ReloadingCalculator() {
  const [form, setForm] = useState({
    primerPrice: 39,
    primerCount: 1000,
    casePrice: 50,
    caseCount: 100,
    bulletPrice: 29.9,
    bulletCount: 100,
    powderPrice: 85,
    powderWeight: 1000,
    powderPerRound: 24.5,
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: parseFloat(value) || 0,
    }));
  };

  const handleReset = () => {
    setForm({
      primerPrice: 39,
      primerCount: 1000,
      casePrice: 50,
      caseCount: 100,
      bulletPrice: 29.9,
      bulletCount: 100,
      powderPrice: 85,
      powderWeight: 1000,
      powderPerRound: 24.5,
    });
    setResult(null);
  };

  const handleCalculate = () => {
    const primerCost = form.primerPrice / form.primerCount;
    const caseCost = form.casePrice / form.caseCount;
    const bulletCost = form.bulletPrice / form.bulletCount;
    const powderCost = (form.powderPrice / form.powderWeight) * form.powderPerRound;

    const totalCost = primerCost + caseCost + bulletCost + powderCost;

    setResult({
      primerCost,
      caseCost,
      bulletCost,
      powderCost,
      totalCost,
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white dark:bg-gray-800 shadow-md rounded">
      <h1 className="text-xl font-bold mb-4 text-center">Wiederlader Rechner</h1>

      <div className="grid grid-cols-2 gap-4">
        {[
          ['Zünder Preis (€)', 'primerPrice'],
          ['Zünder Menge', 'primerCount'],
          ['Hülsen Preis (€)', 'casePrice'],
          ['Hülsen Menge', 'caseCount'],
          ['Geschosse Preis (€)', 'bulletPrice'],
          ['Geschosse Menge', 'bulletCount'],
          ['Pulver Preis (€)', 'powderPrice'],
          ['Pulver Menge (g)', 'powderWeight'],
          ['Pulver je Patrone (g)', 'powderPerRound'],
        ].map(([label, name]) => (
          <label key={name} className="flex flex-col text-sm">
            {label}
            <input
              type="number"
              step="any"
              name={name}
              value={form[name]}
              onChange={handleChange}
              className="mt-1 p-1 rounded border border-gray-300 bg-gray-50 dark:bg-gray-700"
            />
          </label>
        ))}
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={handleReset}
          className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
        >
          Zurücksetzen
        </button>
        <button
          onClick={handleCalculate}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Berechnen
        </button>
      </div>

      {result && (
        <div className="mt-6 bg-gray-100 dark:bg-gray-700 p-4 rounded text-sm">
          <p>Zünder-Kosten: {result.primerCost.toFixed(4)} €</p>
          <p>Hülsen-Kosten: {result.caseCost.toFixed(4)} €</p>
          <p>Geschoss-Kosten: {result.bulletCost.toFixed(4)} €</p>
          <p>Pulver-Kosten: {result.powderCost.toFixed(4)} €</p>
          <hr className="my-2" />
          <p className="font-bold">
            Gesamt: {result.totalCost.toFixed(4)} € pro Patrone
          </p>
        </div>
      )}
    </div>
  );
}
