import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Book, Beaker, Code, Palette, ChevronDown } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';

const Academics = () => {
  const [activeTab, setActiveTab] = useState('kindergarten');
  const [activeSubject, setActiveSubject] = useState(null);

  const tabs = [
    { id: 'kindergarten', name: 'Kindergarten', color: 'brand-yellow', icon: Palette },
    { id: 'primary', name: 'Primary (1-5)', color: 'brand-blue', icon: Book },
    { id: 'middle', name: 'Middle (6-8)', color: 'brand-green', icon: Beaker },
    { id: 'high', name: 'High School', color: 'brand-coral', icon: Code },
  ];

  const curriculum = {
    kindergarten: {
      desc: "A playful environment focused on foundational skills, motor development, and social interaction.",
      subjects: [
        { title: 'Language Arts', details: 'Phonics, storytelling, basic vocabulary, and pre-reading skills.' },
        { title: 'Numbers & Logic', details: 'Counting, basic shapes, patterns, and simple puzzles.' },
        { title: 'Creative Arts', details: 'Finger painting, clay modeling, singing, and dancing.' },
      ]
    },
    primary: {
      desc: "Building a strong academic foundation while encouraging curiosity and independent thinking.",
      subjects: [
        { title: 'Mathematics', details: 'Arithmetic, fractions, geometry basics, and word problems.' },
        { title: 'Science', details: 'Environmental studies, basic physics, plants, and animals.' },
        { title: 'Languages', details: 'English literature, grammar, and introduction to a second language.' },
      ]
    },
    middle: {
      desc: "Transitioning to more complex concepts, critical thinking, and collaborative projects.",
      subjects: [
        { title: 'Advanced Science', details: 'Chemistry experiments, biology, and earth sciences.' },
        { title: 'Social Studies', details: 'World history, geography, civics, and global awareness.' },
        { title: 'Computer Science', details: 'Basic programming, digital literacy, and internet safety.' },
      ]
    },
    high: {
      desc: "Preparing for higher education with specialized tracks, advanced placements, and career guidance.",
      subjects: [
        { title: 'STEM Track', details: 'Calculus, Physics, Chemistry, and Advanced Computer Science.' },
        { title: 'Commerce & Arts', details: 'Economics, Business Studies, History, and Psychology.' },
        { title: 'Life Skills', details: 'Financial literacy, leadership, and communication skills.' },
      ]
    }
  };

  return (
    <div className="w-full pt-10 pb-20 bg-brand-light">
      <SectionTitle title="Academics" subtitle="A comprehensive curriculum designed for every stage of growth." icon={GraduationCap} color="brand-blue" />

      {/* Grade Tabs */}
      <section className="max-w-6xl mx-auto px-4 mt-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setActiveSubject(null); }}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${
                  isActive 
                    ? `bg-${tab.color} text-white shadow-[0_4px_0_#cbd5e1] -translate-y-1` 
                    : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-100'
                }`}
              >
                <tab.icon size={20} />
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <AnimatedSection className="clay-card p-8 md:p-12 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h3 className="text-3xl font-black text-brand-dark mb-4">
                  {tabs.find(t => t.id === activeTab)?.name} Curriculum
                </h3>
                <p className="text-lg text-gray-600 font-medium">
                  {curriculum[activeTab].desc}
                </p>
              </div>

              {/* Accordion */}
              <div className="space-y-4 max-w-4xl mx-auto">
                {curriculum[activeTab].subjects.map((subject, idx) => {
                  const isOpen = activeSubject === idx;
                  const activeColor = tabs.find(t => t.id === activeTab)?.color;
                  return (
                    <div key={idx} className="border-2 border-gray-100 rounded-2xl overflow-hidden bg-white transition-colors hover:border-gray-200">
                      <button
                        onClick={() => setActiveSubject(isOpen ? null : idx)}
                        className="w-full px-6 py-4 flex justify-between items-center text-left"
                      >
                        <span className="font-bold text-lg text-brand-dark">{subject.title}</span>
                        <ChevronDown 
                          size={20} 
                          className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                        />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-gray-50"
                          >
                            <div className={`px-6 py-4 border-l-4 border-${activeColor} text-gray-600 font-medium leading-relaxed`}>
                              {subject.details}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default Academics;
