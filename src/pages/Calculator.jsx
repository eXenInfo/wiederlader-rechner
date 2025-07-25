import React, { useState } from 'react';

const Calculator = () => {
  // State-Variablen
  const [components, setComponents] = useState({
    geschoss: 0,
    huelse: 0,
    zuender: 0,
    pulver: 0,
  });

  const [form, setForm] = useState({
    ladungGrain: 21,
    ladezyklen: 5,
    kostenX: 20,
    patronenX: 20,
    verbrauchProTraining: 30,
    trainingsProJahr: 10,
  });

  const GRAINS_TO_KG = 0.0000648;

  // Gesamtkosten pro Patrone
  const pulverProPatrone = (form.ladungGrain * components.pulver) / 7000;
  const huelseProPatrone = components.huelse / form.ladezyklen;

  const kostenProPatrone = {
    geschoss: components.geschoss,
    huelse: huelseProPatrone,
    zuender: components.zuender,
    pulver: pulverProPatrone,
    summe:
      components.geschoss +
      huelseProPatrone +
      components.zuender +
      pulverProPatrone,
  };

  const patronenProJahr =
    form.verbrauchProTraining * form.trainingsProJahr;

  const pulverJahrGrain = patronenProJahr * form.ladungGrain;
  const pulverJahrKg = pulverJahrGrain * GRAINS_TO_KG;

  const kostenProJahr = kostenProPatrone.summe * patronenProJahr;
  const kostenProMonat = kostenProJahr / 12;
  const kostenIn5Jahren = kostenProJahr * 5;

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Kosten- & Verbrauchskalkulator</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Komponentenwahl */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">1. Komponenten wählen</h2>

          {['geschoss', 'huelse', 'zuender', 'pulver'].map((key) => (
            <div key={key} className="mb-4">
              <label className="block capitalize mb-1">{key}</label>
              <input
                type="number"
                className="w-full px-2 py-1 border rounded"
                placeholder="€/Stück"
                value={components[key]}
                onChange={(e) =>
                  setComponents({ ...components, [key]: parseFloat(e.target.value) || 0 })
                }
              />
            </div>
          ))}
        </div>

        {/* Formulardaten */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">2. Ladedaten & Nutzung</h2>

          <div className="space-y-4">
            <div>
              <label className="block">Pulverladung (grain)</label>
              <input
                type="number"
                value={form.ladungGrain}
                onChange={(e) =>
                  setForm({ ...form, ladungGrain: parseFloat(e.target.value) || 0 })
                }
                className="w-full px-2 py-1 border rounded"
              />
            </div>
            <div>
              <label className="block">Ladezyklen pro Hülse</label>
              <input
                type="number"
                value={form.ladezyklen}
                onChange={(e) =>
                  setForm({ ...form, ladezyklen: parseFloat(e.target.value) || 1 })
                }
                className="w-full px-2 py-1 border rounded"
              />
            </div>
            <div>
              <label className="block">Kosten für X Patronen</label>
              <input
                type="number"
                value={form.kostenX}
                onChange={(e) =>
                  setForm({ ...form, kostenX: parseFloat(e.target.value) || 0 })
                }
                className="w-full px-2 py-1 border rounded"
              />
            </div>
            <div>
              <label className="block">Verbrauch pro Training</label>
              <input
                type="number"
                value={form.verbrauchProTraining}
                onChange={(e) =>
                  setForm({
                    ...form,
                    verbrauchProTraining: parseFloat(e.target.value) || 0,
                  })
                }
                className="w-full px-2 py-1 border rounded"
              />
            </div>
            <div>
              <label className="block">Trainings pro Jahr</label>
              <input
                type="number"
                value={form.trainingsProJahr}
                onChange={(e) =>
                  setForm({
                    ...form,
                    trainingsProJahr: parseFloat(e.target.value) || 0,
                  })
                }
                className="w-full px-2 py-1 border rounded"
              />
            </div>
          </div>
        </div>

        {/* Ergebnisse */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Kalkulation pro Patrone</h2>

          <ul className="space-y-2">
            {['geschoss', 'huelse', 'zuender', 'pulver'].map((key) => (
              <li key={key} className="flex justify-between">
                <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                <span>{kostenProPatrone[key].toFixed(2)} €</span>
              </li>
            ))}
            <li className="flex justify-between font-bold border-t pt-2">
              <span>Summe</span>
              <span>{kostenProPatrone.summe.toFixed(2)} €</span>
            </li>
          </ul>

          <div className="mt-4">
            <p>
              <strong>Kosten für {form.patronenX} Stück:</strong>{' '}
              {(kostenProPatrone.summe * form.patronenX).toFixed(2)} €
            </p>
          </div>
        </div>
      </div>

      {/* Jahresverbrauch */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">
          Jahresverbrauch & Gesamtkosten
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <div className="font-medium">Patronen / Jahr</div>
            <div>{patronenProJahr}</div>
          </div>
          <div>
            <div className="font-medium">Pulver / Jahr</div>
            <div>{pulverJahrKg.toFixed(2)} kg</div>
          </div>
          <div>
            <div className="font-medium">Trainings / Monat</div>
            <div>{(form.trainingsProJahr / 12).toFixed(2)}</div>
          </div>
          <div>
            <div className="font-medium">Kosten / Monat</div>
            <div>{kostenProMonat.toFixed(2)} €</div>
          </div>
          <div>
            <div className="font-medium">Kosten / Jahr</div>
            <div>{kostenProJahr.toFixed(2)} €</div>
          </div>
          <div>
            <div className="font-medium">Kosten in 5 Jahren</div>
            <div>{kostenIn5Jahren.toFixed(2)} €</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
