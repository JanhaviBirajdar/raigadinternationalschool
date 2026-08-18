import { useState } from 'react';
import axios from 'axios';
import RidgeDivider from '../components/RidgeDivider';

const STEPS = [
  { icon: '📋', title: 'Registration', desc: 'Fill in the online enquiry form or visit the school office.' },
  { icon: '📝', title: 'Application', desc: 'Submit the completed application with required documents.' },
  { icon: '🗣️', title: 'Interaction', desc: 'Attend a brief parent-student interaction with our counsellors.' },
  { icon: '📣', title: 'Admission', desc: 'Receive your offer letter and complete fee payment to confirm.' },
];

const DOCS = ['Birth Certificate', 'Previous School TC & Mark Sheets', '2 Passport-size Photos', 'Aadhar Card (child & parent)', 'Address Proof', 'Caste Certificate (if applicable)'];

const FEES = [
  { grade: 'Nursery – KG 2', annual: '₹45,000', reg: '₹2,000' },
  { grade: 'Grades 1 – 2',   annual: '₹48,000', reg: '₹2,000' },
  { grade: 'Grades 3 – 5',   annual: '₹52,000', reg: '₹2,500' },
  { grade: 'Grades 6 – 8',   annual: '₹58,000', reg: '₹2,500' },
  { grade: 'Grades 9 – 10',  annual: '₹65,000', reg: '₹3,000' },
  { grade: 'Grades 11 – 12', annual: '₹75,000', reg: '₹3,000' },
];

const GRADES = ['Nursery', 'KG 1', 'KG 2', 'Grade 1','Grade 2','Grade 3','Grade 4','Grade 5','Grade 6','Grade 7','Grade 8','Grade 9','Grade 10','Grade 11','Grade 12'];

export default function Admissions() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', studentName: '', gradeApplying: '', message: '' });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [loading, setLoading] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('/api/enquiry', form);
      setStatus('success');
      setForm({ name: '', email: '', phone: '', studentName: '', gradeApplying: '', message: '' });
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <title>Admissions | Raigad International School</title>
      <section className="page-hero">
        <div className="container">
          <span className="overline" style={{ color: 'var(--gold-l)' }}>Admissions 2025–26</span>
          <h1>Join the Raigad Family</h1>
          <p>Seats are limited. Begin your child's journey with us today.</p>
        </div>
      </section>
      <RidgeDivider flip bg="var(--sand)" />

      {/* Steps */}
      <section className="section bg-sand">
        <div className="container">
          <div className="section-heading">
            <span className="overline">How to Apply</span>
            <h2>Simple 4-Step Process</h2>
            <span className="gold-line gold-line-center" />
          </div>
          <div className="grid-4">
            {STEPS.map((s, i) => (
              <div key={s.title} className="card reveal" style={{ textAlign: 'center', position: 'relative' }}>
                <div className="card-body">
                  <div style={{ position: 'absolute', top: '1rem', left: '1rem', width: '26px', height: '26px', borderRadius: '50%', background: 'var(--gold)', color: 'var(--maroon-d)', fontWeight: 800, fontSize: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</div>
                  <div style={{ fontSize: '2.5rem', margin: 'var(--sp-sm) 0' }}>{s.icon}</div>
                  <h4>{s.title}</h4>
                  <span className="gold-line gold-line-center" />
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee table */}
      <section className="section" style={{ background: 'var(--sand-d)' }}>
        <div className="container">
          <div className="section-heading">
            <span className="overline">Fees</span>
            <h2>Fee Structure 2025–26</h2>
            <span className="gold-line gold-line-center" />
            <p>All amounts are indicative. Bus fees and activity fees are charged separately.</p>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: 'var(--white)', borderRadius: 'var(--r-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
              <thead style={{ background: 'var(--maroon)', color: 'var(--sand)' }}>
                <tr>
                  {['Grade', 'Annual Tuition', 'Registration Fee'].map((h) => (
                    <th key={h} style={{ padding: '1rem 1.2rem', textAlign: 'left', fontFamily: 'Fraunces, serif', fontWeight: 600, fontSize: 'var(--fs-sm)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEES.map((r, i) => (
                  <tr key={r.grade} style={{ background: i % 2 === 0 ? 'var(--sand)' : 'var(--white)', transition: 'background 0.2s' }}>
                    <td style={{ padding: '0.85rem 1.2rem', fontWeight: 600, color: 'var(--maroon)' }}>{r.grade}</td>
                    <td style={{ padding: '0.85rem 1.2rem', color: 'var(--text)' }}>{r.annual}</td>
                    <td style={{ padding: '0.85rem 1.2rem', color: 'var(--text)' }}>{r.reg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: 'var(--sp-md)', color: 'var(--text-muted)', fontSize: 'var(--fs-sm)' }}>
            💡 Merit scholarships of 10%–50% available for students with 85%+ in previous board exams.
          </p>
        </div>
      </section>

      {/* Documents */}
      <section className="section bg-sand">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-xl)', alignItems: 'start' }}>
            <div>
              <span className="overline">Documents Required</span>
              <h2>What to Bring</h2>
              <span className="gold-line" />
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: 'var(--sp-md)' }}>
                {DOCS.map((d) => (
                  <li key={d} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-muted)', fontSize: 'var(--fs-sm)' }}>
                    <span style={{ color: 'var(--gold)', fontWeight: 700 }}>✓</span> {d}
                  </li>
                ))}
              </ul>
            </div>

            {/* Enquiry form */}
            <div id="enquiry-form">
              <span className="overline">Enquiry Form</span>
              <h2>Register Your Interest</h2>
              <span className="gold-line" />
              {status === 'success' && (
                <div style={{ background: '#d1fae5', border: '1px solid #6ee7b7', borderRadius: 'var(--r-sm)', padding: '1rem', marginBottom: 'var(--sp-md)', color: '#065f46' }}>
                  ✅ Thank you! We'll contact you within 24 hours.
                </div>
              )}
              {status === 'error' && (
                <div style={{ background: '#fee2e2', border: '1px solid #fca5a5', borderRadius: 'var(--r-sm)', padding: '1rem', marginBottom: 'var(--sp-md)', color: '#991b1b' }}>
                  ❌ Something went wrong. Please call us directly.
                </div>
              )}
              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-md)' }}>
                <div className="grid-2" style={{ gap: 'var(--sp-md)' }}>
                  <div className="form-group">
                    <label htmlFor="adm-name">Parent Name *</label>
                    <input id="adm-name" name="name" value={form.name} onChange={handle} required placeholder="Full name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="adm-phone">Phone *</label>
                    <input id="adm-phone" name="phone" value={form.phone} onChange={handle} required placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="adm-email">Email *</label>
                  <input id="adm-email" name="email" type="email" value={form.email} onChange={handle} required placeholder="your@email.com" />
                </div>
                <div className="grid-2" style={{ gap: 'var(--sp-md)' }}>
                  <div className="form-group">
                    <label htmlFor="adm-student">Student Name</label>
                    <input id="adm-student" name="studentName" value={form.studentName} onChange={handle} placeholder="Child's name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="adm-grade">Grade Applying For</label>
                    <select id="adm-grade" name="gradeApplying" value={form.gradeApplying} onChange={handle}>
                      <option value="">Select grade</option>
                      {GRADES.map((g) => <option key={g} value={g}>{g}</option>)}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="adm-message">Message / Questions</label>
                  <textarea id="adm-message" name="message" value={form.message} onChange={handle} required placeholder="Tell us about your child or any questions you have..." />
                </div>
                <button type="submit" className="btn btn-primary" id="adm-submit-btn" disabled={loading} style={{ alignSelf: 'flex-start' }}>
                  {loading ? 'Submitting…' : 'Submit Enquiry'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style>{`@media(max-width:700px){.container .grid-2[style]{grid-template-columns:1fr!important;}}`}</style>
    </main>
  );
}
