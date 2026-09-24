import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, BookOpen, Trophy, ShieldCheck, MonitorPlay, HeartHandshake, Globe2 } from 'lucide-react';
import ThreeCanvas from '../components/ThreeCanvas';
import AnimatedSection from '../components/AnimatedSection';
import StatsCounter from '../components/StatsCounter';
import SectionTitle from '../components/SectionTitle';

const Home = () => {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-light via-brand-blue/10 to-brand-green/10">
        <ThreeCanvas />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pointer-events-none">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', bounce: 0.5, duration: 1 }}
            className="inline-block p-4 bg-white rounded-3xl shadow-xl mb-8 rotate-3"
          >
            <GraduationCap size={64} className="text-brand-yellow" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-brand-dark mb-6 tracking-tight drop-shadow-sm"
          >
            Learn, Play, and <span className="text-brand-coral">Grow</span> Together!
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl font-bold text-gray-600 mb-10 max-w-2xl mx-auto"
          >
            Welcome to a magical world of education where every day is a new adventure in learning.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 pointer-events-auto"
          >
            <Link to="/admissions" className="clay-button bg-brand-yellow text-brand-dark text-lg">
              Apply Now
            </Link>
            <Link to="/facilities" className="clay-button bg-white text-brand-dark text-lg border-2 border-gray-100">
              Take a Tour
            </Link>
          </motion.div>
        </div>
        
        {/* Custom shape divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24 fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.5,193,101.43,237.9,88.4,281.33,71.24,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* 2. Principal's Welcome */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-72 h-72 rounded-[40px] bg-gradient-to-tr from-brand-yellow to-brand-coral p-2 rotate-3 hover:rotate-0 transition-all duration-500 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" 
                  alt="Principal" 
                  className="w-full h-full object-cover rounded-[32px]"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-3xl shadow-xl flex items-center gap-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-bold text-gray-700">Online Now</span>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 space-y-6">
              <div className="inline-block px-4 py-2 rounded-full bg-brand-blue/10 text-brand-blue font-bold tracking-wide text-sm">
                PRINCIPAL'S MESSAGE
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-brand-dark leading-tight">
                Nurturing Future <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">Global Leaders</span>
              </h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                "Education is not just about filling a bucket, but lighting a fire. At Raigad School, we believe in creating an environment where curiosity thrives, creativity blossoms, and character is built alongside academic excellence."
              </p>
              <div className="pt-4 flex items-center gap-4">
                <div className="h-12 w-1 bg-brand-yellow rounded-full" />
                <div>
                  <h4 className="font-extrabold text-brand-dark text-xl">Dr. Sarah Jenkins</h4>
                  <p className="text-gray-500 font-bold">Principal, Raigad International</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. Stats Banner */}
      <section className="py-16 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-blue via-brand-dark to-brand-dark" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatsCounter end={2500} suffix="+" label="Happy Students" icon={Users} color="brand-yellow" />
            <StatsCounter end={150} suffix="+" label="Expert Teachers" icon={GraduationCap} color="brand-blue" />
            <StatsCounter end={85} suffix="" label="Modern Classrooms" icon={BookOpen} color="brand-green" />
            <StatsCounter end={40} suffix="+" label="Extra Activities" icon={Trophy} color="brand-coral" />
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle title="Why Choose Us?" subtitle="We provide a 360-degree learning experience designed for the modern world." icon={HeartHandshake} color="brand-coral" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              { title: 'Quality Education', icon: BookOpen, color: 'brand-blue', desc: 'Interactive curriculum designed to foster critical thinking and problem-solving skills.' },
              { title: 'Safe Campus', icon: ShieldCheck, color: 'brand-green', desc: '24/7 security, CCTV surveillance, and a zero-tolerance anti-bullying policy.' },
              { title: 'Smart Classes', icon: MonitorPlay, color: 'brand-coral', desc: 'Fully equipped digital classrooms with interactive boards and tablets.' },
              { title: 'Sports & Athletics', icon: Trophy, color: 'brand-yellow', desc: 'Olympic-standard sports complex promoting physical fitness and teamwork.' },
              { title: 'Global Exposure', icon: Globe2, color: 'brand-blue', desc: 'International exchange programs and globally recognized certifications.' },
              { title: 'Holistic Growth', icon: HeartHandshake, color: 'brand-green', desc: 'Focus on emotional intelligence, arts, music, and personality development.' },
            ].map((feature, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="clay-card h-full flex flex-col group hover:-translate-y-2">
                  <div className={`w-16 h-16 rounded-2xl bg-${feature.color}/10 text-${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <feature.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-brand-dark mb-4">{feature.title}</h3>
                  <p className="text-gray-600 font-medium leading-relaxed flex-grow">{feature.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Google Map Location */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="clay-card p-2 md:p-4 overflow-hidden rounded-[40px]">
            <div className="w-full h-[400px] rounded-[32px] overflow-hidden">
              <iframe
                title="School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115132.86107231454!2d73.1818!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
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
