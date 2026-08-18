import RidgeDivider from '../components/RidgeDivider';

const DEPARTMENTS = [
  {
    dept: 'Leadership',
    members: [
      { name: 'Dr. Sunita Patil',    role: 'Principal',               qual: 'Ph.D. Education, TISS', exp: '25 yrs', emoji: '👩‍💼' },
      { name: 'Mr. Arun Khedkar',   role: 'Vice Principal',           qual: 'M.Ed., B.Sc.', exp: '18 yrs', emoji: '👨‍💼' },
      { name: 'Ms. Priya Naik',     role: 'Head of Student Welfare',  qual: 'M.A. Psychology', exp: '14 yrs', emoji: '👩‍🏫' },
    ],
  },
  {
    dept: 'Science',
    members: [
      { name: 'Mr. Ravi Kulkarni',  role: 'HOD Science / Physics',   qual: 'M.Sc. Physics', exp: '16 yrs', emoji: '👨‍🔬' },
      { name: 'Ms. Anita More',     role: 'Chemistry',                qual: 'M.Sc. Chemistry', exp: '11 yrs', emoji: '👩‍🔬' },
      { name: 'Dr. Seema Ghorpade', role: 'Biology',                  qual: 'Ph.D. Botany', exp: '9 yrs', emoji: '🌿' },
    ],
  },
  {
    dept: 'Mathematics',
    members: [
      { name: 'Mr. Nilesh Shinde',  role: 'HOD Mathematics',         qual: 'M.Sc. Maths', exp: '20 yrs', emoji: '🔢' },
      { name: 'Ms. Kavitha Rao',    role: 'Mathematics',              qual: 'B.Ed., M.Sc.', exp: '8 yrs', emoji: '📐' },
    ],
  },
  {
    dept: 'Languages',
    members: [
      { name: 'Ms. Sneha Sawant',   role: 'HOD English',             qual: 'M.A. English', exp: '13 yrs', emoji: '📖' },
      { name: 'Mr. Vikas Pawar',    role: 'Marathi & Hindi',         qual: 'M.A. Marathi', exp: '10 yrs', emoji: '📝' },
    ],
  },
  {
    dept: 'Social Studies',
    members: [
      { name: 'Ms. Meena Jadhav',   role: 'History & Civics',        qual: 'M.A. History', exp: '12 yrs', emoji: '🏛️' },
      { name: 'Mr. Suresh Kamble',  role: 'Geography',               qual: 'M.A. Geography', exp: '7 yrs', emoji: '🗺️' },
    ],
  },
  {
    dept: 'Commerce & Economics',
    members: [
      { name: 'Ms. Dipti Gokhale',  role: 'HOD Commerce',            qual: 'M.Com, B.Ed.', exp: '15 yrs', emoji: '📊' },
      { name: 'Mr. Amol Thakur',    role: 'Economics',               qual: 'M.A. Economics', exp: '9 yrs', emoji: '💹' },
    ],
  },
  {
    dept: 'Co-Curricular',
    members: [
      { name: 'Ms. Radha Varma',    role: 'Music & Dance',           qual: 'Diploma Bharatanatyam', exp: '11 yrs', emoji: '🎵' },
      { name: 'Mr. Sameer Desai',   role: 'Physical Education',      qual: 'B.P.Ed.', exp: '8 yrs', emoji: '⚽' },
      { name: 'Ms. Priti Chavan',   role: 'Art & Craft',             qual: 'BFA, JJSA', exp: '10 yrs', emoji: '🎨' },
    ],
  },
];

export default function Faculty() {
  return (
    <main>
      <title>Faculty | Raigad International School</title>
      <section className="page-hero">
        <div className="container">
          <span className="overline" style={{ color: 'var(--gold-l)' }}>Our Faculty</span>
          <h1>Mentors Who Inspire</h1>
          <p>80+ qualified educators committed to drawing out the best in every student.</p>
        </div>
      </section>
      <RidgeDivider flip bg="var(--sand)" />

      {DEPARTMENTS.map((dept, di) => (
        <section
          key={dept.dept}
          className="section-sm"
          style={{ background: di % 2 === 0 ? 'var(--sand)' : 'var(--sand-d)' }}
          id={`dept-${dept.dept.toLowerCase()}`}
        >
          <div className="container">
            <div style={{ marginBottom: 'var(--sp-lg)' }}>
              <span className="overline">Department</span>
              <h2>{dept.dept}</h2>
              <span className="gold-line" />
            </div>
            <div className="grid-3">
              {dept.members.map((m) => (
                <div key={m.name} className="card reveal" style={{ textAlign: 'center' }} id={`faculty-${m.name.replace(/\s+/g,'-').toLowerCase()}`}>
                  <div className="card-body">
                    <div style={{ fontSize: '3rem', marginBottom: 'var(--sp-sm)' }}>{m.emoji}</div>
                    <h4 style={{ fontSize: 'var(--fs-lg)' }}>{m.name}</h4>
                    <span className="badge badge-maroon" style={{ marginBottom: 'var(--sp-sm)' }}>{m.role}</span>
                    <span className="gold-line gold-line-center" />
                    <p style={{ fontSize: 'var(--fs-xs)', margin: '0 0 var(--sp-xs)' }}>🎓 {m.qual}</p>
                    <p style={{ fontSize: 'var(--fs-xs)', margin: 0 }}>⏱ {m.exp} experience</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section bg-sand" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2>Join Our Teaching Team</h2>
          <span className="gold-line gold-line-center" />
          <p style={{ maxWidth: 500, margin: '0 auto var(--sp-lg)' }}>
            We are always looking for passionate, qualified educators to join the RIS family. Send your CV to{' '}
            <a href="mailto:careers@raigadschool.edu.in" style={{ color: 'var(--maroon)', fontWeight: 600 }}>careers@raigadschool.edu.in</a>
          </p>
        </div>
      </section>
    </main>
  );
}
