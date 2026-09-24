import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, color = 'brand-blue', icon: Icon }) => {
  return (
    <div className="text-center mb-16 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center justify-center p-3 rounded-2xl bg-white shadow-[4px_4px_8px_#e6e6e6,-4px_-4px_8px_#ffffff] mb-4"
      >
        {Icon && <Icon size={32} className={`text-${color}`} />}
      </motion.div>
      
      <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4 tracking-tight">
        {title}
      </h2>
      
      {subtitle && (
        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
          {subtitle}
        </p>
      )}
      
      {/* Decorative squiggle or line could go here */}
      <div className={`h-1.5 w-24 bg-${color} mx-auto mt-6 rounded-full`} />
    </div>
  );
};

export default SectionTitle;
