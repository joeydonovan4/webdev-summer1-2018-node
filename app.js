var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// Set up default mongoose connection
mongoose.connect('mongodb://localhost/webdev-assignment-5', (err) => {
    if (err) throw err;
    console.log('Successfully connected');
});

// Get mongoose to use the global promise library
mongoose.Promise = global.Promise;
// Get default connection
var db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

var session = require('express-session');
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'any string',
    cookie: {
        maxAge: 30 * 60 * 1000
    },
    rolling: true
}));

var home = require('./routes/home');
app.use('/api', home);

var users = require('./routes/users');
app.use('/api/users', users);

var sections = require('./routes/sections');
app.use('/api/sections', sections);

app.listen(4000);