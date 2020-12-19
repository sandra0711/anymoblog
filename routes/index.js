const express = require('express');
const router = express.Router();
const Entry = require('../models/entry');
const Tag= require('../models/tag');

router.get('/', async (req, res) => {
  const entries = await Entry.find().populate('tags');
  res.render('index', { entries});
});

module.exports = router;
