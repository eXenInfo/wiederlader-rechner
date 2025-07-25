import React, { useState, useEffect } from 'react';

const Projectiles = () => {
  const [projectiles, setProjectiles] = useState([]);
  const [form, setForm] = useState({ name: '', caliber: '', weight: '', bc: '', type: '' });

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

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Geschosse verwalten</h2>

      <form onSubmit={handleAdd} className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
        <input className="p-2 border rounded" name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input className="p-2 border rounded" name="caliber" placeholder="Kaliber (z. B. 6,5)" value={form.caliber} onChange={handleChange} />
        <input className="p-2 border rounded" name="weight" placeholder="Gewicht (gr)" value={form.weight} onChange={handleChange} />
        <input className="p-2 border rounded" name="bc" placeholder="BC-Wert" value={form.bc} onChange={handleChange} />
        <input className="p-2 border rounded" name="type" placeholder="Typ (z. B. HPBT)" value={form.type} onChange={handleChange} />
        <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700">Hinzufügen</button>
      </form>

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
