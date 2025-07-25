import React, { useState, useEffect } from 'react';

const DataSets = () => {
  const [dataSets, setDataSets] = useState([]);
  const [form, setForm] = useState({
    name: '',
    caliber: '',
    projectile: '',
    powder: '',
    weight: '',
    length: '',
    notes: ''
  });

  useEffect(() => {
    const stored = localStorage.getItem('datasets');
    if (stored) setDataSets(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('datasets', JSON.stringify(dataSets));
  }, [dataSets]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.name || !form.caliber || !form.projectile || !form.powder) return;
    setDataSets([...dataSets, { ...form, id: Date.now() }]);
    setForm({
      name: '',
      caliber: '',
      projectile: '',
      powder: '',
      weight: '',
      length: '',
      notes: ''
    });
  };

  const handleDelete = (id) => {
    setDataSets(dataSets.filter(d => d.id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Ladedaten verwalten</h2>

      <form onSubmit={handleAdd} className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        <input className="p-2 border rounded" name="name" placeholder="Bezeichnung" value={form.name} onChange={handleChange} />
        <input className="p-2 border rounded" name="caliber" placeholder="Kaliber" value={form.caliber} onChange={handleChange} />
        <input className="p-2 border rounded" name="projectile" placeholder="Geschoss" value={form.projectile} onChange={handleChange} />
        <input className="p-2 border rounded" name="powder" placeholder="Pulver" value={form.powder} onChange={handleChange} />
        <input className="p-2 border rounded" name="weight" placeholder="Pulvermenge (gr)" value={form.weight} onChange={handleChange} />
        <input className="p-2 border rounded" name="length" placeholder="Gesamtlänge (mm)" value={form.length} onChange={handleChange} />
        <input className="p-2 border rounded col-span-2 md:col-span-3" name="notes" placeholder="Anmerkungen" value={form.notes} onChange={handleChange} />
        <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700">Hinzufügen</button>
      </form>

      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            <th className="p-2 border">Bezeichnung</th>
            <th className="p-2 border">Kaliber</th>
            <th className="p-2 border">Geschoss</th>
            <th className="p-2 border">Pulver</th>
            <th className="p-2 border">Menge (gr)</th>
            <th className="p-2 border">Länge (mm)</th>
            <th className="p-2 border">Anmerkungen</th>
            <th className="p-2 border">Aktion</th>
          </tr>
        </thead>
        <tbody>
          {dataSets.map(d => (
            <tr key={d.id} className="bg-white dark:bg-gray-800">
              <td className="p-2 border">{d.name}</td>
              <td className="p-2 border">{d.caliber}</td>
              <td className="p-2 border">{d.projectile}</td>
              <td className="p-2 border">{d.powder}</td>
              <td className="p-2 border">{d.weight}</td>
              <td className="p-2 border">{d.length}</td>
              <td className="p-2 border">{d.notes}</td>
              <td className="p-2 border">
                <button onClick={() => handleDelete(d.id)} className="text-red-600 hover:underline">Löschen</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataSets;
