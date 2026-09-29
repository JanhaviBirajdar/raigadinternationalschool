import React from 'react';
import { motion } from 'framer-motion';
import { Target, Flag, Users, Heart, Star, Sparkles, BookOpen, MapPin, Phone, ExternalLink } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import logoImg from '../assets/logo.png';

const About = () => {
  return (
    <div className="w-full pt-10 pb-20">
      
      {/* 1. Header */}
      <section className="py-16 text-center max-w-4xl mx-auto px-4">
        <AnimatedSection>
          <div className="inline-block p-4 bg-white rounded-3xl shadow-xl mb-6 border-2 border-brand-yellow">
            <img src={logoImg} alt="RAIGAD INTERNATIONAL school" className="w-24 h-24 object-contain mx-auto" />
          </div>
          <span className="text-xs font-black tracking-widest uppercase text-brand-coral bg-brand-coral/10 px-4 py-1.5 rounded-full inline-block mb-3">
            State Board - CBSE Pattern Curriculum
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-brand-navy mb-4 tracking-tight">
            RAIGAD INTERNATIONAL <span className="text-brand-coral">school</span>
          </h1>
          <p className="text-2xl font-black text-brand-yellow italic mb-6">
            "Nurturing Young Minds. Building Bright Futures."
          </p>
          <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed">
            Situated at Koyana Velhe, Taloja (Panvel), RAIGAD INTERNATIONAL school is an institution committed to academic brilliance, moral integrity, and modern innovation under the State Board - CBSE Pattern curriculum.
          </p>
        </AnimatedSection>
      </section>

      {/* 2. Vision & Mission Section with Building Image */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle 
            title="Our Vision & Mission" 
            subtitle="Building global citizens through nurturing, innovation, and educational excellence." 
            icon={Target} 
            color="brand-coral" 
          />

          <div className="grid lg:grid-cols-12 gap-10 items-start mt-12">
            {/* Vision and Mission Content */}
            <div className="lg:col-span-7 flex flex-col space-y-8">
              
              {/* Vision Box */}
              <AnimatedSection delay={0.1}>
                <div className="clay-card p-8 border-l-8 border-brand-yellow bg-white shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-amber-50 text-brand-yellow rounded-xl">
                      <Target size={26} />
                    </div>
                    <div>
                      <span className="text-xs font-black uppercase text-brand-yellow tracking-wider block">Core Directive</span>
                      <h3 className="text-2xl font-black text-brand-navy uppercase tracking-wide">Our Vision</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed font-medium text-justify text-base md:text-lg">
                    To be a centre of excellence in education that empowers every child to become a confident, compassionate, and responsible global citizen. We aspire to nurture lifelong learners who think creatively, act ethically, embrace innovation, and make meaningful contributions to society.
                  </p>
                </div>
              </AnimatedSection>

              {/* Mission Box */}
              <AnimatedSection delay={0.2}>
                <div className="clay-card p-8 border-l-8 border-brand-coral bg-white shadow-lg space-y-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2.5 bg-red-50 text-brand-coral rounded-xl">
                      <Flag size={26} />
                    </div>
                    <div>
                      <span className="text-xs font-black uppercase text-brand-coral tracking-wider block">Our Purpose</span>
                      <h3 className="text-2xl font-black text-brand-navy uppercase tracking-wide">Our Mission</h3>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed font-medium text-justify">
                    At Raigad International School, our mission is to provide a safe, inclusive, and stimulating learning environment where every child is encouraged to discover their unique talents and achieve academic excellence.
                  </p>

                  <div className="pt-2">
                    <h4 className="text-sm font-black text-brand-navy uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Sparkles size={16} className="text-brand-yellow" />
                      We are committed to:
                    </h4>
                    <ul className="space-y-3">
                      {[
                        'Delivering quality education through innovative and student-centred teaching methods.',
                        'Developing critical thinking, creativity, communication, and problem-solving skills.',
                        'Building confidence, leadership, discipline, teamwork, and lifelong learning habits.',
                        'Promoting values of honesty, respect, empathy, responsibility, and integrity.',
                        'Encouraging excellence in academics, sports, arts, technology, and co-curricular activities for holistic development.',
                        'Preparing students to become compassionate, confident, and socially responsible global citizens.',
                        'Continuously enhancing our infrastructure and learning facilities.',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                          <span className="w-2 h-2 rounded-full bg-brand-coral shrink-0 mt-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-brand-light rounded-2xl border-l-4 border-brand-navy">
                    <p className="text-gray-700 text-sm font-medium leading-relaxed">
                      As part of our long-term vision, Raigad International School has begun the development of its modern campus, creating an inspiring environment where every child can learn, grow, and succeed.
                    </p>
                  </div>

                  <div className="text-center pt-2">
                    <span className="inline-block px-6 py-2 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-navy font-black text-base italic shadow-sm">
                      "Learning Today, Leading Tomorrow..."
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* School Building Display */}
            <div className="lg:col-span-5 flex flex-col">
              <AnimatedSection delay={0.3} className="h-full sticky top-24">
                <div className="clay-card p-4 sm:p-6 bg-white flex flex-col justify-between border-4 border-brand-yellow/30 shadow-xl">
                  <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-gray-100 flex-grow flex items-center justify-center p-2 min-h-[380px]">
                    <img 
                      src="/school_building.png" 
                      alt="RAIGAD INTERNATIONAL SCHOOL Campus Building" 
                      className="w-full h-auto max-h-[480px] object-contain drop-shadow-2xl rounded-2xl hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute top-4 left-4 bg-brand-navy/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold border border-brand-yellow/40">
                      Modern Campus Infrastructure
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-100 text-center">
                    <h4 className="font-black text-brand-navy text-lg">RAIGAD INTERNATIONAL SCHOOL</h4>
                    <p className="text-xs font-semibold text-gray-500 mt-0.5">Koyana Velhe, Ghotkamp Koyana Vele, Taloja, Panvel</p>
                    <p className="text-xs font-extrabold text-brand-coral italic mt-2">"Learning Today, Leading Tomorrow..."</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Meet Our Team Section (From Official Brochure) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle 
            title="Meet Our Team" 
            subtitle="The visionary leadership steering academic excellence and character development." 
            icon={Users} 
            color="brand-navy" 
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {/* Dr. Venkat Alat */}
            <AnimatedSection delay={0.1}>
              <div className="clay-card h-full flex flex-col p-8 border-t-8 border-brand-coral bg-white group hover:-translate-y-2 transition-all">
                <div className="w-36 h-36 mx-auto rounded-3xl overflow-hidden border-4 border-brand-coral shadow-lg mb-6 bg-gray-100 flex items-center justify-center">
                  <img 
                    src="/dr_venkat_alat.png" 
                    alt="Dr. Venkat Alat - Trustee" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-black text-brand-navy">Dr. Venkat Alat</h3>
                  <span className="inline-block mt-1 px-3 py-1 bg-red-50 text-brand-coral font-bold text-xs rounded-full">
                    Trustee, Raigadh International School
                  </span>
                </div>
                <p className="text-gray-600 font-medium text-sm leading-relaxed text-justify mt-2 flex-grow">
                  Dr. Venkat Alat, the trustee of Raigadh International School, holds a visionary commitment to providing the highest quality education to our young learners, with a strong focus on their overall development and future success.
                </p>
              </div>
            </AnimatedSection>

            {/* Abhijeet Deshmukh */}
            <AnimatedSection delay={0.2}>
              <div className="clay-card h-full flex flex-col p-8 border-t-8 border-brand-navy bg-white group hover:-translate-y-2 transition-all">
                <div className="w-36 h-36 mx-auto rounded-3xl overflow-hidden border-4 border-brand-navy shadow-lg mb-6 bg-gray-100 flex items-center justify-center">
                  <img 
                    src="/abhijeet_deshmukh.png" 
                    alt="Abhijeet Deshmukh - Secretary" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-black text-brand-navy">Abhijeet Deshmukh</h3>
                  <span className="inline-block mt-1 px-3 py-1 bg-blue-50 text-brand-navy font-bold text-xs rounded-full">
                    Secretary, Sakar Social & Educational Org.
                  </span>
                </div>
                <p className="text-gray-600 font-medium text-sm leading-relaxed text-justify mt-2 flex-grow">
                  Abhijeet Deshmukh, S.S.H. School and Junior College Kamothe, Secretary, Sakar Social and Educational Organization, actively guides our institution toward accessible, top-tier scholastic benchmarks and social contribution.
                </p>
              </div>
            </AnimatedSection>

            {/* Mrs. Ashwini Deshmukh */}
            <AnimatedSection delay={0.3} className="md:col-span-2 lg:col-span-1">
              <div className="clay-card h-full flex flex-col p-8 border-t-8 border-brand-yellow bg-white group hover:-translate-y-2 transition-all">
                <div className="w-36 h-36 mx-auto rounded-3xl overflow-hidden border-4 border-brand-yellow shadow-lg mb-6 bg-gray-100 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" 
                    alt="Mrs. Ashwini Deshmukh - Principal" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-black text-brand-navy">Mrs. Ashwini Deshmukh</h3>
                  <span className="inline-block mt-1 px-3 py-1 bg-amber-50 text-brand-navy font-bold text-xs rounded-full">
                    Principal, RAIGAD INTERNATIONAL SCHOOL
                  </span>
                </div>
                <p className="text-gray-600 font-medium text-sm leading-relaxed text-justify mt-2 flex-grow">
                  Oversees educational leadership, faculty mentorship, and State Board - CBSE Pattern pedagogies, ensuring every student imbibes discipline, critical thinking, and a lifelong thirst for learning.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle title="Our Core Values" subtitle="The principles that guide our everyday teaching at RAIGAD INTERNATIONAL school." icon={Heart} color="brand-coral" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { title: 'Academic Excellence', icon: Star, color: 'text-brand-yellow', bg: 'bg-amber-50', border: 'border-brand-yellow', desc: 'Rigorous State Board - CBSE Pattern curriculum ensuring top student outcomes.' },
              { title: 'Ethical Integrity', icon: Sparkles, color: 'text-brand-navy', bg: 'bg-slate-50', border: 'border-brand-navy', desc: 'Instilling honesty, responsibility, and civic consciousness.' },
              { title: 'Compassion & Care', icon: Heart, color: 'text-brand-coral', bg: 'bg-red-50', border: 'border-brand-coral', desc: 'Supportive teacher-student mentorship in every classroom.' },
              { title: 'Inclusive Community', icon: Users, color: 'text-brand-yellow', bg: 'bg-amber-50', border: 'border-brand-yellow', desc: 'Welcoming all learners from Koyana Velhe, Panvel, and adjoining regions.' },
            ].map((value, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className={`border-2 ${value.border} bg-white rounded-3xl p-8 text-center shadow-md hover:-translate-y-2 transition-all h-full flex flex-col items-center`}>
                  <div className={`w-16 h-16 rounded-full ${value.bg} flex items-center justify-center ${value.color} mb-6`}>
                    <value.icon size={36} />
                  </div>
                  <h3 className="text-xl font-black text-brand-navy mb-2">{value.title}</h3>
                  <p className="text-sm font-medium text-gray-600 leading-relaxed">{value.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Campus Location Banner */}
      <section className="py-16 bg-brand-light border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4">
          <div className="clay-card p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border-2 border-brand-yellow">
            <div className="space-y-3 text-center md:text-left">
              <span className="text-xs font-black uppercase text-brand-coral tracking-wider">Campus Details</span>
              <h3 className="text-2xl md:text-3xl font-black text-brand-navy">Visit Our Campus in Panvel</h3>
              <p className="text-gray-700 font-medium flex items-center justify-center md:justify-start gap-2 text-sm sm:text-base">
                <MapPin size={18} className="text-brand-coral shrink-0" />
                <span>Koyana Velhe, Ghotkamp Koyana Vele, Taloja, Panvel, Maharashtra 410208</span>
              </p>
              <p className="text-sm font-bold text-gray-700 flex items-center justify-center md:justify-start gap-2">
                <Phone size={16} className="text-brand-yellow shrink-0" />
                <span>Call Us: <a href="tel:08169568369" className="text-brand-navy underline font-extrabold">081695 68369</a></span>
              </p>
            </div>
            <a
              href="https://share.google/BnjgzEawietoNwtBE"
              target="_blank"
              rel="noopener noreferrer"
              className="clay-button bg-brand-coral hover:bg-red-700 text-white flex items-center gap-2 text-sm shrink-0"
            >
              <ExternalLink size={16} /> Open in Google Maps
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
