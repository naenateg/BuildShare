import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">🏁 Car Builds</Link>
      <div className="nav-links">
        <Link to="/builds">Browse</Link>
        <Link to="/builds/new">Share a Build</Link>
        <Link to="/login">Log In</Link>
      </div>
    </nav>
  );
}