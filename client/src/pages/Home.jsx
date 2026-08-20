import { Link } from 'react-router-dom';
import { useEffect, useRef, useCallback } from 'react';
import RidgeDivider from '../components/RidgeDivider';
import FloatingIcons from '../components/FloatingIcons';
import './Home.css';

const STATS = [
  { n: '25+', label: 'Years of Excellence', icon: '🏅', iconClass: 'stat-icon--years', numericEnd: 25, suffix: '+' },
  { n: '3500+', label: 'Alumni Worldwide', icon: '🌍', iconClass: 'stat-icon--alumni', numericEnd: 3500, suffix: '+' },
  { n: '80+', label: 'Expert Faculty', icon: '👨‍🏫', iconClass: 'stat-icon--faculty', numericEnd: 80, suffix: '+' },
  { n: '98%', label: 'Board Pass Rate', icon: '📊', iconClass: 'stat-icon--rate', numericEnd: 98, suffix: '%' },
];

const FEATURES = [
  { icon: '🎓', title: 'CBSE Curriculum', desc: 'Nursery to Grade 12 with Science, Commerce and Humanities streams.', accent: 'blue' },
  { icon: '🏔️', title: 'Sahyadri Campus', desc: '15-acre campus nestled in the Raigad foothills — a living classroom.', accent: 'green' },
  { icon: '🔬', title: 'Modern Labs', desc: 'Physics, Chemistry, Biology and Computer labs with latest equipment.', accent: 'saffron' },
  { icon: '⚽', title: 'Sports Complex', desc: 'Indoor sports hall, swimming pool, and 400 m athletic track.', accent: 'blue' },
  { icon: '🎨', title: 'Arts & Culture', desc: 'Art studio, music room, drama stage and annual Sahyadri Fest.', accent: 'green' },
  { icon: '🚌', title: 'Transport', desc: 'Safe, GPS-tracked bus fleet serving Panvel, Kharghar and beyond.', accent: 'saffron' },
];

const TESTIMONIALS = [
  {
    quote: 'Raigad International gave my daughter not just a degree but a worldview. The teachers here are truly invested.',
    name: 'Mrs. Pooja Deshmukh',
    role: 'Parent, Grade 10',
    stars: 5,
  },
  {
    quote: 'The blend of CBSE rigour and Sahyadri outdoor learning is unlike anything I\'ve seen in other schools.',
    name: 'Mr. Rahul Patil',
    role: 'Alumni, Class of 2019',
    stars: 5,
  },
  {
    quote: 'Admissions were smooth, staff very helpful. Our son has blossomed since joining. Highly recommend!',
    name: 'Mr. Sandeep Joshi',
    role: 'Parent, Grade 6',
    stars: 5,
  },
];

/* ── Animated counter hook ──────────────────────────────────── */
function useCounterAnimation() {
  const observerRef = useRef(null);

  const initCounters = useCallback(() => {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const end = parseInt(el.dataset.counterEnd, 10);
            const suffix = el.dataset.counterSuffix || '';

            if (prefersReduced) {
              el.textContent = end + suffix;
              observerRef.current.unobserve(el);
              return;
            }

            const duration = 1800;
            const startTime = performance.now();

            function animate(currentTime) {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Ease out cubic
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = Math.round(eased * end);
              el.textContent = current + suffix;
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            }
            requestAnimationFrame(animate);
            observerRef.current.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );

    counters.forEach((el) => observerRef.current.observe(el));
  }, []);

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(initCounters, 100);
    return () => {
      clearTimeout(timer);
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [initCounters]);
}

export default function Home() {
  useCounterAnimation();

  return (
    <main className="home">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="hero" id="hero">
        {/* Floating clouds */}
        <div className="hero__cloud hero__cloud--1" aria-hidden="true" />
        <div className="hero__cloud hero__cloud--2" aria-hidden="true" />
        <div className="hero__cloud hero__cloud--3" aria-hidden="true" />

        {/* Floating birds */}
        <div className="hero__birds" aria-hidden="true">
          <span className="hero__bird">🕊</span>
          <span className="hero__bird">🕊</span>
          <span className="hero__bird">🕊</span>
        </div>

        <FloatingIcons count={7}>
          <div className="hero__inner container">
            <div className="hero__text animate-fadeIn">
              <span className="overline" style={{ color: 'var(--golden)', letterSpacing: '0.18em', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>
                Panvel · Raigad · Maharashtra
              </span>
              <h1 className="hero__title">
                Rooted in<br />
                <span className="hero__title-accent">Sahyadri Soil.</span><br />
                Rising Toward<br />the <span className="hero__title-accent">World.</span>
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
      <RidgeDivider bg="var(--ivory)" />

      {/* ── Stats strip ──────────────────────────────────────── */}
      <section className="stats-strip" id="statistics">
        <div className="container">
          <div className="stats-grid">
            {STATS.map((s, i) => (
              <div key={s.label} className="stat-item reveal" data-delay={i + 1}>
                <div className={`stat-icon ${s.iconClass}`}>{s.icon}</div>
                <div
                  className="stat-number"
                  data-counter
                  data-counter-end={s.numericEnd}
                  data-counter-suffix={s.suffix}
                >
                  0{s.suffix}
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features / Why RIS ───────────────────────────────── */}
      <section className="section features-section" id="features">
        <div className="container">
          <div className="section-heading">
            <span className="overline">Why Choose Us</span>
            <h2>Where Every Child Thrives</h2>
            <span className="gold-line gold-line-center" />
            <p>From the classroom to the climbing trail, Raigad International nurtures curious minds, confident hearts, and compassionate citizens.</p>
          </div>
          <div className="grid-3">
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className="card reveal"
                data-delay={(i % 3) + 1}
                data-accent={f.accent}
                id={`feature-${f.title.replace(/\s+/g,'-').toLowerCase()}`}
              >
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
        <RidgeDivider bg="var(--primary-blue)" />
        <div className="campus-strip__body">
          <div className="container flex-between" style={{ gap: 'var(--sp-xl)', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 340px' }} className="reveal">
              <span className="overline" style={{ color: 'var(--golden)' }}>Our Campus</span>
              <h2 style={{ color: 'var(--white)' }}>15 Acres of Living Learning</h2>
              <span className="gold-line" />
              <p style={{ color: 'rgba(255,255,255,0.85)' }}>
                Set against the dramatic Sahyadri backdrop, our campus is more than a school — it's an ecosystem where curiosity grows as tall as the hills.
                Trek trails, organic gardens, and open-air amphitheatres sit beside world-class labs and libraries.
              </p>
              <Link to="/facilities" className="btn btn-primary" style={{ marginTop: 'var(--sp-md)' }}>
                Explore Facilities
              </Link>
            </div>
            <div style={{ flex: '1 1 340px', position: 'relative' }} className="reveal" data-delay="2">
              <div className="campus-img-wrapper">
                <img
                  src="/assets/svg/campus.svg"
                  alt="Campus illustration"
                />
              </div>
              {/* Floating decorations */}
              <span className="campus-decor campus-decor--leaf-1" aria-hidden="true">🍃</span>
              <span className="campus-decor campus-decor--leaf-2" aria-hidden="true">🌿</span>
              <span className="campus-decor campus-decor--bird" aria-hidden="true">🕊</span>
              <div className="campus-decor campus-decor--cloud" aria-hidden="true" />
            </div>
          </div>
        </div>
        <RidgeDivider flip bg="var(--cream)" />
      </section>

      {/* ── Admissions CTA ───────────────────────────────────── */}
      <section className="admissions-cta section">
        <div className="container">
          <div className="admissions-cta__card glass-dark reveal">
            <span className="overline" style={{ color: 'var(--golden)' }}>Admissions Open</span>
            <h2 style={{ color: 'var(--white)' }}>Secure Your Child's Seat for 2025–26</h2>
            <span className="gold-line gold-line-center" />
            <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 560, margin: '0 auto var(--sp-lg)' }}>
              Limited seats available across Nursery to Grade 11. Register your interest today and our admissions team will guide you through every step.
            </p>
            <div style={{ display: 'flex', gap: 'var(--sp-md)', justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
              <Link to="/admissions" className="btn btn-primary" id="home-admissions-cta">Apply Now</Link>
              <Link to="/contact" className="btn btn-outline" id="home-contact-cta">Schedule a Visit</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="section testimonials-section" id="testimonials">
        <div className="container">
          <div className="section-heading">
            <span className="overline">Testimonials</span>
            <h2>What Families Say</h2>
            <span className="gold-line gold-line-center" />
          </div>
          <div className="grid-3">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testimonial-card card reveal" data-delay={i + 1} id={`testimonial-${i}`}>
                <div className="card-body">
                  <div className="quote-mark">"</div>
                  {t.stars && (
                    <div className="testimonial-stars">
                      {Array.from({ length: t.stars }, (_, j) => (
                        <span key={j}>★</span>
                      ))}
                    </div>
                  )}
                  <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic', lineHeight: 1.65 }}>
                    {t.quote}
                  </p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{t.name[0]}</div>
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--primary-blue)', fontSize: 'var(--fs-sm)' }}>{t.name}</div>
                      <div style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-secondary)' }}>{t.role}</div>
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
