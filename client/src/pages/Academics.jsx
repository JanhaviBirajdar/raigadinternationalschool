import { Link } from 'react-router-dom';
import RidgeDivider from '../components/RidgeDivider';

const STREAMS = [
  {
    name: 'Science',
    icon: '🔬',
    subjects: ['Physics', 'Chemistry', 'Biology / Mathematics', 'English', 'Computer Science'],
    career: 'Medicine, Engineering, Research, Technology',
  },
  {
    name: 'Commerce',
    icon: '📊',
    subjects: ['Accountancy', 'Business Studies', 'Economics', 'English', 'Mathematics / IP'],
    career: 'CA, MBA, Finance, Entrepreneurship',
  },
  {
    name: 'Humanities',
    icon: '📚',
    subjects: ['History', 'Political Science', 'Geography', 'English', 'Psychology / Sociology'],
    career: 'Law, Civil Services, Media, Education',
  },
];

const PROGRAMS = [
  { icon: '🌱', label: 'Pre-Primary', grades: 'Nursery – KG 2', approach: 'Play-based, Montessori-inspired' },
  { icon: '📖', label: 'Primary',     grades: 'Grades 1 – 5',   approach: 'Activity-led CBSE curriculum' },
  { icon: '🔭', label: 'Middle',      grades: 'Grades 6 – 8',   approach: 'Project & inquiry based' },
  { icon: '🏆', label: 'Secondary',   grades: 'Grades 9 – 10',  approach: 'Board excellence & skill dev' },
  { icon: '🎓', label: 'Sr. Secondary', grades: 'Grades 11 – 12', approach: '3 streams, career counselling' },
];

const EXTRAS = [
  'Robotics & AI Club', 'Eco Rangers (Nature Club)', 'Literary Society',
  'Music & Dance Academy', 'Community Service Corps', 'Model United Nations',
  'Film & Photography Club', 'Math Olympiad Training',
];

export default function Academics() {
  return (
    <main>
      <title>Academics | Raigad International School</title>
      <section className="page-hero">
        <div className="container">
          <span className="overline" style={{ color: 'var(--gold-l)' }}>Academics</span>
          <h1>A Curriculum Built for Tomorrow</h1>
          <p>CBSE rigour enriched with inquiry, creativity and the great Sahyadri outdoors.</p>
        </div>
      </section>
      <RidgeDivider flip bg="var(--sand)" />

      {/* Programmes */}
      <section className="section bg-sand">
        <div className="container">
          <div className="section-heading">
            <span className="overline">Programmes</span>
            <h2>Learning at Every Stage</h2>
            <span className="gold-line gold-line-center" />
          </div>
          <div className="grid-3" style={{ gridTemplateColumns: 'repeat(5,1fr)', gap: 'var(--sp-md)' }}>
            {PROGRAMS.map((p) => (
              <div key={p.label} className="card reveal" style={{ textAlign: 'center' }}>
                <div className="card-body">
                  <div style={{ fontSize: '2.2rem', marginBottom: 'var(--sp-sm)' }}>{p.icon}</div>
                  <h4 style={{ fontSize: 'var(--fs-base)' }}>{p.label}</h4>
                  <span className="badge badge-gold" style={{ margin: '0.4rem 0 0.6rem' }}>{p.grades}</span>
                  <p style={{ fontSize: 'var(--fs-xs)', margin: 0 }}>{p.approach}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Senior streams */}
      <RidgeDivider bg="var(--maroon)" />
      <section className="section bg-maroon">
        <div className="container">
          <div className="section-heading">
            <span className="overline" style={{ color: 'var(--gold-l)' }}>Senior Secondary</span>
            <h2 style={{ color: 'var(--white)' }}>Choose Your Stream</h2>
            <span className="gold-line gold-line-center" />
            <p style={{ color: 'rgba(247,244,236,0.75)' }}>Grades 11 & 12 offer three CBSE streams, each with dedicated mentors and career counselling.</p>
          </div>
          <div className="grid-3">
            {STREAMS.map((s) => (
              <div key={s.name} className="card reveal">
                <div className="card-body">
                  <div style={{ fontSize: '2.5rem', marginBottom: 'var(--sp-sm)' }}>{s.icon}</div>
                  <h3>{s.name}</h3>
                  <span className="gold-line" />
                  <ul style={{ color: 'var(--text-muted)', listStyle: 'disc', paddingLeft: '1.2rem', marginBottom: 'var(--sp-md)' }}>
                    {s.subjects.map((sub) => <li key={sub}>{sub}</li>)}
                  </ul>
                  <span className="badge badge-green">🎯 {s.career}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <RidgeDivider flip bg="var(--sand)" />

      {/* Extra-curricular */}
      <section className="section bg-sand">
        <div className="container">
          <div className="section-heading">
            <span className="overline">Beyond the Classroom</span>
            <h2>Clubs & Activities</h2>
            <span className="gold-line gold-line-center" />
            <p>Because education is bigger than textbooks — our clubs build leadership, creativity and joy.</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-sm)', justifyContent: 'center' }}>
            {EXTRAS.map((e) => (
              <span key={e} className="badge badge-maroon" style={{ fontSize: 'var(--fs-sm)', padding: '0.45rem 1rem' }}>{e}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-sand" style={{ paddingTop: 0, textAlign: 'center' }}>
        <div className="container">
          <h3>Have questions about our curriculum?</h3>
          <span className="gold-line gold-line-center" />
          <p style={{ maxWidth: 480, margin: '0 auto var(--sp-lg)' }}>Our academic counsellors are happy to walk you through the programme best suited for your child.</p>
          <Link to="/contact" className="btn btn-primary" id="academics-contact-btn">Talk to a Counsellor</Link>
        </div>
      </section>

      <style>{`
        @media(max-width:900px){
          .section .grid-3[style] { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media(max-width:600px){
          .section .grid-3[style] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
