const express = require('express');
const friendController = require('./controllers/friends.controller')

const app = express();

const PORT = 3000;

app.use((req,res,next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta} ms`);
})

app.use(express.json());

app.get('/', (req,res) => {
  res.send('Hello World')
});

app.get('/friends', friendController.getFriends);

app.get('/friends/:id', friendController.getFriend);

app.post('/friends', friendController.postFriend)

app.listen(PORT , () => {
  console.log(`Server is listening on ${PORT}`)
});