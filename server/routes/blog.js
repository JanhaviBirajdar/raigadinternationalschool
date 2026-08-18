const express = require('express');
const router = express.Router();
const BlogPost = require('../models/BlogPost');

// GET /api/blog
router.get('/', async (_req, res) => {
  try {
    const posts = await BlogPost.find({ published: true }).sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/blog/:slug
router.get('/:slug', async (req, res) => {
  try {
    const post = await BlogPost.findOne({ slug: req.params.slug, published: true });
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/blog (admin)
router.post('/', async (req, res) => {
  try {
    const post = new BlogPost(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
