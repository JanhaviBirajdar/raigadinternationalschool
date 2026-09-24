import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Calendar, FileText, CheckCircle2, ChevronRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import axios from 'axios';

const Admissions = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    studentName: '', dob: '', grade: '',
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
      <SectionTitle title="Admissions" subtitle="Join the Raigad School family. Start your child's journey today." icon={UserPlus} color="brand-blue" />

      {/* Roadmap */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 -translate-y-1/2" />
          {[
            { num: 1, title: 'Submit Form', icon: FileText, color: 'brand-blue' },
            { num: 2, title: 'Campus Visit', icon: Calendar, color: 'brand-yellow' },
            { num: 3, title: 'Enrollment', icon: CheckCircle2, color: 'brand-green' }
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="flex flex-col items-center mb-8 md:mb-0 bg-brand-light px-4">
              <div className={`w-16 h-16 rounded-full bg-${item.color} text-white flex items-center justify-center font-black text-2xl shadow-lg border-4 border-white mb-4`}>
                <item.icon size={28} />
              </div>
              <h3 className="font-bold text-brand-dark text-lg">{item.title}</h3>
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
              <h2 className="text-3xl font-black text-brand-dark mb-4">Application Submitted!</h2>
              <p className="text-gray-600 font-medium mb-8">
                Thank you for applying to Raigad School. Our admissions team will review your application and contact you shortly.
              </p>
              <button 
                onClick={() => { setStatus('idle'); setStep(1); setFormData({studentName: '', dob: '', grade: '', parentName: '', parentEmail: '', parentPhone: '', address: '', previousSchool: ''}); }}
                className="clay-button bg-brand-blue text-white"
              >
                Submit Another
              </button>
            </div>
          ) : (
            <>
              {/* Step Indicator */}
              <div className="flex justify-between items-center mb-8 pb-4 border-b-2 border-gray-100">
                <h3 className="text-2xl font-black text-brand-dark">
                  {step === 1 && 'Student Information'}
                  {step === 2 && 'Parent Information'}
                  {step === 3 && 'Review & Submit'}
                </h3>
                <div className="flex space-x-2">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className={`h-2 w-8 rounded-full transition-colors ${s <= step ? 'bg-brand-blue' : 'bg-gray-200'}`} />
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 relative min-h-[300px]">
                
                {/* Step 1 */}
                {step === 1 && (
                  <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="space-y-6">
                    <div>
                      <label className="block font-bold text-gray-700 mb-2">Student's Full Name *</label>
                      <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} required className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-brand-blue outline-none" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-bold text-gray-700 mb-2">Date of Birth *</label>
                        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-brand-blue outline-none" />
                      </div>
                      <div>
                        <label className="block font-bold text-gray-700 mb-2">Grade Applying For *</label>
                        <select name="grade" value={formData.grade} onChange={handleChange} required className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-brand-blue outline-none bg-white">
                          <option value="">Select Grade</option>
                          <option value="Kindergarten">Kindergarten</option>
                          <option value="Grade 1">Grade 1</option>
                          <option value="Grade 2">Grade 2</option>
                          <option value="Grade 3">Grade 3</option>
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
                      <input type="text" name="parentName" value={formData.parentName} onChange={handleChange} required className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-brand-blue outline-none" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-bold text-gray-700 mb-2">Email Address *</label>
                        <input type="email" name="parentEmail" value={formData.parentEmail} onChange={handleChange} required className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-brand-blue outline-none" />
                      </div>
                      <div>
                        <label className="block font-bold text-gray-700 mb-2">Phone Number *</label>
                        <input type="tel" name="parentPhone" value={formData.parentPhone} onChange={handleChange} required className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-brand-blue outline-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block font-bold text-gray-700 mb-2">Residential Address *</label>
                      <textarea name="address" value={formData.address} onChange={handleChange} required rows="2" className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-brand-blue outline-none resize-none"></textarea>
                    </div>
                  </motion.div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                  <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="space-y-4">
                    <div className="bg-gray-50 p-6 rounded-2xl border-2 border-gray-100">
                      <h4 className="font-bold text-brand-dark mb-4 border-b pb-2">Student Details</h4>
                      <p><span className="text-gray-500 w-32 inline-block">Name:</span> <strong>{formData.studentName}</strong></p>
                      <p><span className="text-gray-500 w-32 inline-block">Grade:</span> <strong>{formData.grade}</strong></p>
                      <p><span className="text-gray-500 w-32 inline-block">DOB:</span> <strong>{formData.dob}</strong></p>
                      
                      <h4 className="font-bold text-brand-dark mt-6 mb-4 border-b pb-2">Parent Details</h4>
                      <p><span className="text-gray-500 w-32 inline-block">Name:</span> <strong>{formData.parentName}</strong></p>
                      <p><span className="text-gray-500 w-32 inline-block">Contact:</span> <strong>{formData.parentEmail} / {formData.parentPhone}</strong></p>
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
                    <button type="button" onClick={nextStep} className="clay-button bg-brand-blue text-white flex items-center gap-2">
                      Next Step <ChevronRight size={20} />
                    </button>
                  ) : (
                    <button type="submit" disabled={status === 'loading'} className="clay-button bg-brand-green text-white flex items-center gap-2">
                      {status === 'loading' ? 'Submitting...' : 'Submit Application'}
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
