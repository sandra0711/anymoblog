const mongoose = require('mongoose');


const tagSchema = new mongoose.Schema({
  reference: String,
});


module.exports = mongoose.model('Tag', tagSchema);
