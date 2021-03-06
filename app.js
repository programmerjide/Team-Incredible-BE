const express = require('express');

const app = express();
// const cors = require('cors');
const bodyParser = require('body-parser');
const mainRoute = require('./routes/route');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// app.use(cors());

app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { varible: 'hello Guys' });
});

app.use('/api/v1', mainRoute);

module.exports = app;
