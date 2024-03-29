const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Middleware para static content
// public tiene prioridad sobre estas definiciones
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Douglas Alejandro',
    titulo: 'Curso de node',
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Douglas Alejandro',
    titulo: 'Curso de node',
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Douglas Alejandro',
    titulo: 'Curso de node',
  });
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
