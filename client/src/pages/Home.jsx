import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, BookOpen, Trophy, ShieldCheck, MonitorPlay, HeartHandshake, Globe2, MapPin, Phone, ExternalLink, Award, Sparkles, Target, Flag } from 'lucide-react';
import ThreeCanvas from '../components/ThreeCanvas';
import AnimatedSection from '../components/AnimatedSection';
import StatsCounter from '../components/StatsCounter';
import SectionTitle from '../components/SectionTitle';
import logoImg from '../assets/logo.png';

const Home = () => {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-light via-blue-50/40 to-amber-50/30 py-16 sm:py-24">
        <ThreeCanvas />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Logo Crest Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', bounce: 0.4, duration: 1 }}
            className="inline-block p-3 sm:p-4 bg-white rounded-3xl shadow-2xl mb-6 border-4 border-brand-yellow"
          >
            <img
              src={logoImg}
              alt="RAIGAD INTERNATIONAL SCHOOL Crest"
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain mx-auto"
            />
          </motion.div>

          {/* Board Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-4"
          >
            <span className="px-4 py-1.5 rounded-full bg-brand-navy text-white text-xs sm:text-sm font-black tracking-wider uppercase shadow-md flex items-center gap-1.5">
              <Sparkles size={14} className="text-brand-yellow" /> State Board - CBSE Pattern
            </span>
            <span className="px-4 py-1.5 rounded-full bg-brand-coral/10 text-brand-coral border border-brand-coral/20 text-xs sm:text-sm font-bold">
              Taloja, Panvel Campus
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black text-brand-navy mb-4 tracking-tight drop-shadow-sm uppercase"
          >
            RAIGAD INTERNATIONAL <span className="text-brand-coral font-extrabold italic block sm:inline">SCHOOL</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-xl sm:text-2xl md:text-3xl font-extrabold text-brand-yellow drop-shadow-sm mb-4 tracking-wide italic"
          >
            "Nurturing Young Minds. Building Bright Futures."
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="text-base sm:text-lg md:text-xl font-medium text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Providing world-class holistic education through State Board - CBSE Pattern curriculum at Koyana Velhe, Panvel. Inspiring young achievers to lead with intellect and character.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 pointer-events-auto"
          >
            <Link to="/admissions" className="clay-button bg-brand-coral hover:bg-red-700 text-white text-base sm:text-lg px-8 py-3.5 shadow-lg">
              Apply for Admission 2026-27
            </Link>
            <a
              href="tel:08169568369"
              className="clay-button bg-brand-navy text-white text-base sm:text-lg px-8 py-3.5 flex items-center gap-2 hover:bg-slate-900 shadow-lg"
            >
              <Phone size={20} className="text-brand-yellow" />
              081695 68369
            </a>
            <a
              href="https://share.google/BnjgzEawietoNwtBE"
              target="_blank"
              rel="noopener noreferrer"
              className="clay-button bg-white text-brand-navy text-base sm:text-lg px-6 py-3.5 border-2 border-brand-yellow flex items-center gap-2 hover:bg-amber-50"
            >
              <MapPin size={20} className="text-brand-coral" />
              View Location
            </a>
          </motion.div>
        </div>

        {/* Custom shape divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.5,193,101.43,237.9,88.4,281.33,71.24,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* 2. Key Highlights Banner */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-brand-light border border-gray-100">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">Curriculum</p>
              <p className="text-sm sm:text-base font-black text-brand-navy">State Board - CBSE Pattern</p>
            </div>
            <div className="p-4 rounded-2xl bg-brand-light border border-gray-100">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">Motto</p>
              <p className="text-xs sm:text-sm font-black text-brand-coral">Nurturing Young Minds. Building Bright Futures.</p>
            </div>
            <div className="p-4 rounded-2xl bg-brand-light border border-gray-100">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">Admissions Hotline</p>
              <a href="tel:08169568369" className="text-base sm:text-lg font-black text-brand-navy hover:underline">081695 68369</a>
            </div>
            <div className="p-4 rounded-2xl bg-brand-light border border-gray-100">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">Location</p>
              <p className="text-base sm:text-lg font-black text-brand-navy">Taloja, Panvel 410208</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Principal's Welcome */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-[40px] bg-gradient-to-tr from-brand-navy to-brand-coral p-2 rotate-2 hover:rotate-0 transition-all duration-500 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
                  alt="Principal - RAIGAD INTERNATIONAL SCHOOL"
                  className="w-full h-full object-cover rounded-[32px]"
                />
                <div className="absolute -bottom-5 -right-4 bg-white p-3.5 rounded-3xl shadow-xl flex items-center gap-2.5 border-2 border-brand-yellow">
                  <div className="w-3.5 h-3.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-bold text-xs text-gray-800">Campus Open for Visits</span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-6">
              <div className="inline-block px-4 py-2 rounded-full bg-brand-coral/10 text-brand-coral font-black tracking-wide text-xs uppercase">
                Welcome to RAIGAD INTERNATIONAL SCHOOL
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-brand-navy leading-tight">
                Empowering Every Student to <span className="text-brand-coral">Achieve Greatness</span>
              </h2>
              <blockquote className="p-4 bg-brand-light border-l-4 border-brand-yellow rounded-r-2xl italic font-semibold text-gray-700 text-lg">
                "Nurturing Young Minds. Building Bright Futures. At RAIGAD INTERNATIONAL SCHOOL, we ignite curiosity, instill unwavering discipline, and equip students with national and state-level academic excellence."
              </blockquote>
              <p className="text-base text-gray-600 font-medium leading-relaxed">
                With our State Board - CBSE Pattern curriculum, students benefit from student-centric pedagogy, digital smart classrooms, sports complexes, and comprehensive character building.
              </p>
              <div className="pt-2 flex items-center gap-4">
                <div className="h-12 w-1.5 bg-brand-yellow rounded-full" />
                <div>
                  <h4 className="font-extrabold text-brand-navy text-xl">Mrs. Ashwini Deshmukh</h4>
                  <p className="text-gray-500 font-bold text-sm">Principal, RAIGAD INTERNATIONAL SCHOOL</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 4. Stats Banner */}
      <section className="py-16 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-yellow via-brand-navy to-brand-navy" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatsCounter end={2500} suffix="+" label="Happy Students" icon={Users} color="brand-yellow" />
            <StatsCounter end={150} suffix="+" label="Expert Faculty" icon={GraduationCap} color="brand-yellow" />
            <StatsCounter end={100} suffix="%" label="CBSE / Board Success" icon={Award} color="brand-yellow" />
            <StatsCounter end={40} suffix="+" label="Sports & Co-Curriculars" icon={Trophy} color="brand-yellow" />
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us? */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            title="Why Choose Us?"
            subtitle="Providing excellence through State Board - CBSE Pattern education at Koyana Velhe, Taloja, Panvel."
            icon={HeartHandshake}
            color="brand-coral"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              { title: 'CBSE-Pattern Learning', icon: BookOpen, color: 'brand-coral', desc: 'Modern, activity-based and concept-focused education.' },
              { title: 'Digital Classrooms', icon: MonitorPlay, color: 'brand-navy', desc: 'Technology-supported learning for better understanding.' },
              { title: 'CCTV-Secured Campus', icon: ShieldCheck, color: 'brand-yellow', desc: 'A safe and secure environment for students.' },
              { title: 'Playground', icon: Trophy, color: 'brand-yellow', desc: 'Opportunities for sports, physical activities and teamwork.' },
              { title: 'Holistic Development', icon: Globe2, color: 'brand-navy', desc: 'Academics, sports, arts, activities and life skills.' },
              { title: 'Dedicated Teachers', icon: HeartHandshake, color: 'brand-coral', desc: 'Individual attention and supportive teaching.' },
            ].map((feature, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="clay-card h-full flex flex-col group hover:-translate-y-2 border-t-4 border-transparent hover:border-brand-coral p-8">
                  <div className="w-16 h-16 rounded-2xl bg-brand-light text-brand-navy flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-coral group-hover:text-white transition-all shadow-sm">
                    <feature.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-brand-navy mb-3">{feature.title}</h3>
                  <p className="text-gray-600 font-medium leading-relaxed flex-grow">{feature.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Vision, Mission & Campus Showcase */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            title="Our Vision & Mission"
            subtitle="Nurturing global citizens empowered by persistence, equality, and holistic learning."
            icon={Target}
            color="brand-coral"
          />

          <div className="grid lg:grid-cols-12 gap-8 items-center mt-12">
            {/* Left: Building Image */}
            <div className="lg:col-span-5 flex justify-center">
              <AnimatedSection delay={0.1} className="w-full">
                <div className="clay-card p-4 sm:p-6 bg-slate-900 text-white rounded-[36px] shadow-2xl border-4 border-brand-yellow/40 flex flex-col items-center">
                  <img
                    src="/school_building.png"
                    alt="RAIGAD INTERNATIONAL SCHOOL Campus Building"
                    className="w-full h-auto max-h-[380px] object-contain drop-shadow-2xl rounded-2xl hover:scale-105 transition-transform duration-500"
                  />
                  <div className="text-center mt-4 pt-3 border-t border-gray-800 w-full">
                    <span className="text-xs font-black uppercase text-brand-yellow tracking-widest">Campus Infrastructure</span>
                    <h4 className="font-extrabold text-base sm:text-lg text-white">RAIGAD INTERNATIONAL SCHOOL</h4>
                    <p className="text-xs text-gray-400 mt-1">Koyana Velhe, Ghotkamp Koyana Vele, Taloja, Panvel</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right: Vision & Mission Statements */}
            <div className="lg:col-span-7 space-y-6">
              <AnimatedSection delay={0.2}>
                <div className="clay-card p-6 sm:p-8 border-l-8 border-brand-yellow bg-brand-light shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <Target size={22} className="text-brand-yellow" />
                    <h3 className="text-xl font-black text-brand-navy uppercase tracking-wider">Our Vision</h3>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium text-justify">
                    To be a centre of excellence in education that empowers every child to become a confident, compassionate, and responsible global citizen. We aspire to nurture lifelong learners who think creatively, act ethically, embrace innovation, and make meaningful contributions to society.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="clay-card p-6 sm:p-8 border-l-8 border-brand-coral bg-brand-light shadow-md space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Flag size={22} className="text-brand-coral" />
                    <h3 className="text-xl font-black text-brand-navy uppercase tracking-wider">Our Mission</h3>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium text-justify">
                    At Raigad International School, our mission is to provide a safe, inclusive, and stimulating learning environment where every child is encouraged to discover their unique talents and achieve academic excellence.
                  </p>

                  <div className="pt-2 space-y-2">
                    <h4 className="text-xs font-black text-brand-navy uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles size={14} className="text-brand-yellow" />
                      We are committed to:
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'Delivering quality education through innovative and student-centred teaching methods.',
                        'Developing critical thinking, creativity, communication, and problem-solving skills.',
                        'Building confidence, leadership, discipline, teamwork, and lifelong learning habits.',
                        'Promoting values of honesty, respect, empathy, responsibility, and integrity.',
                        'Encouraging excellence in academics, sports, arts, technology, and co-curricular activities for holistic development.',
                        'Preparing students to become compassionate, confident, and socially responsible global citizens.',
                        'Continuously enhancing our infrastructure and learning facilities.',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-coral shrink-0 mt-1.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 bg-white/80 rounded-xl border-l-4 border-brand-navy text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                    As part of our long-term vision, Raigad International School has begun the development of its modern campus, creating an inspiring environment where every child can learn, grow, and succeed.
                  </div>

                  <div className="pt-2 border-t border-gray-200/60 flex items-center justify-between flex-wrap gap-2">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Motto</span>
                    <span className="text-xs sm:text-sm font-black text-brand-coral italic">
                      "Learning Today, Leading Tomorrow..."
                    </span>
                  </div>
                </div>
              </AnimatedSection>

              {/* Leadership Mini-cards */}
              <AnimatedSection delay={0.4}>
                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-white rounded-2xl border-2 border-brand-coral/20 flex items-center gap-3 shadow-sm">
                    <img src="/dr_venkat_alat.png" alt="Dr. Venkat Alat" className="w-14 h-14 rounded-xl object-cover shrink-0 border border-brand-coral" />
                    <div>
                      <h4 className="font-extrabold text-sm text-brand-navy">Dr. Venkat Alat</h4>
                      <p className="text-xs font-bold text-brand-coral">Trustee, Raigad Int. School</p>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-2xl border-2 border-brand-navy/20 flex items-center gap-3 shadow-sm">
                    <img src="/abhijeet_deshmukh.png" alt="Abhijeet Deshmukh" className="w-14 h-14 rounded-xl object-cover shrink-0 border border-brand-navy" />
                    <div>
                      <h4 className="font-extrabold text-sm text-brand-navy">Abhijeet Deshmukh</h4>
                      <p className="text-xs font-bold text-brand-navy">Secretary, Sakar Org.</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Google Map Location & Campus Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="clay-card p-6 md:p-10 rounded-[40px] border-4 border-brand-yellow/30">
            <div className="grid lg:grid-cols-3 gap-8 items-center mb-8">
              <div className="lg:col-span-2 space-y-3">
                <span className="text-xs uppercase tracking-widest font-black text-brand-coral">Campus Location</span>
                <h3 className="text-2xl sm:text-3xl font-black text-brand-navy">
                  Visit RAIGAD INTERNATIONAL SCHOOL
                </h3>
                <p className="text-gray-600 font-medium flex items-start gap-2">
                  <MapPin size={20} className="text-brand-coral shrink-0 mt-1" />
                  <span>Koyana Velhe, Ghotkamp Koyana Vele, Taloja, Panvel, Maharashtra 410208</span>
                </p>
                <p className="text-sm font-bold text-gray-700 flex items-center gap-2">
                  <Phone size={16} className="text-brand-yellow" />
                  <span>Admissions & Inquiries Helpline: <a href="tel:08169568369" className="text-brand-coral underline">081695 68369</a></span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <a
                  href="https://share.google/BnjgzEawietoNwtBE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clay-button bg-brand-coral hover:bg-red-700 text-white flex items-center justify-center gap-2 text-sm sm:text-base py-3"
                >
                  <ExternalLink size={18} />
                  Open in Google Maps
                </a>
                <Link
                  to="/contact"
                  className="clay-button bg-brand-navy hover:bg-slate-900 text-white flex items-center justify-center text-sm sm:text-base py-3"
                >
                  Contact Admissions Desk
                </Link>
              </div>
            </div>

            <div className="w-full h-[420px] rounded-[28px] overflow-hidden shadow-inner border border-gray-200">
              <iframe
                title="RAIGAD INTERNATIONAL SCHOOL Location Map"
                src="https://maps.google.com/maps?q=RAIGAD+INTERNATIONAL+SCHOOL,+Koyana+Velhe,+Ghotkamp+Koyana+Vele,+Taloja,+Panvel,+Maharashtra+410208&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
