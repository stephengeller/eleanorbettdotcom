var express = require('express')
var path = require('path')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

var index = require('./routes/index')
var reactapp = require('./routes/reactapp')
var bowling = require('./routes/bowling')
var games = require('./routes/games')
var monthlymissout = require('./routes/monthlymissout')

var expressValidator = require('express-validator')
var session = require('express-session')

var app = express()

app.set('views', __dirname + '/views/', __dirname + '/views/blog')
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(expressValidator())
app.use(
	session({
		secret: 'stephengeller-website',
		name: 'sgCookie',
		proxy: true,
		resave: true,
		saveUninitialized: true
	})
)
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', index)
app.use('/games', games)
app.use('/bowling', bowling)
app.use('/reactapp', reactapp)
app.use('/monthlymissout', monthlymissout)

app.use(function(req, res, next) {
	var err = new Error('Not Found')
	err.status = 404
	next(err)
})

app.use(function(err, req, res) {
	res.locals.message = err.message
	res.locals.error = req.app.get('env') === 'development' ? err : {}
	res.status(err.status || 500)
	res.render('error')
})

module.exports = app
