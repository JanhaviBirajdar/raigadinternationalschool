const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const ContactInquiry = require('../models/ContactInquiry');

// POST /api/contact — Submit contact inquiry
router.post(
  '/',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('subject').notEmpty().withMessage('Subject is required'),
    body('message').notEmpty().withMessage('Message is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    try {
      const inquiry = new ContactInquiry(req.body);
      await inquiry.save();
      res.status(201).json({ success: true, message: 'Your message has been sent! We will get back to you soon.' });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
    }
  }
);

// GET /api/contact — List all inquiries
router.get('/', async (req, res) => {
  try {
    const inquiries = await ContactInquiry.find().sort({ createdAt: -1 });
    res.json({ success: true, data: inquiries });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

module.exports = router;
