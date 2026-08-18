import { Link } from 'react-router-dom';
import RidgeDivider from '../components/RidgeDivider';

const TIMELINE = [
  { year: '1999', event: 'School founded by the Raigad Education Trust on 5 acres near Panvel.' },
  { year: '2004', event: 'CBSE affiliation obtained. First Board batch achieves 94% pass rate.' },
  { year: '2009', event: 'New science block and library inaugurated. Student strength crosses 800.' },
  { year: '2014', event: 'Sports complex with swimming pool opens. Senior secondary wing added.' },
  { year: '2019', event: 'Expanded to 15-acre campus. Digital smart classrooms rolled out.' },
  { year: '2024', event: '25th anniversary. 3,500+ alumni across India and abroad.' },
];

const LEADERSHIP = [
  { name: 'Dr. Sunita Patil', role: 'Principal', emoji: '👩‍💼', bio: 'Ph.D. in Education from TISS. 25 years of school leadership. Champion of inclusive education.' },
  { name: 'Mr. Arun Khedkar', role: 'Vice-Principal (Academics)', emoji: '👨‍🏫', bio: 'M.Ed., 18 years. Curriculum architect behind RIS\'s inquiry-based learning framework.' },
  { name: 'Ms. Priya Naik', role: 'Head of Student Welfare', emoji: '👩‍🏫', bio: 'Counsellor and sports advocate. Leads the school\'s mental wellness programme.' },
];

const VALUES = [
  { icon: '🌿', title: 'Rootedness', desc: 'We honour our region\'s history, ecology and culture as a living curriculum.' },
  { icon: '🔭', title: 'Inquiry', desc: 'Questions are celebrated. Every child is a scientist, artist and storyteller.' },
  { icon: '🤝', title: 'Community', desc: 'School, family and village grow together. No child is left behind.' },
  { icon: '🌅', title: 'Rising', desc: 'Like the Sahyadri peaks, our students are always climbing — at their own pace.' },
];

export default function About() {
  return (
    <main>
      <title>About Us | Raigad International School</title>

      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="overline" style={{ color: 'var(--gold-l)' }}>Our Story</span>
          <h1>25 Years of Nurturing Excellence</h1>
          <p>From a single classroom to a 15-acre thriving campus — rooted in Raigad, reaching the world.</p>
        </div>
      </section>

      <RidgeDivider flip bg="var(--sand)" />

      {/* Vision & Mission */}
      <section className="section bg-sand">
        <div className="container">
          <div className="grid-2" style={{ gap: 'var(--sp-2xl)', alignItems: 'center' }}>
            <div>
              <span className="overline">Vision</span>
              <h2>To Inspire Every Child to Rise</h2>
              <span className="gold-line" />
              <p>
                Raigad International School envisions a world where every young person, regardless of background, has access to education that kindles curiosity, builds character, and cultivates a sense of global citizenship.
              </p>
              <p>
                Our students graduate not just with marks, but with the ability to think independently, communicate clearly, care deeply, and lead with integrity.
              </p>
            </div>
            <div className="card" style={{ overflow: 'hidden' }}>
              <img src="/assets/svg/campus.svg" alt="School campus" style={{ width: '100%' }} />
              <div className="card-body">
                <h4>Our Mission</h4>
                <span className="gold-line" />
                <p>
                  To deliver a CBSE education enriched by the Sahyadri's natural classroom — blending academic rigour, experiential learning, arts, sports, and community service into a unified journey of growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <RidgeDivider bg="var(--indigo)" />
      <section className="section bg-indigo">
        <div className="container">
          <div className="section-heading">
            <span className="overline" style={{ color: 'var(--gold-l)' }}>Our Core Values</span>
            <h2 style={{ color: 'var(--white)' }}>What We Stand For</h2>
            <span className="gold-line gold-line-center" />
          </div>
          <div className="grid-4">
            {VALUES.map((v) => (
              <div key={v.title} className="card reveal" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="card-body" style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: 'var(--sp-sm)' }}>{v.icon}</div>
                  <h4 style={{ color: 'var(--gold)' }}>{v.title}</h4>
                  <span className="gold-line gold-line-center" />
                  <p style={{ color: 'rgba(247,244,236,0.75)' }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <RidgeDivider flip bg="var(--sand)" />

      {/* Timeline */}
      <section className="section bg-sand">
        <div className="container">
          <div className="section-heading">
            <span className="overline">History</span>
            <h2>Our Journey Through Time</h2>
            <span className="gold-line gold-line-center" />
          </div>
          <div className="timeline">
            {TIMELINE.map((t, i) => (
              <div key={t.year} className={`timeline-item ${i % 2 === 0 ? 'timeline-item--left' : 'timeline-item--right'}`}>
                <div className="timeline-year">{t.year}</div>
                <div className="timeline-dot" />
                <div className="timeline-content card">
                  <div className="card-body"><p style={{ margin: 0 }}>{t.event}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section" style={{ background: 'var(--sand-d)' }}>
        <div className="container">
          <div className="section-heading">
            <span className="overline">Leadership</span>
            <h2>The Team Behind the Vision</h2>
            <span className="gold-line gold-line-center" />
          </div>
          <div className="grid-3">
            {LEADERSHIP.map((l) => (
              <div key={l.name} className="card reveal" style={{ textAlign: 'center' }}>
                <div className="card-body">
                  <div style={{ fontSize: '3rem', marginBottom: 'var(--sp-sm)' }}>{l.emoji}</div>
                  <h4>{l.name}</h4>
                  <span className="badge badge-gold" style={{ marginBottom: 'var(--sp-sm)' }}>{l.role}</span>
                  <span className="gold-line gold-line-center" />
                  <p>{l.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-sand" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2>Ready to Be Part of Our Story?</h2>
          <span className="gold-line gold-line-center" />
          <p style={{ maxWidth: 500, margin: '0 auto var(--sp-lg)' }}>Admissions for 2025–26 are open. Join the RIS family today.</p>
          <Link to="/admissions" className="btn btn-primary" id="about-admissions-cta">Apply Now</Link>
        </div>
      </section>

      <style>{`
        .timeline { position: relative; max-width: 800px; margin: 0 auto; }
        .timeline::before { content: ''; position: absolute; left: 50%; top: 0; bottom: 0; width: 2px; background: linear-gradient(to bottom, var(--gold), var(--maroon)); transform: translateX(-50%); }
        .timeline-item { display: grid; grid-template-columns: 1fr 32px 1fr; align-items: center; gap: var(--sp-md); margin-bottom: var(--sp-lg); }
        .timeline-year { font-family: 'Fraunces', serif; font-size: var(--fs-xl); font-weight: 700; color: var(--gold); }
        .timeline-item--left .timeline-year { text-align: right; }
        .timeline-item--right .timeline-year { order: 2; text-align: left; }
        .timeline-item--right .timeline-dot  { order: 1; }
        .timeline-item--right .timeline-content { order: 0; }
        .timeline-dot { width: 16px; height: 16px; border-radius: 50%; background: var(--gold); border: 3px solid var(--maroon); justify-self: center; }
        @media (max-width: 600px) {
          .timeline::before { left: 20px; }
          .timeline-item { grid-template-columns: 32px 1fr; }
          .timeline-year { display: none; }
          .timeline-item--right .timeline-content { order: 1; }
          .timeline-item--right .timeline-dot { order: 0; }
        }
      `}</style>
    </main>
  );
}
