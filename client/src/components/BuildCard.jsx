import { Link } from 'react-router-dom';

export default function BuildCard({ build, onLike }) {
  return (
    <article className="card">
      <div className="card-img">{build.emoji}</div>
      <h2><Link to={`/builds/${build.id}`}>{build.title}</Link></h2>
      <p className="meta">{build.year} {build.car} · by {build.owner}</p>
      <p>{build.description}</p>
      <div className="card-footer">
        <span className="mod-count">{build.mods.length} mods</span>
        <button
          className={build.liked ? 'like liked' : 'like'}
          onClick={() => onLike(build.id)}
        >
          {build.liked ? '♥' : '♡'} {build.likes}
        </button>
      </div>
    </article>
  );
}