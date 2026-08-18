import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home',       to: '/'          },
  { label: 'About',      to: '/about'     },
  { label: 'Academics',  to: '/academics' },
  { label: 'Admissions', to: '/admissions'},
  { label: 'Facilities', to: '/facilities'},
  { label: 'Faculty',    to: '/faculty'   },
  { label: 'Events',     to: '/events'    },
  { label: 'Gallery',    to: '/gallery'   },
  { label: 'Blog',       to: '/blog'      },
  { label: 'Contact',    to: '/contact'   },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container flex-between">
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={() => setMenuOpen(false)}>
          <div className="navbar__logo-emblem">
            <span className="logo-fort">⛰</span>
          </div>
          <div className="navbar__logo-text">
            <span className="logo-name">Raigad</span>
            <span className="logo-sub">International School</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="navbar__links">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
              end={l.to === '/'}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="navbar__actions">
          <Link to="/admissions" className="btn btn-primary navbar__cta">
            Apply Now
          </Link>
          <button
            className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        {NAV_LINKS.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            className="mobile-menu__link"
            onClick={() => setMenuOpen(false)}
            end={l.to === '/'}
          >
            {l.label}
          </NavLink>
        ))}
        <Link
          to="/admissions"
          className="btn btn-primary"
          style={{ margin: '1rem 1.5rem' }}
          onClick={() => setMenuOpen(false)}
        >
          Apply Now
        </Link>
      </div>
    </header>
  );
}
