import { Link } from 'react-router-dom';
import RidgeDivider from '../components/RidgeDivider';
import FloatingIcons from '../components/FloatingIcons';
import './Home.css';

const STATS = [
  { n: '25+', label: 'Years of Excellence' },
  { n: '3500+', label: 'Alumni Worldwide' },
  { n: '80+', label: 'Expert Faculty' },
  { n: '98%', label: 'Board Pass Rate' },
];

const FEATURES = [
  { icon: '🎓', title: 'CBSE Curriculum', desc: 'Nursery to Grade 12 with Science, Commerce and Humanities streams.' },
  { icon: '🏔️', title: 'Sahyadri Campus', desc: '15-acre campus nestled in the Raigad foothills — a living classroom.' },
  { icon: '🔬', title: 'Modern Labs', desc: 'Physics, Chemistry, Biology and Computer labs with latest equipment.' },
  { icon: '⚽', title: 'Sports Complex', desc: 'Indoor sports hall, swimming pool, and 400 m athletic track.' },
  { icon: '🎨', title: 'Arts & Culture', desc: 'Art studio, music room, drama stage and annual Sahyadri Fest.' },
  { icon: '🚌', title: 'Transport', desc: 'Safe, GPS-tracked bus fleet serving Panvel, Kharghar and beyond.' },
];

const TESTIMONIALS = [
  {
    quote: 'Raigad International gave my daughter not just a degree but a worldview. The teachers here are truly invested.',
    name: 'Mrs. Pooja Deshmukh',
    role: 'Parent, Grade 10',
  },
  {
    quote: 'The blend of CBSE rigour and Sahyadri outdoor learning is unlike anything I\'ve seen in other schools.',
    name: 'Mr. Rahul Patil',
    role: 'Alumni, Class of 2019',
  },
  {
    quote: 'Admissions were smooth, staff very helpful. Our son has blossomed since joining. Highly recommend!',
    name: 'Mr. Sandeep Joshi',
    role: 'Parent, Grade 6',
  },
];

export default function Home() {
  return (
    <main className="home">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="hero" id="hero">
        <FloatingIcons count={7}>
          <div className="hero__inner container">
            <div className="hero__text animate-fadeIn">
              <span className="overline" style={{ color: 'var(--gold-l)', letterSpacing: '0.18em', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>
                Panvel · Raigad · Maharashtra
              </span>
              <h1 className="hero__title">
                Rooted in<br />
                <span className="hero__title-accent">Sahyadri Soil.</span><br />
                Rising Toward<br />the World.
              </h1>
              <p className="hero__sub">
                A CBSE school shaped by the spirit of Raigad Fort — blending
                academic rigour with the values of courage, nature and community.
              </p>
              <div className="hero__cta-group">
                <Link to="/admissions" className="btn btn-primary" id="hero-apply-btn">Apply for 2025–26</Link>
                <Link to="/about" className="btn btn-outline" id="hero-about-btn">Discover Our Story</Link>
              </div>
            </div>
            <div className="hero__campus animate-scaleIn">
              <img
                src="/assets/svg/campus.svg"
                alt="Raigad International School campus illustration"
                className="hero__campus-img"
              />
            </div>
          </div>
        </FloatingIcons>
      </section>

      {/* Ridge divider */}
      <RidgeDivider bg="var(--indigo-d)" />

      {/* ── Stats strip ──────────────────────────────────────── */}
      <section className="stats-strip bg-indigo">
        <div className="container">
          <div className="stats-grid">
            {STATS.map((s) => (
              <div key={s.label} className="stat-item">
                <div className="stat-number">{s.n}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RidgeDivider flip bg="var(--sand)" />

      {/* ── Features / Why RIS ───────────────────────────────── */}
      <section className="section bg-sand" id="features">
        <div className="container">
          <div className="section-heading">
            <span className="overline">Why Choose Us</span>
            <h2>Where Every Child Thrives</h2>
            <span className="gold-line gold-line-center" />
            <p>From the classroom to the climbing trail, Raigad International nurtures curious minds, confident hearts, and compassionate citizens.</p>
          </div>
          <div className="grid-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="card reveal" id={`feature-${f.title.replace(/\s+/g,'-').toLowerCase()}`}>
                <div className="card-body">
                  <div className="card-icon">{f.icon}</div>
                  <h4>{f.title}</h4>
                  <span className="gold-line" />
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Campus illustration strip ────────────────────────── */}
      <section className="campus-strip">
        <RidgeDivider bg="var(--maroon)" />
        <div className="campus-strip__body bg-maroon">
          <div className="container flex-between" style={{ gap: 'var(--sp-xl)', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 340px' }}>
              <span className="overline" style={{ color: 'var(--gold-l)' }}>Our Campus</span>
              <h2 style={{ color: 'var(--sand)' }}>15 Acres of Living Learning</h2>
              <span className="gold-line" />
              <p style={{ color: 'rgba(247,244,236,0.8)' }}>
                Set against the dramatic Sahyadri backdrop, our campus is more than a school — it's an ecosystem where curiosity grows as tall as the hills.
                Trek trails, organic gardens, and open-air amphitheatres sit beside world-class labs and libraries.
              </p>
              <Link to="/facilities" className="btn btn-primary" style={{ marginTop: 'var(--sp-md)' }}>
                Explore Facilities
              </Link>
            </div>
            <div style={{ flex: '1 1 340px' }}>
              <img
                src="/assets/svg/campus.svg"
                alt="Campus illustration"
                style={{ border: '3px solid rgba(227,167,46,0.4)', borderRadius: 'var(--r-lg)' }}
              />
            </div>
          </div>
        </div>
        <RidgeDivider flip bg="var(--sand)" />
      </section>

      {/* ── Admissions CTA ───────────────────────────────────── */}
      <section className="admissions-cta section bg-sand">
        <div className="container">
          <div className="admissions-cta__card glass-dark" style={{ background: 'linear-gradient(135deg, var(--indigo), var(--maroon-d))', borderRadius: 'var(--r-xl)', padding: 'var(--sp-2xl) var(--sp-xl)', textAlign: 'center' }}>
            <span className="overline" style={{ color: 'var(--gold-l)' }}>Admissions Open</span>
            <h2 style={{ color: 'var(--white)' }}>Secure Your Child's Seat for 2025–26</h2>
            <span className="gold-line gold-line-center" />
            <p style={{ color: 'rgba(247,244,236,0.8)', maxWidth: 560, margin: '0 auto var(--sp-lg)' }}>
              Limited seats available across Nursery to Grade 11. Register your interest today and our admissions team will guide you through every step.
            </p>
            <div style={{ display: 'flex', gap: 'var(--sp-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/admissions" className="btn btn-primary" id="home-admissions-cta">Apply Now</Link>
              <Link to="/contact" className="btn btn-outline" id="home-contact-cta">Schedule a Visit</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="section bg-sand" id="testimonials">
        <div className="container">
          <div className="section-heading">
            <span className="overline">Testimonials</span>
            <h2>What Families Say</h2>
            <span className="gold-line gold-line-center" />
          </div>
          <div className="grid-3">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testimonial-card card reveal" id={`testimonial-${i}`}>
                <div className="card-body">
                  <div className="quote-mark">"</div>
                  <p style={{ color: 'var(--text)', fontStyle: 'italic', lineHeight: 1.65 }}>
                    {t.quote}
                  </p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{t.name[0]}</div>
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--maroon)', fontSize: 'var(--fs-sm)' }}>{t.name}</div>
                      <div style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-muted)' }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
