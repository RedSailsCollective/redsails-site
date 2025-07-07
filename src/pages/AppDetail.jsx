// src/pages/AppDetail.jsx
import { useParams, Link } from 'react-router-dom';
import CodeRain           from '../components/CodeRain';
import { apps }           from './data/apps';

export default function AppDetail() {
  const { id } = useParams();
  const app = apps.find(a => a.id === id);

  if (!app) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p className="text-xl">App not found.</p>
        <Link to="/apps" className="ml-4 text-red-400 hover:underline">
          Back&nbsp;to Apps
        </Link>
      </div>
    );
  }

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* gradient & rain */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-zinc-900 to-black" />
      <div className="absolute inset-0 z-10 pointer-events-none
                      [mask-image:linear-gradient(to_bottom,black_60%,transparent)]">
        <CodeRain speed={15} fontSize={12} fadeOpacity={0.015} />
      </div>

      {/* glass card */}
      <div className="relative z-20 max-w-3xl mx-auto px-6 py-24">
        <div className="bg-black/70 backdrop-blur-sm rounded-2xl p-10 shadow-lg">
          <Link
            to="/apps"
            className="inline-block mb-8 text-zinc-400 hover:text-white transition"
          >
            ← Back to all apps
          </Link>

          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-red-500 mb-6">
            {app.title}
          </h1>

          <img
            src={app.thumbnail}
            alt={app.title}
            className="mx-auto mb-8 rounded-lg max-h-72 object-cover w-full"
          />

          <p className="font-body text-zinc-300 text-lg leading-relaxed mb-10">
            {app.description}
          </p>

          <a
            href={app.href}
            className="inline-block px-8 py-3 bg-red-600 hover:bg-red-700 rounded-xl font-medium transition"
            target="_blank" rel="noreferrer"
          >
            Download Now
          </a>
        </div>
      </div>
    </section>
  );
}
