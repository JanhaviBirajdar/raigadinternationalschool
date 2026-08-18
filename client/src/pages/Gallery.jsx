import RidgeDivider from '../components/RidgeDivider';

// Gallery uses emojis as placeholders (replaced by real photos later)
const GALLERY_ITEMS = [
  { emoji: '🎭', label: 'Annual Cultural Fest', cat: 'cultural' },
  { emoji: '🔬', label: 'Science Exhibition', cat: 'academics' },
  { emoji: '🏊', label: 'Swimming Championship', cat: 'sports' },
  { emoji: '🎨', label: 'Art Showcase', cat: 'cultural' },
  { emoji: '🏆', label: 'Sports Meet', cat: 'sports' },
  { emoji: '🌿', label: 'Eco Rangers Activity', cat: 'activities' },
  { emoji: '🎵', label: 'Music Concert', cat: 'cultural' },
  { emoji: '🤖', label: 'Robotics Workshop', cat: 'academics' },
  { emoji: '🏔️', label: 'Sahyadri Trek', cat: 'activities' },
  { emoji: '📖', label: 'Library Day', cat: 'academics' },
  { emoji: '⚽', label: 'Football Match', cat: 'sports' },
  { emoji: '🎓', label: 'Graduation Ceremony', cat: 'events' },
  { emoji: '🌸', label: 'Republic Day Parade', cat: 'events' },
  { emoji: '🍳', label: 'Home Science Fair', cat: 'activities' },
  { emoji: '🎪', label: 'School Carnival', cat: 'cultural' },
  { emoji: '🎯', label: 'Archery Competition', cat: 'sports' },
];

const CATS = ['all', 'cultural', 'academics', 'sports', 'activities', 'events'];

import { useState } from 'react';

export default function Gallery() {
  const [active, setActive] = useState('all');
  const filtered = active === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((g) => g.cat === active);

  return (
    <main>
      <title>Gallery | Raigad International School</title>
      <section className="page-hero">
        <div className="container">
          <span className="overline" style={{ color: 'var(--gold-l)' }}>Gallery</span>
          <h1>Moments That Define Us</h1>
          <p>A visual journey through campus life, events, sport and creativity at RIS.</p>
        </div>
      </section>
      <RidgeDivider flip bg="var(--sand)" />

      <section className="section bg-sand">
        <div className="container">
          {/* Filter tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-sm)', justifyContent: 'center', marginBottom: 'var(--sp-xl)' }}>
            {CATS.map((c) => (
              <button
                key={c}
                id={`gallery-filter-${c}`}
                onClick={() => setActive(c)}
                className={`btn ${active === c ? 'btn-maroon' : 'btn-outline'}`}
                style={{ padding: '0.45rem 1.1rem', fontSize: 'var(--fs-xs)', color: active !== c ? 'var(--maroon)' : undefined, borderColor: active !== c ? 'var(--maroon)' : undefined }}
              >
                {c.charAt(0).toUpperCase() + c.slice(1)}
              </button>
            ))}
          </div>

          {/* Masonry-style grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 'var(--sp-md)' }}>
            {filtered.map((item, i) => (
              <div
                key={item.label}
                className="card reveal"
                id={`gallery-${i}`}
                style={{
                  aspectRatio: i % 5 === 0 ? '16/10' : '4/3',
                  background: `linear-gradient(135deg, var(--${['maroon','indigo','green'][i%3]}), var(--${['indigo','green','maroon'][i%3]}))`,
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <div style={{ fontSize: '3.5rem', marginBottom: 'var(--sp-sm)' }}>{item.emoji}</div>
                <div style={{ color: 'var(--white)', fontWeight: 600, textAlign: 'center', padding: '0 var(--sp-sm)', fontSize: 'var(--fs-sm)' }}>{item.label}</div>
                <span className="badge badge-gold" style={{ marginTop: 'var(--sp-sm)', fontSize: '0.65rem' }}>{item.cat}</span>
              </div>
            ))}
          </div>

          <p style={{ textAlign: 'center', marginTop: 'var(--sp-xl)', color: 'var(--text-muted)', fontSize: 'var(--fs-sm)' }}>
            📸 Full photo albums available on our school's official social media pages.
          </p>
        </div>
      </section>
    </main>
  );
}
