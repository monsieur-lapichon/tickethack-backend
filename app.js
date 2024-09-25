var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
const cors = require('cors');
app.use(cors());

var indexRouter = require('./routes/index');
var bookingsRouter = require('./routes/bookings');
var cartsRouter = require('./routes/carts');
var searchRouter = require ('./routes/search');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/search', searchRouter);
app.use('/bookings', bookingsRouter);
app.use('/carts', cartsRouter);


module.exports = app;
