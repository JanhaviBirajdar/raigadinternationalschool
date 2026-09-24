const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const AdmissionRequest = require('../models/AdmissionRequest');

// POST /api/admissions — Submit new admission
router.post(
  '/',
  [
    body('studentName').notEmpty().withMessage('Student name is required'),
    body('dob').notEmpty().withMessage('Date of birth is required'),
    body('grade').notEmpty().withMessage('Grade is required'),
    body('parentName').notEmpty().withMessage('Parent name is required'),
    body('parentEmail').isEmail().withMessage('Valid email is required'),
    body('parentPhone').notEmpty().withMessage('Phone number is required'),
    body('address').notEmpty().withMessage('Address is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    try {
      const admission = new AdmissionRequest(req.body);
      await admission.save();
      res.status(201).json({ success: true, message: 'Admission application submitted successfully!', data: admission });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
    }
  }
);

// GET /api/admissions — List all admissions
router.get('/', async (req, res) => {
  try {
    const admissions = await AdmissionRequest.find().sort({ createdAt: -1 });
    res.json({ success: true, data: admissions });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

module.exports = router;
