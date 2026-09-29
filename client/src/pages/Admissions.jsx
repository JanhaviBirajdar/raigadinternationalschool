import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Calendar, FileText, CheckCircle2, ChevronRight, Phone, MapPin, ExternalLink, Sparkles } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import axios from 'axios';

const Admissions = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    studentName: '', dob: '', grade: '', board: 'CBSE',
    parentName: '', parentEmail: '', parentPhone: '',
    address: '', previousSchool: ''
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await axios.post('http://localhost:5000/api/admissions', formData);
      if (res.data.success) {
        setStatus('success');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="w-full pt-10 pb-20 bg-brand-light">
      <SectionTitle 
        title="Admissions 2026-27" 
        subtitle="Join RAIGAD INTERNATIONAL school. Nurturing Young Minds. Building Bright Futures." 
        icon={UserPlus} 
        color="brand-coral" 
      />

      {/* Campus Info & Helpline Callout */}
      <div className="max-w-4xl mx-auto px-4 mt-6">
        <div className="clay-card p-6 bg-white border-2 border-brand-yellow/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-black uppercase text-brand-coral tracking-wider">Admissions Desk</span>
            <p className="font-extrabold text-brand-navy text-lg">Now Enrolling for State Board - CBSE Pattern</p>
            <p className="text-xs text-gray-600 flex items-center justify-center sm:justify-start gap-1">
              <MapPin size={14} className="text-brand-coral shrink-0" />
              <span>Koyana Velhe, Ghotkamp Koyana Vele, Taloja, Panvel 410208</span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href="tel:08169568369" 
              className="clay-button bg-brand-coral text-white text-sm py-2.5 px-5 flex items-center gap-2 hover:bg-red-700"
            >
              <Phone size={16} /> 081695 68369
            </a>
            <a
              href="https://share.google/BnjgzEawietoNwtBE"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-brand-navy"
              title="Open Google Maps Location"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Roadmap */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 -translate-y-1/2" />
          {[
            { num: 1, title: 'Submit Form', icon: FileText, color: 'bg-brand-navy' },
            { num: 2, title: 'Campus Visit (Taloja)', icon: Calendar, color: 'bg-brand-coral' },
            { num: 3, title: 'Enrollment & Board Selection', icon: CheckCircle2, color: 'bg-brand-yellow' }
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="flex flex-col items-center mb-8 md:mb-0 bg-brand-light px-4">
              <div className={`w-16 h-16 rounded-full ${item.color} text-white flex items-center justify-center font-black text-2xl shadow-lg border-4 border-white mb-4`}>
                <item.icon size={28} />
              </div>
              <h3 className="font-bold text-brand-dark text-lg text-center">{item.title}</h3>
              <p className="text-gray-500 font-medium text-sm">Step 0{item.num}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <section className="max-w-3xl mx-auto px-4 mt-8">
        <AnimatedSection className="clay-card p-8 md:p-12 border-t-8 border-brand-yellow relative overflow-hidden">
          
          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={48} />
              </div>
              <h2 className="text-3xl font-black text-brand-navy mb-3">Application Submitted!</h2>
              <p className="text-brand-coral font-bold text-sm mb-2">"Nurturing Young Minds. Building Bright Futures."</p>
              <p className="text-gray-600 font-medium mb-6 max-w-lg mx-auto">
                Thank you for applying to <strong>RAIGAD INTERNATIONAL school</strong>. Our admissions team at the Koyana Velhe campus will review your form and contact you shortly.
              </p>
              <div className="p-4 bg-brand-light rounded-2xl border border-gray-200 mb-8 max-w-md mx-auto text-sm text-gray-700 space-y-1">
                <p><strong>Campus Address:</strong> Koyana Velhe, Ghotkamp Koyana Vele, Taloja, Panvel 410208</p>
                <p><strong>Admissions Helpline:</strong> <a href="tel:08169568369" className="text-brand-coral font-bold">081695 68369</a></p>
              </div>
              <button 
                onClick={() => { setStatus('idle'); setStep(1); setFormData({studentName: '', dob: '', grade: '', board: 'CBSE', parentName: '', parentEmail: '', parentPhone: '', address: '', previousSchool: ''}); }}
                className="clay-button bg-brand-coral text-white hover:bg-red-700"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <>
              {/* Step Indicator */}
              <div className="flex justify-between items-center mb-8 pb-4 border-b-2 border-gray-100">
                <h3 className="text-2xl font-black text-brand-navy">
                  {step === 1 && 'Student & Board Selection'}
                  {step === 2 && 'Parent Information'}
                  {step === 3 && 'Review & Submit'}
                </h3>
                <div className="flex space-x-2">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className={`h-2 w-8 rounded-full transition-colors ${s <= step ? 'bg-brand-coral' : 'bg-gray-200'}`} />
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 relative min-h-[300px]">
                
                {/* Step 1 */}
                {step === 1 && (
                  <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="space-y-6">
                    <div>
                      <label className="block font-bold text-gray-700 mb-2">Student's Full Name *</label>
                      <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} required className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-brand-navy outline-none font-medium" placeholder="First and last name" />
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <label className="block font-bold text-gray-700 mb-2">Date of Birth *</label>
                        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-brand-navy outline-none font-medium" />
                      </div>
                      <div>
                        <label className="block font-bold text-gray-700 mb-2">Grade Applying *</label>
                        <select name="grade" value={formData.grade} onChange={handleChange} required className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-brand-navy outline-none bg-white font-medium">
                          <option value="">Select Grade</option>
                          <option value="Kindergarten">Kindergarten</option>
                          <option value="Grade 1">Grade 1</option>
                          <option value="Grade 2">Grade 2</option>
                          <option value="Grade 3">Grade 3</option>
                          <option value="Grade 4">Grade 4</option>
                          <option value="Grade 5">Grade 5</option>
                          <option value="Grade 6">Grade 6</option>
                          <option value="Grade 7">Grade 7</option>
                          <option value="Grade 8">Grade 8</option>
                          <option value="Grade 9">Grade 9</option>
                          <option value="Grade 10">Grade 10</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-bold text-gray-700 mb-2">Board Track *</label>
                        <select name="board" value={formData.board} onChange={handleChange} required className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-brand-navy outline-none bg-white font-bold text-brand-navy">
                          <option value="State Board - CBSE Pattern">State Board - CBSE Pattern</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="space-y-6">
                    <div>
                      <label className="block font-bold text-gray-700 mb-2">Parent/Guardian Name *</label>
                      <input type="text" name="parentName" value={formData.parentName} onChange={handleChange} required className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-brand-navy outline-none font-medium" placeholder="Parent or Guardian name" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-bold text-gray-700 mb-2">Email Address *</label>
                        <input type="email" name="parentEmail" value={formData.parentEmail} onChange={handleChange} required className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-brand-navy outline-none font-medium" placeholder="parent@example.com" />
                      </div>
                      <div>
                        <label className="block font-bold text-gray-700 mb-2">Phone Number *</label>
                        <input type="tel" name="parentPhone" value={formData.parentPhone} onChange={handleChange} required className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-brand-navy outline-none font-medium" placeholder="e.g. 081695 68369" />
                      </div>
                    </div>
                    <div>
                      <label className="block font-bold text-gray-700 mb-2">Residential Address *</label>
                      <textarea name="address" value={formData.address} onChange={handleChange} required rows="2" className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-brand-navy outline-none resize-none font-medium" placeholder="Street, Area, City, Pincode"></textarea>
                    </div>
                  </motion.div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                  <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="space-y-4">
                    <div className="bg-brand-light p-6 rounded-2xl border-2 border-gray-200 space-y-2">
                      <h4 className="font-black text-brand-navy mb-3 border-b pb-2">Student & Academic Preferences</h4>
                      <p><span className="text-gray-500 w-36 inline-block font-semibold">Student Name:</span> <strong>{formData.studentName}</strong></p>
                      <p><span className="text-gray-500 w-36 inline-block font-semibold">Board Track:</span> <span className="bg-brand-navy text-white px-2.5 py-0.5 rounded-full text-xs font-bold">{formData.board}</span></p>
                      <p><span className="text-gray-500 w-36 inline-block font-semibold">Grade Applying:</span> <strong>{formData.grade}</strong></p>
                      <p><span className="text-gray-500 w-36 inline-block font-semibold">Date of Birth:</span> <strong>{formData.dob}</strong></p>
                      
                      <h4 className="font-black text-brand-navy mt-6 mb-3 border-b pb-2 pt-2">Parent / Contact Details</h4>
                      <p><span className="text-gray-500 w-36 inline-block font-semibold">Parent Name:</span> <strong>{formData.parentName}</strong></p>
                      <p><span className="text-gray-500 w-36 inline-block font-semibold">Phone:</span> <strong>{formData.parentPhone}</strong></p>
                      <p><span className="text-gray-500 w-36 inline-block font-semibold">Email:</span> <strong>{formData.parentEmail}</strong></p>
                      <p><span className="text-gray-500 w-36 inline-block font-semibold">Address:</span> <strong>{formData.address}</strong></p>
                    </div>
                    {status === 'error' && (
                      <p className="text-red-500 font-bold">Failed to submit application. Please ensure all required fields are filled.</p>
                    )}
                  </motion.div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-8 border-t-2 border-gray-100">
                  {step > 1 ? (
                    <button type="button" onClick={prevStep} className="px-6 py-2 rounded-full font-bold text-gray-600 hover:bg-gray-100">
                      Back
                    </button>
                  ) : <div></div>}
                  
                  {step < 3 ? (
                    <button type="button" onClick={nextStep} className="clay-button bg-brand-navy text-white flex items-center gap-2 hover:bg-slate-900">
                      Next Step <ChevronRight size={20} />
                    </button>
                  ) : (
                    <button type="submit" disabled={status === 'loading'} className="clay-button bg-brand-coral hover:bg-red-700 text-white flex items-center gap-2">
                      {status === 'loading' ? 'Submitting Application...' : 'Confirm & Submit Application'}
                    </button>
                  )}
                </div>
              </form>
            </>
          )}
        </AnimatedSection>
      </section>
    </div>
  );
};

export default Admissions;
