// Подключаем mongoose.
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blog', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const Tag = require('./models/tag');

const tag = [
  { reference: 'Политика' },
  { reference: 'Культура' },
  { reference: 'Искусство' },
  { reference: 'Новые технологии' },
  { reference: 'Кино' },
  { reference: 'ЗОЖ' },
];

Tag.insertMany(tag).then(() => {
  mongoose.connection.close();
});
