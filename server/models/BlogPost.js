const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String },
    content: { type: String, required: true },
    author: { type: String, default: 'RIS Editorial Team' },
    category: { type: String, default: 'News' },
    tags: [String],
    coverImage: { type: String },
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('BlogPost', blogPostSchema);
