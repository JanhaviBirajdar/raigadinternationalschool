import { useEffect, useState } from 'react';
import axios from 'axios';
import RidgeDivider from '../components/RidgeDivider';

const SAMPLE_POSTS = [
  {
    title: 'Raigad Heritage Day 2025 — A Grand Celebration of Our Roots',
    slug: 'raigad-heritage-day-2025',
    excerpt: 'Students brought history to life with fort-model exhibitions, Marathi performances, and a guest lecture from historian Dr. N. Kale.',
    author: 'RIS Editorial Team',
    category: 'Events',
    createdAt: '2025-08-10T00:00:00.000Z',
  },
  {
    title: 'Our Students Win Gold at State Science Olympiad',
    slug: 'science-olympiad-gold-2025',
    excerpt: 'Grade 9 students Rohan Desai and Aanya Kulkarni clinched first place in the Maharashtra State Science Olympiad, beating 120 schools.',
    author: 'RIS Editorial Team',
    category: 'Achievements',
    createdAt: '2025-07-28T00:00:00.000Z',
  },
  {
    title: 'Monsoon Eco-Trek — 80 Students Explore the Sahyadri Wilderness',
    slug: 'monsoon-eco-trek-2025',
    excerpt: 'Our Eco Rangers club led the annual monsoon nature walk through the biodiversity hotspot behind campus, identifying 34 plant species.',
    author: 'Ms. Priya Naik',
    category: 'Activities',
    createdAt: '2025-07-15T00:00:00.000Z',
  },
  {
    title: 'New Robotics Lab Inaugurated by District Collector',
    slug: 'robotics-lab-inauguration',
    excerpt: 'The state-of-the-art Robotics & AI lab, featuring 30 Arduino workstations and a drone arena, was officially opened this July.',
    author: 'RIS Editorial Team',
    category: 'Campus',
    createdAt: '2025-07-01T00:00:00.000Z',
  },
  {
    title: 'Grade 12 Board Results — 98% Pass, 12 Distinctions',
    slug: 'board-results-2025',
    excerpt: 'The class of 2025 delivered stellar CBSE board results. 12 students scored above 95%, with Tanvi More topping at 98.6%.',
    author: 'RIS Editorial Team',
    category: 'Achievements',
    createdAt: '2025-06-05T00:00:00.000Z',
  },
  {
    title: 'Annual Sahyadri Cultural Fest Registrations Open',
    slug: 'sahyadri-fest-registrations',
    excerpt: 'The most anticipated event of the year returns on 15 September. Solo and group entries open across music, dance, drama, and visual arts.',
    author: 'Cultural Committee',
    category: 'Events',
    createdAt: '2025-08-01T00:00:00.000Z',
  },
];

const CAT_COLORS = {
  Events: 'badge-maroon', Achievements: 'badge-green', Activities: 'badge-gold',
  Campus: 'badge-indigo', News: 'badge-indigo',
};

export default function Blog() {
  const [posts, setPosts] = useState(SAMPLE_POSTS);

  useEffect(() => {
    axios.get('/api/blog')
      .then(({ data }) => { if (data.length) setPosts(data); })
      .catch(() => { });
  }, []);

  return (
    <main>
      <title>Blog & News | Raigad International School</title>
      <section className="page-hero">
        <div className="container">
          <span className="overline" style={{ color: 'var(--gold-l)' }}>News & Blog</span>
          <h1>Stories From Our Campus</h1>
          <p>Achievements, events, ideas and voices from the RIS community.</p>
        </div>
      </section>
      <RidgeDivider flip bg="var(--sand)" />

      <section className="section bg-sand">
        <div className="container">
          <div className="grid-3">
            {posts.map((post, i) => (
              <article key={post.slug || i} className="card reveal" id={`blog-${post.slug || i}`}>
                {/* Coloured top band */}
                <div style={{ height: 6, background: `linear-gradient(90deg, var(--${['maroon', 'indigo', 'green'][i % 3]}), transparent)` }} />
                <div className="card-body" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.3rem', marginBottom: 'var(--sp-sm)' }}>
                    <span className={`badge ${CAT_COLORS[post.category] || 'badge-indigo'}`}>{post.category}</span>
                    <span style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-muted)' }}>
                      {new Date(post.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                  <h4 style={{ fontSize: 'var(--fs-lg)', marginBottom: 'var(--sp-sm)' }}>{post.title}</h4>
                  <span className="gold-line" />
                  <p style={{ flexGrow: 1, fontSize: 'var(--fs-sm)' }}>{post.excerpt}</p>
                  <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.4rem' }}>
                    <span style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-muted)' }}>✍️ {post.author}</span>
                    <button className="btn btn-maroon" style={{ padding: '0.35rem 0.9rem', fontSize: 'var(--fs-xs)' }}>
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
