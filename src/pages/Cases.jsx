import React, { useState, useEffect } from 'react';

const Cases = () => {
  const [cases, setCases] = useState([]);
  const [form, setForm] = useState({ caliber: '', brand: '', reloads: '', note: '' });

  useEffect(() => {
    const stored = localStorage.getItem('cases');
    if (stored) setCases(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('cases', JSON.stringify(cases));
  }, [cases]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.caliber || !form.brand) return;
    setCases([...cases, { ...form, id: Date.now() }]);
    setForm({ caliber: '', brand: '', reloads: '', note: '' });
  };

  const handleDelete = (id) => {
    setCases(cases.filter(c => c.id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Hülsen verwalten</h2>

      <form onSubmit={handleAdd} className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        <input className="p-2 border rounded" name="caliber" placeholder="Kaliber" value={form.caliber} onChange={handleChange} />
        <input className="p-2 border rounded" name="brand" placeholder="Marke" value={form.brand} onChange={handleChange} />
        <input className="p-2 border rounded" name="reloads" placeholder="Anz. Wiederladungen" value={form.reloads} onChange={handleChange} />
        <input className="p-2 border rounded" name="note" placeholder="Notiz" value={form.note} onChange={handleChange} />
        <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700">Hinzufügen</button>
      </form>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            <th className="p-2 border">Kaliber</th>
            <th className="p-2 border">Marke</th>
            <th className="p-2 border">Wiederladungen</th>
            <th className="p-2 border">Notiz</th>
            <th className="p-2 border">Aktion</th>
          </tr>
        </thead>
        <tbody>
          {cases.map(c => (
            <tr key={c.id} className="bg-white dark:bg-gray-800">
              <td className="p-2 border">{c.caliber}</td>
              <td className="p-2 border">{c.brand}</td>
              <td className="p-2 border">{c.reloads}</td>
              <td className="p-2 border">{c.note}</td>
              <td className="p-2 border">
                <button onClick={() => handleDelete(c.id)} className="text-red-600 hover:underline">Löschen</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cases;
