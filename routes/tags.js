const express = require('express');
const router = express.Router();
const Tag = require('../models/tag');
const Entry = require('../models/entry');

router.get('/', async (req, res) => {
  const tags = await Tag.find();

  res.render('search', { tags });
});
router.post('/', async (req, res) => {

  const entries = await Entry.find({ tags: { $in: [req.body.tags] }})

  res.render('index', { entries });
});

module.exports = router;
