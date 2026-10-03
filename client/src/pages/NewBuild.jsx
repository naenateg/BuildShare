import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CATEGORIES = ['Engine', 'Exhaust', 'Suspension', 'Wheels', 'Exterior', 'Interior', 'Other'];

export default function NewBuild({ onAdd }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({ title: '', car: '', year: '', description: '' });
  const [mods, setMods] = useState([]);

  // One handler for all text fields. e.target.name tells us which field changed.
  // [e.target.name] in brackets is a "computed key": the key's name comes from a variable.
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function addMod() {
    setMods([...mods, { name: '', category: 'Engine', cost: '' }]);
  }

  // Rebuild the array, replacing only the row at `index`
  function updateMod(index, field, value) {
    setMods(mods.map((m, i) => (i === index ? { ...m, [field]: value } : m)));
  }

  // Keep every row except the one at `index`
  function removeMod(index) {
    setMods(mods.filter((_, i) => i !== index));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAdd({
      ...form,
      year: Number(form.year),
      owner: 'you',
      emoji: '🚗',
      mods: mods.map((m) => ({ ...m, cost: Number(m.cost) || 0 })),
    });
    navigate('/builds');   // redirect after saving
  }

  return (
    <div className="form">
      <h1>Share a Build</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Build title</label>
        <input id="title" name="title" value={form.title} onChange={handleChange} required />

        <label htmlFor="car">Car (make and model)</label>
        <input id="car" name="car" value={form.car} onChange={handleChange} required />

        <label htmlFor="year">Year</label>
        <input id="year" name="year" type="number" min="1900" max="2100"
               value={form.year} onChange={handleChange} required />

        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="4"
                  value={form.description} onChange={handleChange} />

        <label>Modifications</label>
        {mods.map((m, i) => (
          <div className="mod-row" key={i}>
            <input placeholder="Part name" value={m.name}
                   onChange={(e) => updateMod(i, 'name', e.target.value)} required />
            <select value={m.category}
                    onChange={(e) => updateMod(i, 'category', e.target.value)}>
              {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
            </select>
            <input type="number" min="0" placeholder="Cost $" value={m.cost}
                   onChange={(e) => updateMod(i, 'cost', e.target.value)} />
            <button type="button" className="button danger" onClick={() => removeMod(i)}>✕</button>
          </div>
        ))}
        <button type="button" className="button secondary" onClick={addMod}>+ Add mod</button>

        <p><button type="submit" className="button">Publish Build</button></p>
      </form>
    </div>
  );
}