import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, ExternalLink, Sparkles } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      // Sending to local backend
      const res = await axios.post('http://localhost:5000/api/contact', formData);
      if (res.data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.response?.data?.message || 'Failed to send message. Please try again.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="w-full pt-10 pb-20 bg-brand-light">
      <SectionTitle 
        title="Contact RAIGAD INTERNATIONAL" 
        subtitle="Reach out for admissions, campus tours, or academic inquiries. Nurturing Young Minds. Building Bright Futures." 
        icon={Mail} 
        color="brand-coral" 
      />

      <div className="max-w-7xl mx-auto px-4 mt-8 grid lg:grid-cols-2 gap-12">
        {/* Contact Info & Map */}
        <div className="space-y-6">
          <AnimatedSection delay={0.1}>
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Call Us */}
              <div className="clay-card flex flex-col items-center text-center p-6 group hover:-translate-y-1 border-t-4 border-brand-coral">
                <div className="w-14 h-14 rounded-full bg-red-50 text-brand-coral flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-sm">
                  <Phone size={26} />
                </div>
                <h3 className="text-lg font-black text-brand-navy mb-1">Call Us Directly</h3>
                <a href="tel:08169568369" className="text-brand-coral font-black text-lg hover:underline">
                  081695 68369
                </a>
                <p className="text-xs text-gray-500 font-semibold mt-1">Mon - Sat: 8 AM - 4 PM</p>
              </div>

              {/* Email Us */}
              <div className="clay-card flex flex-col items-center text-center p-6 group hover:-translate-y-1 border-t-4 border-brand-navy">
                <div className="w-14 h-14 rounded-full bg-blue-50 text-brand-navy flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-sm">
                  <Mail size={26} />
                </div>
                <h3 className="text-lg font-black text-brand-navy mb-1">Email Desk</h3>
                <a href="mailto:info@raigadinternationalschool.com" className="text-gray-700 font-bold text-xs hover:text-brand-navy truncate max-w-full">
                  info@raigadinternationalschool.com
                </a>
                <p className="text-xs text-gray-500 font-semibold mt-1">24/7 Response time</p>
              </div>
            </div>

            {/* Address Banner Card */}
            <div className="clay-card p-6 mt-4 border-l-4 border-brand-yellow flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-brand-coral shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-black text-brand-navy text-base">Campus Address</h4>
                  <p className="text-sm font-semibold text-gray-700 leading-snug">
                    Koyana Velhe, Ghotkamp Koyana Vele, Taloja, Panvel, Maharashtra 410208
                  </p>
                  <span className="inline-block mt-1 text-[11px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                    Curriculum: State Board - CBSE Pattern
                  </span>
                </div>
              </div>
              <a
                href="https://share.google/BnjgzEawietoNwtBE"
                target="_blank"
                rel="noopener noreferrer"
                className="clay-button bg-brand-coral text-white text-xs px-4 py-2.5 flex items-center gap-1.5 shrink-0 hover:bg-red-700"
              >
                <ExternalLink size={14} /> Open Maps
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="clay-card p-2 md:p-3 h-[380px] overflow-hidden">
            <iframe
              title="RAIGAD INTERNATIONAL school Location Map"
              src="https://maps.google.com/maps?q=RAIGAD+INTERNATIONAL+School,+Koyana+Velhe,+Ghotkamp+Koyana+Vele,+Taloja,+Panvel,+Maharashtra+410208&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '20px' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </AnimatedSection>
        </div>

        {/* Contact Form */}
        <AnimatedSection delay={0.3} className="clay-card p-8 md:p-12 h-fit border-t-8 border-brand-navy">
          <h2 className="text-3xl font-black text-brand-dark mb-8">Send us a message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-brand-dark font-bold mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-brand-blue focus:outline-none transition-colors font-medium"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label className="block text-brand-dark font-bold mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-brand-blue focus:outline-none transition-colors font-medium"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-brand-dark font-bold mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-brand-blue focus:outline-none transition-colors font-medium"
                placeholder="Admission Inquiry"
              />
            </div>

            <div>
              <label className="block text-brand-dark font-bold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-brand-blue focus:outline-none transition-colors font-medium resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="clay-button w-full bg-brand-coral hover:bg-red-700 text-white flex items-center justify-center gap-2 text-lg disabled:opacity-70 transition-all"
            >
              {status === 'loading' ? 'Sending Message...' : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>

            {status === 'success' && (
              <div className="p-4 bg-green-100 text-green-700 rounded-2xl flex items-center gap-2 font-bold animate-pulse">
                <CheckCircle2 size={24} />
                Message sent successfully!
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 bg-red-100 text-red-700 rounded-2xl font-bold">
                {errorMessage}
              </div>
            )}
          </form>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Contact;
