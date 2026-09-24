import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
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
      <SectionTitle title="Contact Us" subtitle="We'd love to hear from you! Reach out for admissions or inquiries." icon={Mail} color="brand-green" />

      <div className="max-w-7xl mx-auto px-4 mt-12 grid lg:grid-cols-2 gap-12">
        {/* Contact Info & Map */}
        <div className="space-y-8">
          <AnimatedSection delay={0.1}>
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Call Us */}
              <div className="clay-card flex flex-col items-center text-center p-8 group hover:-translate-y-2">
                <div className="w-16 h-16 rounded-full bg-brand-yellow/20 text-brand-yellow flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Phone size={32} />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">Call Us</h3>
                <p className="text-gray-600 font-medium">+1 234 567 890</p>
                <p className="text-gray-600 font-medium">+1 098 765 432</p>
              </div>

              {/* Email Us */}
              <div className="clay-card flex flex-col items-center text-center p-8 group hover:-translate-y-2">
                <div className="w-16 h-16 rounded-full bg-brand-blue/20 text-brand-blue flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail size={32} />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">Email Us</h3>
                <p className="text-gray-600 font-medium">hello@raigadschool.edu</p>
                <p className="text-gray-600 font-medium">admissions@raigad.edu</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="clay-card p-2 md:p-4 h-[400px]">
            <iframe
              title="School Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115132.86107231454!2d73.1818!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '24px' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </AnimatedSection>
        </div>

        {/* Contact Form */}
        <AnimatedSection delay={0.3} className="clay-card p-8 md:p-12 h-fit">
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
              className="clay-button w-full bg-brand-blue text-white flex items-center justify-center gap-2 text-lg disabled:opacity-70"
            >
              {status === 'loading' ? 'Sending...' : (
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
