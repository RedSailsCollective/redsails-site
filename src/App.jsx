// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar       from './components/Navbar';
import Home         from './pages/Home';
import Games        from './pages/Games';
import GameDetail   from './pages/GameDetail';
import Apps         from './pages/Apps';
import AppDetail    from './pages/AppDetail';   // ← NEW
import About        from './pages/About';
import Contact      from './pages/Contact';
import Footer       from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans">
      <Navbar />

      {/* Main content grows to fill remaining height */}
      <main className="flex-grow overflow-auto">
        <Routes>
          <Route path="/"            element={<Home />}       />
          <Route path="/games"       element={<Games />}      />
          <Route path="/games/:id"   element={<GameDetail />} />
          <Route path="/apps"        element={<Apps />}       />
          <Route path="/apps/:id"    element={<AppDetail />}  /> {/* ← detail route */}
          <Route path="/about"       element={<About />}      />
          <Route path="/contact"     element={<Contact />}    />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
