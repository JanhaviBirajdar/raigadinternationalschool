const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    date: { type: Date, required: true },
    location: { type: String },
    category: { type: String, enum: ['academic', 'cultural', 'sports', 'other'], default: 'other' },
    imageUrl: { type: String },
    isUpcoming: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Event', eventSchema);
