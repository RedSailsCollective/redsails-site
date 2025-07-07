// src/pages/Home.jsx
import CodeRain from '../components/CodeRain';
import logo    from '../assets/logo.png';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full min-h-[90vh] overflow-hidden">
        {/* 1) gradient at the very back */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-zinc-900 to-black" />

        {/* 2) code rain just above */}
        <CodeRain
          speed={20}
          fontSize={10}
          fadeOpacity={0.02}
          className="absolute inset-0 z-10"
        />

        {/* 3) hero content on top, centered & shifted down 60px */}
        <div className="relative z-20 flex items-center justify-center h-full px-6 text-center">
          <div className="bg-black/70 backdrop-blur-sm rounded-2xl p-8 max-w-2xl w-full translate-y-16">
            {/* logo */}
            <img
              src={logo}
              alt="RedSails Logo"
              className="h-12 w-auto mx-auto mb-6 drop-shadow-lg"
            />

            {/* heading in Space Grotesk */}
            <h1 className="font-heading text-5xl sm:text-6xl font-bold text-red-500 mb-4 drop-shadow-xl tracking-tight">
              RedSails Collective
            </h1>

            {/* body in Inter */}
            <p className="font-body text-zinc-300 text-lg sm:text-xl max-w-xl mx-auto mb-8 leading-relaxed">
              Info Coming Soon
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/games"
                className="px-6 py-3 border border-zinc-600 hover:border-white
                           text-zinc-300 hover:text-white rounded-xl font-medium transition"
              >
                🎮 Explore Games
              </a>
              <a
                href="/apps"
                className="px-6 py-3 border border-zinc-600 hover:border-white
                           text-zinc-300 hover:text-white rounded-xl font-medium transition"
              >
                💻 Explore Applications & Programs
              </a>
              <a
                href="/about"
                className="px-6 py-3 border border-zinc-600 hover:border-white
                           text-zinc-300 hover:text-white rounded-xl font-medium transition"
              >
                🧭 Our Mission
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="mt-32 px-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:flex-1 space-y-4">
          <h2 className="font-heading text-3xl font-bold text-red-500">
            Who We Are
          </h2>
          <p className="font-body text-zinc-300 leading-relaxed">
            RedSails Collective is a next-gen indie studio empowering creators
            through shared tools, immersive worlds, and fair profit-sharing
            systems. We believe every creator deserves ownership,
            transparency, and a seat at the table.
          </p>
        </div>
        <div className="md:flex-1 flex justify-center">
          <img
            src={logo}
            alt="RedSails Logo"
            className="h-32 w-auto opacity-20"
          />
        </div>
      </section>
    </>
  );
}
