var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config()
const session = require('express-session');
const methodOverride = require('method-override');

const localsUserCheck = require('./middlewares/localsUserCheck')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/usuario');

var app = express();

// app.all('*', function(req, res, next){
//   console.log('req start: ',req.secure, req.hostname, req.url, app.get('port'));
//   if (req.secure) {
//     console.log("entra en req.secure*********************************");
//       return next();
//   }

//   res.redirect('https://'+req.headers.host + ':' + app.get('secPort') + req.url);
// });
// app.use(function(req,resp,next){
//   let url = req.headers.referer;
//   let cont = 0;
//   let newURL="";
//   for (let index = 0; index < url.length; index++) {
//     if(cont !=4){
//       newURL += url[index];
//       cont++;
//     }    
//   }
//   // console.log(req.headers.referer);
//   // console.log(req.headers);

//   if (newURL == 'http') {
//       return resp.redirect(301, 'https://' + req.headers.host + '/');
//   } else {
//       return next();
//   }
// });
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

// //PRUEBA
// app.all('*', function(req, res, next){
//     console.log('req start: ',req.secure, req.hostname, req.url, app.get('port'));
//     if (req.secure) {
//       console.log("entra en req.secure*********************************");
//         return next();
//     }
  
//     res.redirect('https://'+req.headers.host);
//   });
// set up plain http server
// var http = express();

// set up a route to redirect http to https
// http.get('*', function(req, res) {
//     return res.redirect('https://' + req.headers.host);

//     // Or, if you don't want to automatically detect the domain name from the request header, you can hard code it:
//     // res.redirect('https://example.com' + req.url);
// })
app.use(session({
  secret:"Saldo", 
  resave: true,
  saveUninitialized: true
}))

app.use(localsUserCheck);

app.use('/', indexRouter);
app.use('/admin', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(res.render('error',{
    title:"Error al encontrar la página",
    css: 'errorURL.css',
    errorURL: 'errorURL.js'
  }));
});
// app.use(function (req, res, next) {
//   var schema = (req.headers.host || '').toLowerCase();
//   console.log(req.headers['x-forwarded-proto'])
//   if (schema === 'https') {
//     console.log("No esta redireccionando");
//     next();
//   } else {
//     console.log("Esta redireccionando");
//     return res.redirect('www.google.com');
//   }
// });

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
