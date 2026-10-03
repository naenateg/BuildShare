import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { initialBuilds } from './data/builds';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Builds from './pages/Builds';
import BuildDetail from './pages/BuildDetail';
import NewBuild from './pages/NewBuild';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

export default function App() {
  // The single source of truth for all builds. Lives here because
  // multiple pages need it ("lifting state up").
  const [builds, setBuilds] = useState(initialBuilds);

  function toggleLike(id) {
    setBuilds(
      builds.map((b) =>
        b.id === id
          ? { ...b, liked: !b.liked, likes: b.liked ? b.likes - 1 : b.likes + 1 }
          : b
      )
    );
  }

  function addBuild(newBuild) {
    setBuilds([{ ...newBuild, id: Date.now(), likes: 0, liked: false }, ...builds]);
  }

  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/builds" element={<Builds builds={builds} onLike={toggleLike} />} />
          <Route path="/builds/new" element={<NewBuild onAdd={addBuild} />} />
          <Route path="/builds/:id" element={<BuildDetail builds={builds} onLike={toggleLike} />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Car Builds. A learning project.</p>
      </footer>
    </>
  );
}