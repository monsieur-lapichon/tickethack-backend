var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bookingsRouter = require('./routes/bookings');
var cartsRouter = require('./routes/carts')

const cors = require('cors');
app.use(cors());

var app = express();

const cors = require('cors');
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
<<<<<<< HEAD
app.use('/search', searchRouter);
=======
app.use('/bookings', bookingsRouter);
app.use('/carts', cartsRouter);

>>>>>>> 05428668dc1c3e1ca69f1b04b0c93088cd2f2f45

module.exports = app;
