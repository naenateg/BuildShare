import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="hero">
      <h1>Show off your build.</h1>
      <p>Share your car's modifications, browse other projects, and get inspired.</p>
      <Link to="/builds" className="button">Browse Builds</Link>
    </section>
  );
}