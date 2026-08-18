import RidgeDivider from '../components/RidgeDivider';

const FACILITIES = [
  {
    emoji: '🔬',
    title: 'Science Laboratories',
    desc: 'Three fully equipped labs — Physics, Chemistry, Biology — with modern instruments, digital microscopes, and safety infrastructure. Students from Grade 6 onwards get hands-on lab time every week.',
    detail: 'Physics · Chemistry · Biology · Environmental Science',
  },
  {
    emoji: '💻',
    title: 'Computer & IT Lab',
    desc: 'A 60-seat air-conditioned lab with high-speed internet, latest hardware, and software licences for coding, design and data analysis. Home to our Robotics and AI Club.',
    detail: 'Python · Scratch · Arduino · MS Office · Adobe Suite',
  },
  {
    emoji: '📚',
    title: 'Central Library',
    desc: 'Over 12,000 titles spanning fiction, STEM, reference, and regional literature in Marathi, Hindi and English. Digital catalogue, reading nooks and a quiet study hall.',
    detail: '12,000+ Books · Digital Catalogue · E-Library Access',
  },
  {
    emoji: '🏊',
    title: 'Swimming Pool',
    desc: 'Olympic-size pool with qualified swim coaches. Swimming is a compulsory activity for Grades 4–8 and an elective sport for senior students. Heated in winter.',
    detail: 'Olympic-size · Certified Coaches · Year-round',
  },
  {
    emoji: '🏀',
    title: 'Indoor Sports Complex',
    desc: 'Multi-purpose indoor arena hosting Basketball, Badminton, Volleyball, Table Tennis and Gymnastics. Seats 500 for inter-school competitions.',
    detail: 'Basketball · Badminton · Volleyball · Gymnastics · TT',
  },
  {
    emoji: '🏃',
    title: 'Athletics Track & Ground',
    desc: '400 m IAAF-spec synthetic track surrounding a natural turf cricket and football ground. Fitness trails wind through the Sahyadri foothills at the back of campus.',
    detail: '400 m Track · Cricket · Football · Fitness Trail',
  },
  {
    emoji: '🎨',
    title: 'Art Studio',
    desc: 'Dedicated fine-arts space with easels, potter\'s wheels, a kiln, and printmaking equipment. Our art students exhibit annually at the Sahyadri Cultural Fest.',
    detail: 'Drawing · Painting · Pottery · Printmaking · Sculpture',
  },
  {
    emoji: '🎵',
    title: 'Music & Dance Room',
    desc: 'Soundproofed studio with grand piano, tabla, sitar, guitars, and a dance floor. Professional instructors train students in Bharatanatyam, hip-hop and classical vocal.',
    detail: 'Vocal · Piano · Tabla · Sitar · Bharatanatyam · Hip-hop',
  },
  {
    emoji: '🍽️',
    title: 'Canteen & Dining Hall',
    desc: 'Nutritionist-supervised meal plans. Fresh, wholesome food sourced from local farms. Separate veg and non-veg counters. Special diets accommodated on request.',
    detail: 'Nutritionist Approved · Local Sourced · 500 Seats',
  },
];

export default function Facilities() {
  return (
    <main>
      <title>Facilities | Raigad International School</title>
      <section className="page-hero">
        <div className="container">
          <span className="overline" style={{ color: 'var(--gold-l)' }}>Campus Facilities</span>
          <h1>World-Class Infrastructure, Sahyadri Soul</h1>
          <p>Every facility at RIS is designed to spark curiosity, build skills and nurture well-being.</p>
        </div>
      </section>
      <RidgeDivider flip bg="var(--sand)" />

      {/* Highlights bar */}
      <section className="section-sm" style={{ background: 'linear-gradient(90deg, var(--maroon), var(--indigo))' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 'var(--sp-md)', textAlign: 'center' }}>
            {[['15 Acres', 'Campus Area'], ['9', 'Facility Blocks'], ['400 m', 'Athletic Track'], ['12,000+', 'Library Books']].map(([n, l]) => (
              <div key={l}>
                <div className="stat-number">{n}</div>
                <div className="stat-label">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility grid */}
      <section className="section bg-sand">
        <div className="container">
          <div className="section-heading">
            <span className="overline">Explore Our Facilities</span>
            <h2>Everything a Student Needs</h2>
            <span className="gold-line gold-line-center" />
          </div>
          <div className="grid-3">
            {FACILITIES.map((f) => (
              <div key={f.title} className="card reveal" id={`facility-${f.title.replace(/\s+/g,'-').toLowerCase()}`}>
                <div className="card-body">
                  <div style={{ fontSize: '2.5rem', marginBottom: 'var(--sp-sm)' }}>{f.emoji}</div>
                  <h4>{f.title}</h4>
                  <span className="gold-line" />
                  <p>{f.desc}</p>
                  <div style={{ marginTop: 'auto', padding: '0.5rem 0.75rem', background: 'var(--sand)', borderRadius: 'var(--r-sm)', fontSize: 'var(--fs-xs)', color: 'var(--maroon)', fontWeight: 600 }}>
                    {f.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus SVG */}
      <RidgeDivider bg="var(--indigo-d)" />
      <section className="section bg-indigo">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="overline" style={{ color: 'var(--gold-l)' }}>Campus Illustration</span>
          <h2 style={{ color: 'var(--white)', marginBottom: 'var(--sp-lg)' }}>Our Corner of the Sahyadri</h2>
          <img src="/assets/svg/campus.svg" alt="RIS campus illustration" style={{ maxWidth: 800, margin: '0 auto', borderRadius: 'var(--r-xl)', boxShadow: 'var(--shadow-lg)', border: '2px solid rgba(227,167,46,0.3)' }} />
        </div>
      </section>
      <RidgeDivider flip bg="var(--sand)" />
    </main>
  );
}
