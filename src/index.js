const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const morgan = require('morgan');
const handlebars  = require('express-handlebars');

//HTTP loger
app.use(morgan('combined'))

//Template Engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

app.get('/trang-chu', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})