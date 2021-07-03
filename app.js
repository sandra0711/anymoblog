const express = require('express');

const app = express();
const path = require('path');

const { dbConnect } = require('./dbconnect');

dbConnect();


const entryRouter = require('./routes/entries');
const tagRouter = require('./routes/tags');
const indexRouter = require('./routes/index');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/entry', entryRouter);
app.use('/tag', tagRouter);
app.use('/', indexRouter);
  
const port = process.env.PORT || 3000;
app.listen(port);

module.exports = app;
