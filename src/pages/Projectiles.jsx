import React, { useState, useEffect } from 'react';

const Projectiles = () => {
  const [projectiles, setProjectiles] = useState([]);
  const [form, setForm] = useState({ name: '', caliber: '', weight: '', bc: '', type: '' });
  const [importError, setImportError] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('projectiles');
    if (stored) setProjectiles(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('projectiles', JSON.stringify(projectiles));
  }, [projectiles]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.name || !form.caliber || !form.weight) return;
    setProjectiles([...projectiles, { ...form, id: Date.now() }]);
    setForm({ name: '', caliber: '', weight: '', bc: '', type: '' });
  };

  const handleDelete = (id) => {
    setProjectiles(projectiles.filter(p => p.id !== id));
  };

  const handleFileImport = (e) => {
    const file = e.target.files[0];
    if (!file || !file.name.toLowerCase().endsWith('.bul')) {
      setImportError('Bitte eine gültige .BUL-Datei auswählen.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const lines = event.target.result.split('\n');
      const imported = [];

      for (const line of lines) {
        const parts = line.trim().split(',');
        if (parts.length >= 5) {
          imported.push({
            id: Date.now() + Math.random(),
            name: parts[0],
            caliber: parts[1],
            weight: parts[2],
            bc: parts[3],
            type: parts[4],
          });
        }
      }

      if (imported.length > 0) {
        setProjectiles(prev => [...prev, ...imported]);
        setImportError('');
      } else {
        setImportError('Keine gültigen Daten gefunden.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Geschosse verwalten</h2>

      <form onSubmit={handleAdd} className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
        <input className="p-2 border rounded" name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input className="p-2 border rounded" name="caliber" placeholder="Kaliber" value={form.caliber} onChange={handleChange} />
        <input className="p-2 border rounded" name="weight" placeholder="Gewicht (gr)" value={form.weight} onChange={handleChange} />
        <input className="p-2 border rounded" name="bc" placeholder="BC-Wert" value={form.bc} onChange={handleChange} />
        <input className="p-2 border rounded" name="type" placeholder="Typ" value={form.type} onChange={handleChange} />
        <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700">Hinzufügen</button>
      </form>

      <div className="mb-6">
        <input type="file" accept=".bul,.BUL" onChange={handleFileImport} className="mb-2" />
        {importError && <p className="text-red-600">{importError}</p>}
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Kaliber</th>
            <th className="p-2 border">Gewicht (gr)</th>
            <th className="p-2 border">BC</th>
            <th className="p-2 border">Typ</th>
            <th className="p-2 border">Aktion</th>
          </tr>
        </thead>
        <tbody>
          {projectiles.map(p => (
            <tr key={p.id} className="bg-white dark:bg-gray-800">
              <td className="p-2 border">{p.name}</td>
              <td className="p-2 border">{p.caliber}</td>
              <td className="p-2 border">{p.weight}</td>
              <td className="p-2 border">{p.bc}</td>
              <td className="p-2 border">{p.type}</td>
              <td className="p-2 border">
                <button onClick={() => handleDelete(p.id)} className="text-red-600 hover:underline">Löschen</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Projectiles;
