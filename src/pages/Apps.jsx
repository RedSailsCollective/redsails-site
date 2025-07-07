// src/pages/Apps.jsx
import CodeRain  from '../components/CodeRain';
import { apps }  from './data/apps';

export default function Apps() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-zinc-900 to-black" />

      {/* matrix rain with bottom fade-out */}
      <div className="absolute inset-0 z-10 pointer-events-none
                      [mask-image:linear-gradient(to_bottom,black_60%,transparent)]">
        <CodeRain speed={15} fontSize={12} fadeOpacity={0.015} />
      </div>

      {/* content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-24">
        {/* glass banner */}
        <div className="mx-auto w-max mb-16 rounded-xl px-10 py-4
                        bg-black/70 backdrop-blur-sm shadow-lg">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-red-500">
            Our Apps
          </h1>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map(({ id, title, description, thumbnail, href }) => (
            <a
              key={id}
              href={`/apps/${id}`}
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
