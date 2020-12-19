const express = require('express');
const router = express.Router();
const Tag = require('../models/tag');
const Entry = require('../models/entry');

router.get('/', async (req, res) => {
  const tags = await Tag.find();
  console.log(tags);
  res.render('search', { tags });
});
router.post('/', async (req, res) => {
  // console.log(req.body)
  // const tag = await Tag.findById(req.body.tags);
  // console.log(tag);
  const entries = await Entry.find({ tags: { $in: [req.body.tags] }})

  res.render('index', { entries });
});

module.exports = router;
