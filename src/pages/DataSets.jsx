import React, { useState, useEffect } from 'react';

const DataSets = () => {
  const [dataSets, setDataSets] = useState([]);
  const [form, setForm] = useState({
    projectile: '',
    caseType: '',
    primer: '',
    powder: '',
    charge: '',
    coal: '',
    notes: ''
  });

  const [projectiles, setProjectiles] = useState([]);
  const [cases, setCases] = useState([]);
  const [primers, setPrimers] = useState([]);
  const [powders, setPowders] = useState([]);

  useEffect(() => {
    setProjectiles(JSON.parse(localStorage.getItem('projectiles')) || []);
    setCases(JSON.parse(localStorage.getItem('cases')) || []);
    setPrimers(JSON.parse(localStorage.getItem('primers')) || []);
    setPowders(JSON.parse(localStorage.getItem('powders')) || []);
    setDataSets(JSON.parse(localStorage.getItem('dataSets')) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem('dataSets', JSON.stringify(dataSets));
  }, [dataSets]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.projectile || !form.caseType || !form.primer || !form.powder || !form.charge) return;
    setDataSets([...dataSets, { ...form, id: Date.now() }]);
    setForm({ projectile: '', caseType: '', primer: '', powder: '', charge: '', coal: '', notes: '' });
  };

  const handleDelete = (id) => {
    setDataSets(dataSets.filter(d => d.id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Ladedaten verwalten</h2>

      <form onSubmit={handleAdd} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <select className="p-2 border rounded" name="projectile" value={form.projectile} onChange={handleChange}>
          <option value="">Geschoss wählen</option>
          {projectiles.map(p => (
            <option key={p.id} value={p.name}>{p.name}</option>
          ))}
        </select>
        <select className="p-2 border rounded" name="caseType" value={form.caseType} onChange={handleChange}>
          <option value="">Hülse wählen</option>
          {cases.map(c => (
            <option key={c.id} value={c.name}>{c.name}</option>
          ))}
        </select>
        <select className="p-2 border rounded" name="primer" value={form.primer} onChange={handleChange}>
          <option value="">Zünder wählen</option>
          {primers.map(p => (
            <option key={p.id} value={p.name}>{p.name}</option>
          ))}
        </select>
        <select className="p-2 border rounded" name="powder" value={form.powder} onChange={handleChange}>
          <option value="">Pulver wählen</option>
          {powders.map(p => (
            <option key={p.id} value={p.name}>{p.name}</option>
          ))}
        </select>
        <input className="p-2 border rounded" name="charge" placeholder="Ladung (gr)" value={form.charge} onChange={handleChange} />
        <input className="p-2 border rounded" name="coal" placeholder="Setztiefe (COAL)" value={form.coal} onChange={handleChange} />
        <input className="p-2 border rounded col-span-2" name="notes" placeholder="Notizen" value={form.notes} onChange={handleChange} />
        <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 col-span-2">Hinzufügen</button>
      </form>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            <th className="p-2 border">Geschoss</th>
            <th className="p-2 border">Hülse</th>
            <th className="p-2 border">Zünder</th>
            <th className="p-2 border">Pulver</th>
            <th className="p-2 border">Ladung</th>
            <th className="p-2 border">COAL</th>
            <th className="p-2 border">Notizen</th>
            <th className="p-2 border">Aktion</th>
          </tr>
        </thead>
        <tbody>
          {dataSets.map(d => (
            <tr key={d.id} className="bg-white dark:bg-gray-800">
              <td className="p-2 border">{d.projectile}</td>
              <td className="p-2 border">{d.caseType}</td>
              <td className="p-2 border">{d.primer}</td>
              <td className="p-2 border">{d.powder}</td>
              <td className="p-2 border">{d.charge}</td>
              <td className="p-2 border">{d.coal}</td>
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
