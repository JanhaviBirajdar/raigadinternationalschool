import { useState } from 'react';
import axios from 'axios';
import RidgeDivider from '../components/RidgeDivider';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('/api/enquiry', form);
      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch { setStatus('error'); }
    finally { setLoading(false); }
  };

  return (
    <main>
      <title>Contact Us | Raigad International School</title>
      <section className="page-hero">
        <div className="container">
          <span className="overline" style={{ color: 'var(--gold-l)' }}>Get in Touch</span>
          <h1>We'd Love to Hear From You</h1>
          <p>Admissions, tours, partnerships — our team is here Monday to Saturday.</p>
        </div>
      </section>
      <RidgeDivider flip bg="var(--sand)" />

      <section className="section bg-sand">
        <div className="container">
          <div className="grid-2" style={{ gap: 'var(--sp-2xl)', alignItems: 'start' }}>
            {/* Contact info */}
            <div>
              <span className="overline">Contact Details</span>
              <h2>Find Us</h2>
              <span className="gold-line" />

              {[
                { icon: '📍', label: 'Address', val: 'Near Raigad Fort Road, Panvel, Raigad District, Maharashtra 410206' },
                { icon: '📞', label: 'Phone', val: '+91 90000 00000', href: 'tel:+919000000000' },
                { icon: '✉️', label: 'Email', val: 'info@raigadschool.edu.in', href: 'mailto:info@raigadschool.edu.in' },
                { icon: '⏰', label: 'Office Hours', val: 'Mon–Fri 9:00 AM – 4:00 PM | Sat 9:00 AM – 1:00 PM' },
              ].map((c) => (
                <div key={c.label} style={{ display: 'flex', gap: 'var(--sp-md)', marginBottom: 'var(--sp-lg)', alignItems: 'flex-start' }}>
                  <div style={{ width: 46, height: 46, borderRadius: 'var(--r-md)', background: 'linear-gradient(135deg, var(--gold), var(--gold-d))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0, boxShadow: 'var(--shadow-gold)' }}>
                    {c.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--maroon)', fontSize: 'var(--fs-sm)', marginBottom: 4 }}>{c.label}</div>
                    {c.href
                      ? <a href={c.href} style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-sm)' }}>{c.val}</a>
                      : <div style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-sm)' }}>{c.val}</div>
                    }
                  </div>
                </div>
              ))}

              {/* Map embed */}
              <div style={{ borderRadius: 'var(--r-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', border: '2px solid rgba(90,58,48,0.15)', marginTop: 'var(--sp-md)' }}>
                <iframe
                  title="Raigad International School Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30288.19!2d73.11!3d18.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e8b4b5555555%3A0x1111111111111111!2sPanvel%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1623000000000!5m2!1sen!2sin"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Contact form */}
            <div>
              <span className="overline">Send a Message</span>
              <h2>Write to Us</h2>
              <span className="gold-line" />

              {status === 'success' && (
                <div style={{ background: 'var(--primary-light)', border: '1px solid var(--primary)', borderRadius: 'var(--r-sm)', padding: '1rem', marginBottom: 'var(--sp-md)', color: 'var(--primary-dark)' }}>
                  ✅ Message received! We'll respond within 1 business day.
                </div>
              )}
              {status === 'error' && (
                <div style={{ background: 'var(--maroon-l)', border: '1px solid var(--maroon)', borderRadius: 'var(--r-sm)', padding: '1rem', marginBottom: 'var(--sp-md)', color: 'var(--maroon-d)' }}>
                  ❌ Failed to send. Please email us directly.
                </div>
              )}

              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-md)' }}>
                <div className="grid-2" style={{ gap: 'var(--sp-md)' }}>
                  <div className="form-group">
                    <label htmlFor="ct-name">Your Name *</label>
                    <input id="ct-name" name="name" value={form.name} onChange={handle} required placeholder="Full name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="ct-phone">Phone</label>
                    <input id="ct-phone" name="phone" value={form.phone} onChange={handle} placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="ct-email">Email *</label>
                  <input id="ct-email" name="email" type="email" value={form.email} onChange={handle} required placeholder="your@email.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="ct-msg">Message *</label>
                  <textarea id="ct-msg" name="message" value={form.message} onChange={handle} required placeholder="How can we help you?" rows={5} />
                </div>
                <button type="submit" id="contact-submit-btn" className="btn btn-primary" disabled={loading} style={{ alignSelf: 'flex-start' }}>
                  {loading ? 'Sending…' : 'Send Message'}
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
