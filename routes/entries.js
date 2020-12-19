const express = require('express');
const router = express.Router();

const Tag = require('../models/tag');
const Entry = require('../models/entry');

router.get('/:id', async (req, res) => {
  const entry = await Entry.findById(req.params.id).populate('tags');
  res.render('show', { entry });
})
router.route('/')
  .get(async (req, res) => {
    const tags = await Tag.find();
    res.render('new', {tags});
  })
  .post(async (req, res) => {
    const newEntry = new Entry({
    title: req.body.title,
    text: req.body.text,
    tags: [req.body.tags]
  });
    await newEntry.save();
    res.redirect('/');
  });
router.route('/edit/:id')
  .get(async (req, res) => {
    const newTags = await Tag.find()||[];
    const entry = await Entry.findById(req.params.id).populate('tags');
    res.render('edit', { entry, newTags });
  })
  .post(async (req, res) => {
    const entryEdit = await Entry.findById(req.params.id);
    const array = entryEdit.tags;
    array.push(req.body.newTags);
    await Entry.updateOne(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          text: req.body.text,
          tags: array
        }
      });
    const entry = await Entry.findById(req.params.id).populate('tags');

    res.render('show', { entry });
    });


  // .post(async (req, res) => {
  //   const entry = await Entry.findById(req.params.id);
  //   const array = entry.tags;
  //       array.push(req.body.newTags);
  //       console.log(array);
  //       await Entry.updateOne(
  //         {_id: req.params.id},
  //         {$set:{title: req.body.title,
  //           text: req.body.text,
  //           tags: array}
  //         });
  //   // const entry = await Entry.findById(req.params.id);
  //   res.redirect(`/entry/${entry.id}`)
  // });

router.get('/delete/:id', async (req, res) => {
  const delt = await Entry.findById(req.params.id)
  await Entry.deleteOne({ title: delt.title });
  res.redirect('/');
  })

module.exports = router;
