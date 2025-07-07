// src/pages/Games.jsx
import CodeRain  from '../components/CodeRain'
import { games } from './data/games'

export default function Games() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* 1. static gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-zinc-900 to-black" />

      {/* 2. matrix rain, gently masked */}
      <div className="absolute inset-0 z-10 pointer-events-none
                      [mask-image:linear-gradient(to_bottom,black_60%,transparent)]">
        <CodeRain speed={15} fontSize={12} fadeOpacity={0.015} />
      </div>

      {/* 3. content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-24">

        {/* ── glass banner ───────────────────────────────────────────── */}
        <div className="mx-auto w-max mb-16 rounded-xl px-10 py-4
                        bg-black/70 backdrop-blur-sm
                        shadow-[0_0_20px_4px_rgba(0,0,0,0.6)]">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-red-500">
            Our&nbsp;Games
          </h1>
        </div>
        {/* ──────────────────────────────────────────────────────────── */}

        {/* auto-fitting, centered grid */}
        <div className="mx-auto grid gap-8 justify-center
                        [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
          {games.map(({ id, title, description, thumbnail, href }) => (
            <a
              key={id}
              href={href}
              className="block bg-black/60 backdrop-blur-sm rounded-2xl p-6
                         transition hover:scale-[1.02] hover:bg-black/70"
            >
              <img
                src={thumbnail}
                alt={title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h2 className="font-heading text-2xl text-red-500 mb-2">
                {title}
              </h2>
              <p className="font-body text-zinc-300 text-sm leading-relaxed">
                {description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
