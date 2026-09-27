import React, { useState } from 'react';
import { Building, Library, Microscope, Dumbbell, MonitorPlay, Trees } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';

const Facilities = () => {
  const [activeFacility, setActiveFacility] = useState(0);

  const facilities = [
    {
      title: "Main Campus Building",
      icon: Building,
      color: "brand-navy",
      desc: "Our architecturally modern campus features secure multi-story educational infrastructure bearing the official RIS crest, spacious smart classrooms, and dedicated administrative wings at Koyana Velhe, Panvel.",
      image: "/school_building.png"
    },
    {
      title: "Central Library",
      icon: Library,
      color: "brand-coral",
      desc: "A vast collection of over 50,000 books, digital archives, and quiet reading zones designed to foster a love for reading.",
      image: "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Science Labs",
      icon: Microscope,
      color: "brand-green",
      desc: "State-of-the-art physics, chemistry, and biology laboratories equipped with modern safety standards and research tools.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Sports Complex",
      icon: Dumbbell,
      color: "brand-yellow",
      desc: "Indoor basketball courts, an Olympic-size swimming pool, and an expansive athletic track.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Smart Classrooms",
      icon: MonitorPlay,
      color: "brand-coral",
      desc: "Fully air-conditioned classrooms with interactive smartboards, ergonomic seating, and natural lighting.",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Green Campus",
      icon: Trees,
      color: "brand-green",
      desc: "Eco-friendly campus with botanical gardens, open-air amphitheatres, and sustainable energy practices.",
      image: "https://images.unsplash.com/photo-1595089851722-e4d6a8b79f90?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="w-full pt-10 pb-20 bg-brand-light">
      <SectionTitle 
        title="Campus Facilities" 
        subtitle="World-class CBSE & State Board infrastructure at RAIGAD INTERNATIONAL school, Koyana Velhe, Panvel." 
        icon={Building} 
        color="brand-coral" 
      />

      <section className="max-w-7xl mx-auto px-4 mt-12 grid lg:grid-cols-3 gap-8">
        
        {/* Selector Panel */}
        <AnimatedSection className="space-y-4">
          {facilities.map((fac, idx) => {
            const isActive = activeFacility === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveFacility(idx)}
                className={`w-full p-4 rounded-2xl flex items-center gap-4 transition-all duration-300 ${
                  isActive 
                    ? `bg-${fac.color} text-white shadow-lg -translate-x-2` 
                    : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-transparent'
                }`}
              >
                <div className={`p-3 rounded-xl ${isActive ? 'bg-white/20' : `bg-${fac.color}/10 text-${fac.color}`}`}>
                  <fac.icon size={24} />
                </div>
                <span className="font-bold text-lg">{fac.title}</span>
              </button>
            );
          })}
        </AnimatedSection>

        {/* Display Panel */}
        <AnimatedSection delay={0.2} className="lg:col-span-2">
          <div className="clay-card h-full flex flex-col overflow-hidden p-0 relative group">
            <div className="h-64 sm:h-80 w-full overflow-hidden">
              <img 
                src={facilities[activeFacility].image} 
                alt={facilities[activeFacility].title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-8 bg-white z-10 flex-grow">
              <h2 className="text-3xl font-black text-brand-dark mb-4">{facilities[activeFacility].title}</h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                {facilities[activeFacility].desc}
              </p>
            </div>
          </div>
        </AnimatedSection>

      </section>
    </div>
  );
};

export default Facilities;
