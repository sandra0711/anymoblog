const mongoose = require('mongoose');


const entrySchema = new mongoose.Schema({
  title: String,
  text: String,
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }]
});


module.exports = mongoose.model('Entry', entrySchema);
