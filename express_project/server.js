const express = require('express');

const app = express();

const PORT = 3000;

app.use((req,res,next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta} ms`);
})

app.use(express.json());

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

app.post('/friends',(req,res) => {
  if(!req.body.name){
    return res.status(400).json({
      error:'Missing name'
    })
  }
  const newFriend = {
    name : req.body.name,
    id : friends.length
  };
  friends.push(newFriend);
  res.json(newFriend);
})

app.listen(PORT , () => {
  console.log(`Server is listening on ${PORT}`)
});