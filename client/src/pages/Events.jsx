import { useEffect, useState } from 'react';
import axios from 'axios';
import RidgeDivider from '../components/RidgeDivider';

const SAMPLE_EVENTS = [
  { title: 'Sahyadri Cultural Fest 2025', date: '2025-09-15', category: 'cultural', location: 'School Amphitheatre', isUpcoming: true, description: 'Annual extravaganza of music, dance, drama, and art representing the cultural heritage of the Western Ghats.' },
  { title: 'Science Olympiad', date: '2025-10-10', category: 'academic', location: 'Science Block', isUpcoming: true, description: 'Inter-school science competition for Grades 6–10. Register your team today!' },
  { title: 'Annual Sports Meet', date: '2025-11-22', category: 'sports', location: 'Athletic Track', isUpcoming: true, description: '3-day sports festival with track & field, swimming, team sports and an exciting prize ceremony.' },
  { title: 'Raigad Heritage Day', date: '2025-08-30', category: 'cultural', location: 'Main Hall', isUpcoming: false, description: 'A celebration of Chhatrapati Shivaji Maharaj\'s legacy, featuring student performances and a fort-model exhibition.' },
  { title: 'Career Guidance Workshop', date: '2025-07-20', category: 'academic', location: 'Auditorium', isUpcoming: false, description: 'Alumni and industry professionals guided Grade 10–12 students on career options and entrance exams.' },
  { title: 'Monsoon Nature Trek', date: '2025-07-08', category: 'activities', location: 'Sahyadri Foothills', isUpcoming: false, description: 'Eco Rangers led a guided monsoon trek through the biodiversity hotspot behind campus.' },
];

const CAT_COLORS = { cultural: 'badge-maroon', academic: 'badge-indigo', sports: 'badge-green', activities: 'badge-gold' };

export default function Events() {
  const [events, setEvents] = useState(SAMPLE_EVENTS);

  useEffect(() => {
    axios.get('/api/events')
      .then(({ data }) => { if (data.length) setEvents(data); })
      .catch(() => {});
  }, []);

  const upcoming = events.filter((e) => e.isUpcoming);
  const past     = events.filter((e) => !e.isUpcoming);

  const EventCard = ({ e }) => (
    <div className="card reveal" id={`event-${e.title.replace(/\s+/g,'-').toLowerCase().slice(0,20)}`}>
      <div style={{ height: 6, background: `linear-gradient(90deg, var(--${e.category === 'cultural' ? 'maroon' : e.category === 'academic' ? 'indigo' : e.category === 'sports' ? 'green' : 'gold'}), transparent)` }} />
      <div className="card-body">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.4rem', marginBottom: 'var(--sp-sm)' }}>
          <span className={`badge ${CAT_COLORS[e.category] || 'badge-gold'}`}>{e.category}</span>
          <span style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-muted)' }}>
            📅 {new Date(e.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
          </span>
        </div>
        <h4 style={{ fontSize: 'var(--fs-lg)' }}>{e.title}</h4>
        <div style={{ fontSize: 'var(--fs-xs)', color: 'var(--gold-d)', fontWeight: 600, marginBottom: 'var(--sp-sm)' }}>📍 {e.location}</div>
        <p style={{ fontSize: 'var(--fs-sm)' }}>{e.description}</p>
      </div>
    </div>
  );

  return (
    <main>
      <title>Events | Raigad International School</title>
      <section className="page-hero">
        <div className="container">
          <span className="overline" style={{ color: 'var(--gold-l)' }}>School Events</span>
          <h1>Where Life Happens Beyond Textbooks</h1>
          <p>Festivals, competitions, treks and workshops — there's always something exciting at RIS.</p>
        </div>
      </section>
      <RidgeDivider flip bg="var(--sand)" />

      <section className="section bg-sand">
        <div className="container">
          {upcoming.length > 0 && (
            <>
              <div className="section-heading" style={{ textAlign: 'left', marginBottom: 'var(--sp-lg)' }}>
                <span className="overline">Upcoming Events</span>
                <h2>Don't Miss Out</h2>
                <span className="gold-line" />
              </div>
              <div className="grid-3" style={{ marginBottom: 'var(--sp-2xl)' }}>
                {upcoming.map((e, i) => <EventCard key={i} e={e} />)}
              </div>
            </>
          )}

          <RidgeDivider bg="var(--sand-d)" />
          <div style={{ background: 'var(--sand-d)', padding: 'var(--sp-xl) 0', borderRadius: 'var(--r-lg)', marginTop: 'var(--sp-lg)' }}>
            <div className="section-heading" style={{ textAlign: 'left' }}>
              <span className="overline">Past Events</span>
              <h2>Memory Lane</h2>
              <span className="gold-line" />
            </div>
            <div className="grid-3">
              {past.map((e, i) => <EventCard key={i} e={e} />)}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
