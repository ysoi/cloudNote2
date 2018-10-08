var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// 
var session=require("express-session");
// 数据库是否连接
var dbConnect=require("./dateBase/config");
var MongoStore=require("connect-mongo")(session);

// 逻辑控制
var index=require("./controller/index");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// 运用session
app.use(session({
  name:'ys',
  secret:'123456',
  resave:false,
  saveUninitialized:false,
  cookie:{secure:false,expires:1000*60*60*24*14},//是否是https协议
  store:new MongoStore({mongooseConnection:dbConnect})

}))
app.use('/',index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
