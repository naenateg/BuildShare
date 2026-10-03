import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h1>404: Not Found</h1>
      <p>We couldn't find what you were looking for.</p>
      <Link to="/">Go home</Link>
    </div>
  );
}