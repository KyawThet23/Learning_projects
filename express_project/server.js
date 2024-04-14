const express = require('express');
const path = require('path');

const friendRouter = require('./routes/friend.router')

const app = express();

const PORT = 3000;

app.use((req,res,next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta} ms`);
})

app.use(express.json());
app.use('/site',express.static(path.join(__dirname, 'public')));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'My Friends Are VERYY Clever',
    caption: 'Let\'s go skiing!',
  });
});

app.get('/', (req,res) => {
  res.send('Hello World')
});

app.use('/friends',friendRouter)

app.listen(PORT , () => {
  console.log(`Server is listening on ${PORT}`)
});