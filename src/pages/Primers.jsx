import React, { useState, useEffect } from 'react';

const Primers = () => {
  const [primers, setPrimers] = useState([]);
  const [form, setForm] = useState({ name: '', type: '', notes: '' });

  useEffect(() => {
    const stored = localStorage.getItem('primers');
    if (stored) setPrimers(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('primers', JSON.stringify(primers));
  }, [primers]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.name || !form.type) return;
    setPrimers([...primers, { ...form, id: Date.now() }]);
    setForm({ name: '', type: '', notes: '' });
  };

  const handleDelete = (id) => {
    setPrimers(primers.filter(p => p.id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Zündhütchen verwalten</h2>

      <form onSubmit={handleAdd} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <input className="p-2 border rounded" name="name" placeholder="Bezeichnung" value={form.name} onChange={handleChange} />
        <input className="p-2 border rounded" name="type" placeholder="Typ (z. B. Small Rifle)" value={form.type} onChange={handleChange} />
        <input className="p-2 border rounded" name="notes" placeholder="Anmerkungen" value={form.notes} onChange={handleChange} />
        <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700">Hinzufügen</button>
      </form>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            <th className="p-2 border">Bezeichnung</th>
            <th className="p-2 border">Typ</th>
            <th className="p-2 border">Anmerkungen</th>
            <th className="p-2 border">Aktion</th>
          </tr>
        </thead>
        <tbody>
          {primers.map(p => (
            <tr key={p.id} className="bg-white dark:bg-gray-800">
              <td className="p-2 border">{p.name}</td>
              <td className="p-2 border">{p.type}</td>
              <td className="p-2 border">{p.notes}</td>
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

export default Primers;
