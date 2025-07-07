// src/pages/GameDetail.jsx
import { useParams, Link } from 'react-router-dom';
import CodeRain            from '../components/CodeRain';
import { games }           from './data/games';

export default function GameDetail() {
  const { id } = useParams();
  const game   = games.find(g => g.id === id);

  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p className="text-xl">Game not found.</p>
        <Link to="/games" className="ml-4 text-red-400 hover:underline">
          Back&nbsp;to Games
        </Link>
      </div>
    );
  }

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* 1) static gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-zinc-900 to-black" />

      {/* 2) subtle matrix rain, masked so it fades lower down */}
      <div className="absolute inset-0 z-10 pointer-events-none
                      [mask-image:linear-gradient(to_bottom,black_60%,transparent)]">
        <CodeRain speed={15} fontSize={12} fadeOpacity={0.015} />
      </div>

      {/* 3) glass card with all game content */}
      <div className="relative z-20 max-w-3xl mx-auto px-6 py-24">
        <div className="bg-black/70 backdrop-blur-sm rounded-2xl p-10 shadow-lg">
          {/* back-link sits outside heading so it doesn’t steal focus */}
          <Link
            to="/games"
            className="inline-block mb-8 text-zinc-400 hover:text-white transition"
          >
            ← Back to all games
          </Link>

          {/* title */}
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-red-500 mb-6">
            {game.title}
          </h1>

          {/* hero image */}
          <img
            src={game.thumbnail}
            alt={game.title}
            className="mx-auto mb-8 rounded-lg max-h-72 object-cover w-full"
          />

          {/* description */}
          <p className="font-body text-zinc-300 text-lg leading-relaxed mb-10">
            {game.description}
          </p>

          {/* primary CTA */}
          <a
            href={game.href}
            className="inline-block px-8 py-3 bg-red-600 hover:bg-red-700 rounded-xl font-medium transition"
          >
            More Info Soon
          </a>
        </div>
      </div>
    </section>
  );
}
