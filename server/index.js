require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const enquiryRoutes = require('./routes/enquiry');
const eventRoutes = require('./routes/events');
const blogRoutes = require('./routes/blog');
const chatRoutes = require('./routes/chat');

const app = express();

// ── Middleware ───────────────────────────────────────────────────────────────
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());

// ── Routes ───────────────────────────────────────────────────────────────────
app.use('/api/enquiry', enquiryRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/chat', chatRoutes);

app.get('/api/health', (_req, res) => res.json({ status: 'ok', ts: new Date() }));

// ── DB + Server ───────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/raigad';

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('✅  MongoDB connected');
    app.listen(PORT, () => console.log(`🚀  Server running on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error('❌  MongoDB connection failed:', err.message);
    console.log('⚠️  Starting server anyway without DB support...');
    app.listen(PORT, () => console.log(`🚀  Server running on http://localhost:${PORT}`));
  });
