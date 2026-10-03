import { useParams, Link } from 'react-router-dom';
import NotFound from './NotFound';

export default function BuildDetail({ builds, onLike }) {
  const { id } = useParams();                       // from the URL: /builds/:id
  const build = builds.find((b) => b.id === Number(id));

  if (!build) return <NotFound />;

  // reduce folds an array into one value, like std::accumulate
  const total = build.mods.reduce((sum, m) => sum + m.cost, 0);

  return (
    <div>
      <Link to="/builds">&larr; Back to all builds</Link>
      <div className="card-img detail-hero">{build.emoji}</div>
      <h1>{build.title}</h1>
      <p className="meta">{build.year} {build.car} · by {build.owner}</p>
      <p>{build.description}</p>

      <div className="actions">
        <button
          className={build.liked ? 'like liked' : 'like'}
          onClick={() => onLike(build.id)}
        >
          {build.liked ? '♥' : '♡'} {build.likes}
        </button>
      </div>

      <h2>Modifications</h2>
      {build.mods.length === 0 ? (
        <p>No modifications listed yet.</p>
      ) : (
        <>
          <ul className="mod-list">
            {build.mods.map((m, i) => (
              <li key={i}>
                <span>{m.name}<span className="tag">{m.category}</span></span>
                <span>${m.cost.toLocaleString()}</span>
              </li>
            ))}
          </ul>
          <p className="total">Total invested: ${total.toLocaleString()}</p>
        </>
      )}
    </div>
  );
}