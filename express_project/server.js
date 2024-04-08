const express = require('express');

const app = express();

const PORT = 3000;

app.use((req,res,next) => {
  console.log(`${req.method} ${req.url}`);
  next();
})

const friends = [
  {
    id : 0,
    name : 'Kyaw Kyaw'
  },
  {
    id : 1,
    name : 'Aung Aung'
  }
]

app.get('/', (req,res) => {
  res.send('Hello World')
});

app.get('/friends', (req,res) => {
  res.send(friends)
});

app.get('/friends/:id', (req,res) => {
  const id = req.params.id;
  const friend = friends[id];
  if(friend){
    res.status(200).json(friend)
  } else {
    res.status(404).json({
      error : "Your friend doesn't exist."
    })
  }
});

app.listen(PORT , () => {
  console.log(`Server is listening on ${PORT}`)
});