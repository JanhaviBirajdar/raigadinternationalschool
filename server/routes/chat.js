const express = require('express');
const router = express.Router();
const faq = require('../data/faq.json');

router.post('/', (req, res) => {
  const { message = '' } = req.body;
  const lower = message.toLowerCase();

  const match = faq.find((entry) =>
    entry.keywords.some((kw) => lower.includes(kw))
  );

  if (match) {
    return res.json({ reply: match.answer });
  }

  return res.json({
    reply:
      "Thank you for your question! For personalised assistance, please call us at +91 90000 00000 or email info@raigadschool.edu.in. Our team will be happy to help you.",
  });
});

module.exports = router;
