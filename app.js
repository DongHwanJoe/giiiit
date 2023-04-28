var express = require('express');
var bodyParser = require('body-parser');
const session = require("express-session");
const ejs = require('ejs');
var app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const testRouter = require('./routers/testRouter');
app.use(session({
    secret: 'dhjoe',
    resave: false,
    saveUninitialized: true
}));

const todoRoute = require('./routers/todoRouter');
const usersRoute = require('./routers/usersRouter');
app.use('/api/todo', todoRoute);
app.use('/api/users', usersRoute);
app.use('/test', testRouter);

app.get('/', (req, res) => {
    res.send("hello");
});

var server = app.listen(3000, function(){
    console.log('Server is running!');
})