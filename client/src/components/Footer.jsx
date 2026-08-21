import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import './Footer.css';

const LINKS = {
  'Quick Links': [
    { label: 'Home',       to: '/'          },
    { label: 'About Us',   to: '/about'     },
    { label: 'Academics',  to: '/academics' },
    { label: 'Admissions', to: '/admissions'},
    { label: 'Facilities', to: '/facilities'},
  ],
  'School Life': [
    { label: 'Faculty',    to: '/faculty'   },
    { label: 'Events',     to: '/events'    },
    { label: 'Gallery',    to: '/gallery'   },
    { label: 'Blog / News',to: '/blog'      },
    { label: 'Contact',    to: '/contact'   },
  ],
};

export default function Footer() {
  return (
    <footer className="footer">
      {/* Ridge top decoration */}
      <div className="footer__ridge">
        <img src="/assets/svg/ridge.svg" alt="" aria-hidden="true" />
      </div>

      <div className="footer__body">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__brand">
              <div className="footer__logo">
                <img src={logo} alt="RIS Logo" className="footer__logo-img" />
                <div>
                  <div className="footer__logo-name">Raigad</div>
                  <div className="footer__logo-sub">International School</div>
                </div>
              </div>
              <p className="footer__tagline">
                Rooted in Sahyadri soil. Rising toward the world.
              </p>
              <div className="footer__contact-info">
                <div>📍 Near Raigad Fort Road, Panvel, Maharashtra 410206</div>
                <div>📞 <a href="tel:+919000000000">+91 90000 00000</a></div>
                <div>✉️ <a href="mailto:info@raigadschool.edu.in">info@raigadschool.edu.in</a></div>
              </div>
            </div>

            {/* Link groups */}
            {Object.entries(LINKS).map(([group, links]) => (
              <div key={group} className="footer__col">
                <h5 className="footer__col-title">{group}</h5>
                <ul className="footer__nav">
                  {links.map((l) => (
                    <li key={l.to}>
                      <Link to={l.to} className="footer__nav-link">{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter */}
            <div className="footer__col">
              <h5 className="footer__col-title">Stay Updated</h5>
              <p className="footer__newsletter-text">
                Get the latest news, events and announcements delivered to your inbox.
              </p>
              <form
                className="footer__newsletter"
                onSubmit={(e) => { e.preventDefault(); }}
              >
                <input type="email" placeholder="Your email address" required />
                <button type="submit" className="btn btn-primary" style={{ padding: '0.6rem 1rem' }}>
                  →
                </button>
              </form>
              <div className="footer__socials">
                <a href="#" aria-label="Facebook"  className="social-icon">f</a>
                <a href="#" aria-label="Instagram" className="social-icon">📷</a>
                <a href="#" aria-label="YouTube"   className="social-icon">▶</a>
                <a href="#" aria-label="Twitter"   className="social-icon">𝕏</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container flex-between" style={{ flexWrap: 'wrap', gap: '0.5rem' }}>
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} Raigad International School. All rights reserved.
          </p>
          <p style={{ margin: 0, fontSize: 'var(--fs-xs)' }}>
            CBSE Affiliation No. XXXXXXXX | Panvel, Raigad, Maharashtra
          </p>
        </div>
      </div>
    </footer>
  );
}
