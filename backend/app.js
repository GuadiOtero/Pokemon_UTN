var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// var loginRouter = require('./routes/admin/login');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Sesiones
app.use(session({
  secret: '7qe22@gh400!',
  resave: false,
  saveUninitialized: true,
}))

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/admin/login', loginRouter);

const registeredUsers = ['guadalupe', 'guadalupe01', 'guadalupe02'];

app.get('/', function(req,res){
  var conocido = Boolean(req.session.nombre);

  res.render('index', {
    title: 'Iniciar Sesión PokeGame',
    mensaje: 'Bienvenido',
    conocido: conocido,
    nombre: req.session.nombre
  })
});

app.post('/ingresar', function(req, res) {
  const userIngresado = req.body.nombre;

  // Verifico si el usuario esta registrado

  if (registeredUsers.includes(userIngresado)) {
    req.session.nombre = userIngresado;
    res.redirect('/');
  } else {
    res.render('index', {
      title: 'Iniciar Sesión PokeGame',
      conocido: false,
      nombre: null,
      mensaje: 'Usuario no registrado',
    });
  }
});

app.get('/salir', function(req,res){
  req.session.destroy();
  res.redirect('/');
})

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
