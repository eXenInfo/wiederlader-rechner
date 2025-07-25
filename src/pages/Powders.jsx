import React, { useState, useEffect } from 'react';

const Powders = () => {
  const [powders, setPowders] = useState([]);
  const [form, setForm] = useState({ name: '', burnRate: '', density: '', notes: '' });

  useEffect(() => {
    const stored = localStorage.getItem('powders');
    if (stored) setPowders(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('powders', JSON.stringify(powders));
  }, [powders]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.name || !form.burnRate) return;
    setPowders([...powders, { ...form, id: Date.now() }]);
    setForm({ name: '', burnRate: '', density: '', notes: '' });
  };

  const handleDelete = (id) => {
    setPowders(powders.filter(p => p.id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Pulver verwalten</h2>

      <form onSubmit={handleAdd} className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        <input className="p-2 border rounded" name="name" placeholder="Bezeichnung" value={form.name} onChange={handleChange} />
        <input className="p-2 border rounded" name="burnRate" placeholder="Abbrandrate" value={form.burnRate} onChange={handleChange} />
        <input className="p-2 border rounded" name="density" placeholder="Dichte (g/cm³)" value={form.density} onChange={handleChange} />
        <input className="p-2 border rounded" name="notes" placeholder="Anmerkungen" value={form.notes} onChange={handleChange} />
        <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700">Hinzufügen</button>
      </form>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            <th className="p-2 border">Bezeichnung</th>
            <th className="p-2 border">Abbrandrate</th>
            <th className="p-2 border">Dichte</th>
            <th className="p-2 border">Anmerkungen</th>
            <th className="p-2 border">Aktion</th>
          </tr>
        </thead>
        <tbody>
          {powders.map(p => (
            <tr key={p.id} className="bg-white dark:bg-gray-800">
              <td className="p-2 border">{p.name}</td>
              <td className="p-2 border">{p.burnRate}</td>
              <td className="p-2 border">{p.density}</td>
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

export default Powders;
