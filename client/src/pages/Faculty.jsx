import React, { useState } from 'react';
import { Users, Mail, Star, Award, ShieldCheck } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';

const Faculty = () => {
  const [filter, setFilter] = useState('all');

  const leadership = [
    {
      name: 'Dr. Venkat Alat',
      role: 'Trustee',
      org: 'Raigadh International School',
      image: '/dr_venkat_alat.png',
      desc: 'Holds a visionary commitment to providing the highest quality education to our young learners, with a strong focus on their overall development and future success.'
    },
    {
      name: 'Abhijeet Deshmukh',
      role: 'Secretary',
      org: 'Sakar Social & Educational Organization',
      image: '/abhijeet_deshmukh.png',
      desc: 'S.S.H. School and Junior College Kamothe; Secretary, Sakar Social and Educational Organization, driving educational reach, community trust, and academic standards.'
    },
    {
      name: 'Mrs. Ashwini Deshmukh',
      role: 'Principal',
      org: 'RAIGAD INTERNATIONAL SCHOOL',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
      desc: 'Dedicated to fostering dual-track CBSE and State Board excellence, continuous teacher training, and an inclusive learning environment for every child.'
    }
  ];

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'science', name: 'Science & Math' },
    { id: 'arts', name: 'Arts & Humanities' },
    { id: 'sports', name: 'Physical Education' },
  ];

  const staff = [
    { id: 1, name: 'Mrs. Ashwini Deshmukh', role: 'Principal', dept: 'admin', exp: '20+ Yrs', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop' },
    { id: 2, name: 'Mr. Robert Chen', role: 'Head of Science', dept: 'science', exp: '15 Yrs', image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400&auto=format&fit=crop' },
    { id: 3, name: 'Ms. Emily Davis', role: 'Math Teacher', dept: 'science', exp: '8 Yrs', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop' },
    { id: 4, name: 'Mr. David Smith', role: 'History Teacher', dept: 'arts', exp: '12 Yrs', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop' },
    { id: 5, name: 'Ms. Anita Patel', role: 'Art Director', dept: 'arts', exp: '10 Yrs', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1bfa82?q=80&w=400&auto=format&fit=crop' },
    { id: 6, name: 'Coach Marcus', role: 'Head Coach', dept: 'sports', exp: '18 Yrs', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop' },
  ];

  const filteredStaff = filter === 'all' ? staff.filter(s => s.dept !== 'admin') : staff.filter(s => s.dept === filter);

  return (
    <div className="w-full pt-10 pb-20 bg-brand-light">
      <SectionTitle 
        title="Leadership & Faculty" 
        subtitle="Meet the visionary leadership and dedicated educators guiding RAIGAD INTERNATIONAL SCHOOL." 
        icon={Users} 
        color="brand-coral" 
      />

      {/* Leadership & Trustees Section */}
      <section className="max-w-7xl mx-auto px-4 mt-12 mb-20">
        <div className="text-center mb-10">
          <span className="text-xs font-black uppercase tracking-widest text-brand-coral bg-red-50 px-4 py-1.5 rounded-full inline-block mb-2">
            Governance & Vision
          </span>
          <h2 className="text-3xl font-black text-brand-navy">Board of Trustees & Leadership</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {leadership.map((leader, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="clay-card h-full flex flex-col p-8 bg-white border-t-8 border-brand-navy group hover:-translate-y-2 transition-all">
                <div className="w-36 h-36 mx-auto rounded-3xl overflow-hidden border-4 border-brand-yellow shadow-md mb-6 bg-gray-50 flex items-center justify-center">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="text-center mb-3">
                  <h3 className="text-2xl font-black text-brand-navy">{leader.name}</h3>
                  <span className="inline-block mt-1 px-3 py-1 bg-brand-light border border-gray-200 text-brand-coral font-bold text-xs rounded-full">
                    {leader.role} • {leader.org}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed text-justify mt-2 flex-grow">
                  {leader.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
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
