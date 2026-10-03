import { useState } from 'react';
import BuildCard from '../components/BuildCard';

export default function Builds({ builds, onLike }) {
  const [search, setSearch] = useState('');

  const filtered = builds.filter((b) => {
    const text = `${b.title} ${b.car} ${b.owner}`.toLowerCase();
    return text.includes(search.toLowerCase());
  });

  return (
    <div>
      <h1>All Builds</h1>
      <input
        className="search"
        placeholder="Search by title, car, or owner..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filtered.length === 0 ? (
        <p>No builds match your search.</p>
      ) : (
        <div className="grid">
          {filtered.map((b) => (
            <BuildCard key={b.id} build={b} onLike={onLike} />
          ))}
        </div>
      )}
    </div>
  );
}