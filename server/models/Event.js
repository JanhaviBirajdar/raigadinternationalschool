const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  date: { type: Date, required: true },
  category: { type: String, enum: ['sports', 'annual-day', 'science-fair', 'festivals', 'other'], default: 'other' },
  image: { type: String, default: '' },
  venue: { type: String, trim: true, default: '' },
  isUpcoming: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Event', eventSchema);
