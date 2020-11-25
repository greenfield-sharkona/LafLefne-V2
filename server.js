const express = require('express');
const app = express();
const routers = require('./routes');

var cookieParser = require('cookie-parser')
const auth = require('./auth')
const path = require('path');

const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

//connect frontend with backend
app.use(express.static(__dirname + '/frontend/build'))

//for deployment
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/frontend/build'))
}

app.get('/', (req, res) => {
  res.json({ mess: "welcome welcome" })
})
app.use('/', routers)
module.exports = app;
