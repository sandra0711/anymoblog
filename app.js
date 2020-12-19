// modules//
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// server
const app = express();
// const session = require('express-session');
// require('dotenv').config();
const mongoose = require('mongoose');
// const MongoStore = require('connect-mongo')(session);
// imports//
const entryRouter = require('./routes/entries');
const tagRouter = require('./routes/tags');
const indexRouter = require('./routes/index');

// mongoose
mongoose.connect(
  'mongodb://localhost:27017/blog',
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  
  // middlewares//
  app.set('view engine', 'hbs');
  app.set('views', path.join(__dirname, 'views'));
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/entry', entryRouter);
  app.use('/tag', tagRouter);
  app.use('/', indexRouter);
  app.use(logger('dev'));
  
const port = process.env.PORT || 3000;
app.listen(port);

module.exports = app;
