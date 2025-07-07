// src/components/Footer.jsx
import { Twitter, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-24 relative bg-black text-slate-400">
      {/* Top Accent Bar */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-600 via-purple-600 to-red-600" />

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* About */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">About RedSails</h3>
          <p className="text-sm leading-relaxed">
            We build bold, immersive games and creator-first tools.
            Rooted in transparency, fair profit-sharing, and shared imagination.
          </p>
        </div>

        {/* Quick Links */}
        <nav className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/privacy"
                className="text-sm hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="text-sm hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-sm hover:text-white transition-colors"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* Social + Newsletter */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Stay Connected</h3>
          <div className="flex items-center space-x-4">
           
            <a
              href="https://github.com/RedSailsCollective"
              aria-label="GitHub"
              className="hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
          </div>
          <form
            className="mt-4 flex flex-col sm:flex-row items-center gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email"
              className="w-full sm:flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm placeholder-slate-500 focus:outline-none focus:border-red-500 transition"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg text-sm transition active:scale-95"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-800" />

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} RedSails Collective. All rights reserved.
      </div>
    </footer>
  );
}
