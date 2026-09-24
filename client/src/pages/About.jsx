import React from 'react';
import { motion } from 'framer-motion';
import { Target, Flag, Users, Heart, Star, Sparkles, BookOpen } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';

const About = () => {
  return (
    <div className="w-full pt-10 pb-20">
      
      {/* 1. Header */}
      <section className="py-16 text-center max-w-4xl mx-auto px-4">
        <AnimatedSection>
          <div className="inline-block p-4 bg-brand-blue/10 text-brand-blue rounded-3xl mb-6">
            <BookOpen size={48} />
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-brand-dark mb-6">
            Our Story & <span className="text-brand-coral">Values</span>
          </h1>
          <p className="text-xl text-gray-600 font-medium leading-relaxed">
            Founded in 1995, Raigad International School has been at the forefront of innovative education, 
            blending traditional values with modern teaching methodologies.
          </p>
        </AnimatedSection>
      </section>

      {/* 2. Vision & Mission Flip Cards */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* Vision Card */}
          <AnimatedSection delay={0.2} className="group perspective-1000 h-80">
            <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
              {/* Front */}
              <div className="absolute inset-0 backface-hidden bg-white rounded-[40px] p-8 flex flex-col items-center justify-center text-center shadow-[8px_8px_16px_#e6e6e6,-8px_-8px_16px_#ffffff] border-4 border-brand-yellow">
                <Target size={64} className="text-brand-yellow mb-6" />
                <h2 className="text-3xl font-black text-brand-dark">Our Vision</h2>
                <p className="text-gray-500 font-bold mt-4">Hover to reveal</p>
              </div>
              {/* Back */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 bg-brand-yellow rounded-[40px] p-8 flex items-center justify-center text-center shadow-xl">
                <p className="text-2xl font-bold text-brand-dark leading-snug">
                  "To be a globally recognized institution that empowers students to be compassionate, innovative, and responsible leaders of tomorrow."
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Mission Card */}
          <AnimatedSection delay={0.4} className="group perspective-1000 h-80">
            <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
              {/* Front */}
              <div className="absolute inset-0 backface-hidden bg-white rounded-[40px] p-8 flex flex-col items-center justify-center text-center shadow-[8px_8px_16px_#e6e6e6,-8px_-8px_16px_#ffffff] border-4 border-brand-blue">
                <Flag size={64} className="text-brand-blue mb-6" />
                <h2 className="text-3xl font-black text-brand-dark">Our Mission</h2>
                <p className="text-gray-500 font-bold mt-4">Hover to reveal</p>
              </div>
              {/* Back */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 bg-brand-blue rounded-[40px] p-8 flex items-center justify-center text-center shadow-xl">
                <p className="text-xl font-bold text-white leading-snug">
                  "To provide a holistic learning environment that nurtures intellectual curiosity, fosters creativity, and builds strong moral character through excellence in education."
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle title="Our Core Values" subtitle="The principles that guide our everyday actions." icon={Heart} color="brand-coral" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { title: 'Integrity', icon: Star, color: 'brand-yellow' },
              { title: 'Excellence', icon: Sparkles, color: 'brand-blue' },
              { title: 'Compassion', icon: Heart, color: 'brand-coral' },
              { title: 'Inclusivity', icon: Users, color: 'brand-green' },
            ].map((value, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className={`border-2 border-${value.color} bg-white rounded-3xl p-8 text-center shadow-lg hover:-translate-y-2 transition-all`}>
                  <div className={`w-20 h-20 mx-auto rounded-full bg-${value.color}/10 flex items-center justify-center text-${value.color} mb-6`}>
                    <value.icon size={40} />
                  </div>
                  <h3 className="text-2xl font-black text-brand-dark">{value.title}</h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
