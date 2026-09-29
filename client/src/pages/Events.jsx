import React, { useEffect, useState } from 'react';
import { Calendar as CalendarIcon, MapPin, Clock, Filter, Image as ImageIcon } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import axios from 'axios';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Fallback mock data in case API is not seeded
        const mockEvents = [
          { _id: '1', title: 'Annual Sports Day', date: new Date(Date.now() + 86400000 * 5).toISOString(), category: 'sports', venue: 'Main Playground', isUpcoming: true, description: 'Inter-house athletic competitions and track events.' },
          { _id: '2', title: 'Science Fair 2026', date: new Date(Date.now() + 86400000 * 12).toISOString(), category: 'science-fair', venue: 'Science Block', isUpcoming: true, description: 'Innovative projects by middle and high school students.' },
          { _id: '3', title: 'Cultural Fest', date: new Date(Date.now() - 86400000 * 30).toISOString(), category: 'festivals', venue: 'Auditorium', isUpcoming: false, description: 'A celebration of diversity through dance and music.' },
        ];

        try {
          const res = await axios.get('http://localhost:5000/api/events');
          if (res.data.success && res.data.data.length > 0) {
            setEvents(res.data.data);
          } else {
            setEvents(mockEvents);
          }
        } catch (e) {
          setEvents(mockEvents);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'sports', name: 'Sports' },
    { id: 'science-fair', name: 'Science' },
    { id: 'festivals', name: 'Festivals' },
  ];

  const filteredEvents = filter === 'all' ? events : events.filter(e => e.category === filter);

  return (
    <div className="w-full pt-10 pb-20 bg-brand-light">
      <SectionTitle 
        title="Events & Campus Life" 
        subtitle="Vibrant co-curricular life at RAIGAD INTERNATIONAL school. Nurturing Young Minds. Building Bright Futures." 
        icon={CalendarIcon} 
        color="brand-coral" 
      />

      {/* Filters */}
      <div className="max-w-6xl mx-auto px-4 mt-8 mb-12 flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-6 py-2 rounded-full font-bold transition-all ${
              filter === cat.id 
                ? 'bg-brand-dark text-white shadow-[0_4px_0_#1a252f]' 
                : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-brand-dark hover:text-brand-dark'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Events Grid */}
      <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          <div className="col-span-full text-center py-12 text-gray-500 font-bold">Loading events...</div>
        ) : (
          filteredEvents.map((event, idx) => (
            <AnimatedSection key={event._id} delay={idx * 0.1}>
              <div className="clay-card h-full flex flex-col group p-6">
                <div className={`w-full h-40 rounded-2xl mb-6 flex items-center justify-center bg-gray-100 relative overflow-hidden`}>
                  {event.image ? (
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  ) : (
                    <ImageIcon size={48} className="text-gray-300" />
                  )}
                  {event.isUpcoming && (
                    <div className="absolute top-4 right-4 bg-brand-yellow text-brand-dark text-xs font-black px-3 py-1 rounded-full shadow-lg">
                      UPCOMING
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-black text-brand-dark mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm font-medium mb-4 flex-grow">{event.description}</p>
                
                <div className="space-y-2 mt-auto pt-4 border-t-2 border-gray-100">
                  <div className="flex items-center text-sm font-bold text-gray-500">
                    <CalendarIcon size={16} className="mr-2 text-brand-blue" />
                    {new Date(event.date).toLocaleDateString(undefined, { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}
                  </div>
                  <div className="flex items-center text-sm font-bold text-gray-500">
                    <MapPin size={16} className="mr-2 text-brand-coral" />
                    {event.venue || 'TBA'}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))
        )}
      </section>
    </div>
  );
};

export default Events;
