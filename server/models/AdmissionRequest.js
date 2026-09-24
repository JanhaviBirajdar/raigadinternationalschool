const mongoose = require('mongoose');

const admissionRequestSchema = new mongoose.Schema({
  studentName: { type: String, required: true, trim: true },
  dob: { type: String, required: true },
  grade: { type: String, required: true },
  parentName: { type: String, required: true, trim: true },
  parentEmail: { type: String, required: true, trim: true, lowercase: true },
  parentPhone: { type: String, required: true, trim: true },
  address: { type: String, required: true, trim: true },
  previousSchool: { type: String, trim: true, default: '' },
  message: { type: String, trim: true, default: '' },
  status: { type: String, enum: ['pending', 'reviewed', 'accepted', 'rejected'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('AdmissionRequest', admissionRequestSchema);
