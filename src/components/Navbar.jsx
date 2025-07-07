// src/components/Navbar.jsx
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'

const LINKS = [
  { to: '/',        label: 'Home'    },
  { to: '/games',   label: 'Games'   },
  { to: '/apps',    label: 'Apps'    },
  { to: '/about',   label: 'About'   },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-black/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <img src={logo} alt="RedSails Logo" className="h-6 w-6" />
          <span className="font-heading text-red-400 text-lg">RedSails</span>
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              className={({ isActive }) =>
                `relative font-heading text-sm transition-colors ${
                  isActive
                    ? 'text-red-400 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-red-400'
                    : 'text-white hover:text-red-300'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(o => !o)}
          className="md:hidden p-1 text-white hover:text-red-300"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/50 backdrop-blur-xs overflow-hidden transition-[max-height] duration-300 ${
          open ? 'max-h-56 py-3' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col items-center space-y-2">
          {LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `font-heading text-base transition-colors ${
                  isActive ? 'text-red-400' : 'text-white hover:text-red-300'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
