import React, { useState } from 'react';
import { Users, Mail, Star, Award } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';

const Faculty = () => {
  const [filter, setFilter] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'science', name: 'Science & Math' },
    { id: 'arts', name: 'Arts & Humanities' },
    { id: 'sports', name: 'Physical Education' },
  ];

  const staff = [
    { id: 1, name: 'Dr. Sarah Jenkins', role: 'Principal', dept: 'admin', exp: '20+ Yrs', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop' },
    { id: 2, name: 'Mr. Robert Chen', role: 'Head of Science', dept: 'science', exp: '15 Yrs', image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400&auto=format&fit=crop' },
    { id: 3, name: 'Ms. Emily Davis', role: 'Math Teacher', dept: 'science', exp: '8 Yrs', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop' },
    { id: 4, name: 'Mr. David Smith', role: 'History Teacher', dept: 'arts', exp: '12 Yrs', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop' },
    { id: 5, name: 'Ms. Anita Patel', role: 'Art Director', dept: 'arts', exp: '10 Yrs', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1bfa82?q=80&w=400&auto=format&fit=crop' },
    { id: 6, name: 'Coach Marcus', role: 'Head Coach', dept: 'sports', exp: '18 Yrs', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop' },
  ];

  const filteredStaff = filter === 'all' ? staff.filter(s => s.dept !== 'admin') : staff.filter(s => s.dept === filter);

  return (
    <div className="w-full pt-10 pb-20 bg-brand-light">
      <SectionTitle title="Faculty & Staff" subtitle="Meet the brilliant minds shaping our future leaders." icon={Users} color="brand-green" />

      {/* Teacher of the Month */}
      <section className="max-w-4xl mx-auto px-4 mt-12 mb-16">
        <AnimatedSection className="relative bg-gradient-to-br from-brand-yellow to-brand-coral rounded-[40px] p-2 shadow-2xl">
          <div className="bg-white rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-brand-yellow text-brand-dark px-6 py-2 rounded-bl-3xl font-black flex items-center gap-2">
              <Star size={16} className="fill-brand-dark" />
              Teacher of the Month
            </div>
            
            <div className="w-48 h-48 rounded-full overflow-hidden border-8 border-brand-yellow/20 shrink-0">
              <img src={staff[1].image} alt={staff[1].name} className="w-full h-full object-cover" />
            </div>
            
            <div>
              <h2 className="text-3xl font-black text-brand-dark mb-2">{staff[1].name}</h2>
              <p className="text-brand-blue font-bold text-lg mb-4">{staff[1].role}</p>
              <p className="text-gray-600 font-medium italic mb-6">
                "For exceptional dedication to making physics fun and accessible through interactive robotics projects."
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-bold text-gray-600">
                  <Award size={16} className="text-brand-coral" /> Innovation Award
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Filters */}
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-3 mb-12">
        {departments.map((dept) => (
          <button
            key={dept.id}
            onClick={() => setFilter(dept.id)}
            className={`px-6 py-2 rounded-full font-bold transition-all ${
              filter === dept.id 
                ? 'bg-brand-dark text-white shadow-[0_4px_0_#1a252f]' 
                : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-brand-dark hover:text-brand-dark'
            }`}
          >
            {dept.name}
          </button>
        ))}
      </div>

      {/* Staff Grid */}
      <section className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredStaff.map((person, idx) => (
          <AnimatedSection key={person.id} delay={idx * 0.1}>
            <div className="clay-card flex flex-col items-center text-center p-8 group">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-gray-100 group-hover:border-brand-blue transition-colors">
                <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-black text-brand-dark">{person.name}</h3>
              <p className="text-gray-500 font-bold mb-4">{person.role}</p>
              
              <div className="w-full border-t-2 border-gray-100 pt-4 mt-auto flex justify-between items-center">
                <span className="text-sm font-bold text-brand-green bg-brand-green/10 px-3 py-1 rounded-full">
                  {person.exp}
                </span>
                <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-brand-blue hover:text-white transition-colors">
                  <Mail size={18} />
                </button>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </section>
    </div>
  );
};

export default Faculty;
