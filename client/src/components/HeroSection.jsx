import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Phone, MapPin } from 'lucide-react';
import logoImg from '../assets/logo.png';
import classroomImg from '../assets/hero_students_classroom.jpg';
import blocksImg from '../assets/hero_kids_blocks.jpg';
import studentImg from '../assets/hero_student_girl.jpg';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#FAFBFD] py-10 sm:py-14 lg:py-16 min-h-[620px] lg:min-h-[720px] flex items-center">
      {/* 1. Subtle Background Grid (Top-Left Blueprint Pattern) */}
      <div 
        className="absolute top-0 left-0 w-full sm:w-[650px] h-[480px] pointer-events-none opacity-40 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(15, 35, 65, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 35, 65, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse at 15% 15%, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 15% 15%, black 40%, transparent 80%)'
        }}
      />

      {/* 2. Educational Doodles / Sketch SVG Accents */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 760"
        preserveAspectRatio="none"
      >
        {/* Curving dashed airplane flight trail */}
        <path
          d="M 120,420 C 180,360 260,340 320,380 S 440,430 520,340"
          fill="none"
          stroke="#C8102E"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          strokeOpacity="0.25"
        />

        {/* Paper Airplane at end of flight trail */}
        <g transform="translate(520, 335) rotate(-15) scale(0.85)">
          <path
            d="M 0,0 L 22,-8 L 6,14 L 3,4 Z"
            fill="none"
            stroke="#C8102E"
            strokeWidth="1.5"
            strokeOpacity="0.35"
          />
        </g>

        {/* Faint Ruler Sketch bottom-left */}
        <g transform="translate(40, 520) rotate(-25) scale(0.9)" stroke="#0B2545" strokeWidth="1.2" strokeOpacity="0.12" fill="none">
          <rect x="0" y="0" width="120" height="24" rx="3" />
          <line x1="15" y1="0" x2="15" y2="10" />
          <line x1="30" y1="0" x2="30" y2="15" />
          <line x1="45" y1="0" x2="45" y2="10" />
          <line x1="60" y1="0" x2="60" y2="15" />
          <line x1="75" y1="0" x2="75" y2="10" />
          <line x1="90" y1="0" x2="90" y2="15" />
          <line x1="105" y1="0" x2="105" y2="10" />
        </g>

        {/* Floating Sparkles & Stars */}
        <path
          d="M 680,180 Q 680,195 695,195 Q 680,195 680,210 Q 680,195 665,195 Q 680,195 680,180 Z"
          fill="#D97706"
          opacity="0.35"
        />
        <path
          d="M 160,220 Q 160,230 170,230 Q 160,230 160,240 Q 160,230 150,230 Q 160,230 160,220 Z"
          fill="#C8102E"
          opacity="0.3"
        />
        <path
          d="M 900,690 Q 900,702 912,702 Q 900,702 900,714 Q 900,702 888,702 Q 900,702 900,690 Z"
          fill="#D97706"
          opacity="0.35"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ================= LEFT COLUMN: HERO CONTENT ================= */}
          <div className="lg:col-span-6 xl:col-span-6 text-left">
            
            {/* Badges Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2.5 mb-5"
            >
              {/* Crimson State Board Pill */}
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#8E1220] via-[#A81726] to-[#BD192B] text-white text-xs sm:text-[13px] font-black tracking-wider uppercase shadow-[0_4px_14px_rgba(185,28,28,0.32)]">
                <Sparkles size={14} className="text-amber-300" />
                STATE BOARD – CBSE PATTERN
              </span>

              {/* Light Pinkish Campus Pill */}
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FFF1F2] text-[#BD192B] border border-[#FECDD3] text-xs sm:text-[13px] font-bold shadow-sm">
                Taloja, Panvel Campus
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[68px] font-black text-[#0B2545] tracking-tight uppercase leading-[1.04]">
                RAIGAD INTERNATIONAL
                <span className="block text-[#C8102E] font-black italic tracking-wide text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[86px] mt-1 drop-shadow-sm">
                  SCHOOL
                </span>
              </h1>
            </motion.div>

            {/* Tagline / Motto */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl font-extrabold italic text-[#B45309] tracking-wide mt-3 mb-4 drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)]"
            >
              "Nurturing Young Minds. Building Bright Futures."
            </motion.p>

            {/* Descriptive Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-600 font-medium text-base sm:text-lg leading-relaxed max-w-xl mb-8"
            >
              Providing world-class holistic education through State Board – CBSE Pattern curriculum at Koyana Velhe, Panvel. Inspiring young achievers to lead with intellect and character.
            </motion.p>

            {/* CTA Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4"
            >
              {/* Primary Apply Button */}
              <Link
                to="/admissions"
                className="px-6 sm:px-7 py-3.5 rounded-full font-bold text-white text-sm sm:text-base bg-[#C8102E] hover:bg-[#A90D26] shadow-[0_8px_20px_rgba(200,16,46,0.35)] hover:shadow-[0_12px_28px_rgba(200,16,46,0.45)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                Apply for Admission 2026–27
              </Link>

              {/* Call Helpline Button */}
              <a
                href="tel:08169568369"
                className="px-5 sm:px-6 py-3.5 rounded-full font-bold text-white text-sm sm:text-base bg-[#0B2545] hover:bg-[#07182E] shadow-[0_8px_20px_rgba(11,37,69,0.3)] flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone size={18} className="text-amber-400" />
                <span>081695 68369</span>
              </a>

              {/* View Location Button */}
              <a
                href="https://share.google/BnjgzEawietoNwtBE"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 sm:px-6 py-3.5 rounded-full font-bold text-[#0B2545] text-sm sm:text-base bg-white hover:bg-slate-50 border border-gray-200/90 shadow-sm hover:shadow-md flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MapPin size={18} className="text-[#C8102E]" />
                <span>View Location</span>
              </a>
            </motion.div>
          </div>

          {/* ================= RIGHT COLUMN: SIGNATURE PHOTO COLLAGE ================= */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center lg:justify-end items-center mt-6 lg:mt-0">
            
            <div className="relative w-full max-w-[560px] h-[460px] sm:h-[500px] md:h-[540px]">
              
              {/* Graphic Element 1: Red Halftone Dot Matrix (Top-Right) */}
              <div className="absolute -top-3 right-8 sm:right-12 z-0 grid grid-cols-6 gap-2">
                {[...Array(30)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#C8102E] opacity-75" />
                ))}
              </div>

              {/* Graphic Element 2: Golden Wavy Squiggle Line */}
              <svg
                className="absolute top-14 right-2 sm:right-4 w-16 h-8 z-0"
                viewBox="0 0 64 24"
                fill="none"
              >
                <path
                  d="M2 12 C 10 4, 14 20, 22 12 C 30 4, 34 20, 42 12 C 50 4, 54 20, 62 12"
                  stroke="#D97706"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>

              {/* Graphic Element 3: Sweeping Red & Dark Red Curved Arc Ribbon */}
              <svg
                className="absolute -top-6 -right-6 w-[380px] sm:w-[460px] h-[360px] sm:h-[420px] pointer-events-none z-0"
                viewBox="0 0 460 420"
                fill="none"
              >
                <path
                  d="M 120,40 C 260,-10 390,30 440,160 C 470,240 430,340 340,390"
                  stroke="url(#crimsonGradient)"
                  strokeWidth="32"
                  strokeLinecap="round"
                  opacity="0.95"
                />
                <defs>
                  <linearGradient id="crimsonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#A81424" />
                    <stop offset="50%" stopColor="#C8102E" />
                    <stop offset="100%" stopColor="#8C1120" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Graphic Element 4: Bottom Sweeping Red & Royal Blue Swooshes */}
              <svg
                className="absolute -bottom-6 -left-12 sm:-left-20 w-[420px] sm:w-[520px] h-[220px] pointer-events-none z-10"
                viewBox="0 0 520 220"
                fill="none"
              >
                {/* Royal Blue Bottom Wave */}
                <path
                  d="M 80,180 C 180,220 320,190 440,90 C 480,55 510,20 520,0"
                  stroke="url(#royalBlueGrad)"
                  strokeWidth="34"
                  strokeLinecap="round"
                />
                {/* Crimson Red Upper Wave */}
                <path
                  d="M 130,160 C 230,190 350,160 460,70"
                  stroke="url(#crimsonRedGrad)"
                  strokeWidth="24"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="royalBlueGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0B2545" />
                    <stop offset="100%" stopColor="#1E40AF" />
                  </linearGradient>
                  <linearGradient id="crimsonRedGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#C8102E" />
                    <stop offset="100%" stopColor="#E11D48" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Graphic Element 5: Gold Dot Matrix cluster (near bottom wave) */}
              <div className="absolute bottom-16 right-6 z-0 grid grid-cols-4 gap-2">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-amber-400 opacity-80" />
                ))}
              </div>

              {/* ----------------- FRAME 1 (TOP/MAIN): Classroom Collaboration ----------------- */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute top-2 left-4 sm:left-6 w-[340px] sm:w-[410px] md:w-[430px] h-[210px] sm:h-[250px] md:h-[265px] z-20"
              >
                {/* Red Curved Ribbon Shell */}
                <div className="w-full h-full p-2.5 sm:p-3 bg-gradient-to-tr from-[#9B1120] via-[#C8102E] to-[#BD192B] rounded-[52px_32px_56px_28px] shadow-[0_16px_36px_rgba(185,28,28,0.32)]">
                  {/* Clean White Inner Mat */}
                  <div className="w-full h-full p-1 bg-white rounded-[44px_24px_48px_20px]">
                    <img
                      src={classroomImg}
                      alt="Raigad International School Students in Classroom"
                      className="w-full h-full object-cover rounded-[40px_20px_44px_16px]"
                    />
                  </div>
                </div>
              </motion.div>

              {/* ----------------- FRAME 2 (BOTTOM-RIGHT): Younger Kids with Blocks ----------------- */}
              <motion.div
                initial={{ opacity: 0, scale: 0.88, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="absolute bottom-6 right-0 sm:right-2 w-[210px] sm:w-[245px] md:w-[260px] h-[155px] sm:h-[180px] md:h-[195px] z-20"
              >
                {/* Red Curved Ribbon Shell */}
                <div className="w-full h-full p-2.5 bg-gradient-to-tr from-[#8E1220] via-[#C8102E] to-[#BD192B] rounded-[36px_48px_32px_44px] shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
                  {/* Clean White Inner Mat */}
                  <div className="w-full h-full p-1 bg-white rounded-[30px_42px_26px_38px]">
                    <img
                      src={blocksImg}
                      alt="Primary Students Engaging in Activity Learning"
                      className="w-full h-full object-cover rounded-[26px_38px_22px_34px]"
                    />
                  </div>
                </div>
              </motion.div>

              {/* ----------------- FRAME 3 (BOTTOM-CENTER): Smiling Student Girl ----------------- */}
              <motion.div
                initial={{ opacity: 0, scale: 0.88, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="absolute bottom-2 left-20 sm:left-24 w-[165px] sm:w-[195px] md:w-[210px] h-[140px] sm:h-[165px] md:h-[175px] z-20"
              >
                {/* Red Curved Ribbon Shell */}
                <div className="w-full h-full p-2 bg-gradient-to-tr from-[#9B1120] to-[#C8102E] rounded-[40px_30px_44px_28px] shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
                  {/* Clean White Inner Mat */}
                  <div className="w-full h-full p-1 bg-white rounded-[34px_24px_38px_22px]">
                    <img
                      src={studentImg}
                      alt="Happy Achiever Student of Raigad International School"
                      className="w-full h-full object-cover rounded-[30px_20px_34px_18px]"
                    />
                  </div>
                </div>
              </motion.div>

              {/* ----------------- SCHOOL CREST MEDALLION BADGE ----------------- */}
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', bounce: 0.45, duration: 1, delay: 0.6 }}
                className="absolute bottom-14 right-20 sm:right-28 z-30"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white p-2.5 shadow-[0_12px_28px_rgba(11,37,69,0.28)] border-4 border-white flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                  <img
                    src={logoImg}
                    alt="Raigad International School Crest"
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
