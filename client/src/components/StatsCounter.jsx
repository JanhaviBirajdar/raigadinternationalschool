import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const StatsCounter = ({ end, label, suffix = '', duration = 2, icon: Icon, color = 'brand-blue' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      
      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      className="clay-card flex flex-col items-center justify-center p-8 text-center group hover:scale-105"
    >
      <div className={`p-4 rounded-2xl bg-${color}/10 text-${color} mb-4 group-hover:rotate-12 transition-transform`}>
        {Icon && <Icon size={40} />}
      </div>
      <div className="text-4xl md:text-5xl font-black text-brand-dark mb-2">
        {count}{suffix}
      </div>
      <div className="text-lg font-bold text-gray-500 uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
};

export default StatsCounter;
