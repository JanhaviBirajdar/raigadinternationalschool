const express = require('express');
const router = express.Router();
const Enquiry = require('../models/Enquiry');

// POST /api/enquiry  — submit a new enquiry
router.post('/', async (req, res) => {
  try {
    const enquiry = new Enquiry(req.body);
    await enquiry.save();
    res.status(201).json({ success: true, message: 'Enquiry received. We will contact you shortly.' });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// GET /api/enquiry  — list all (admin use)
router.get('/', async (_req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.json(enquiries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
