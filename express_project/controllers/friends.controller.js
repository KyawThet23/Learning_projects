const model = require('../models/friend.model')

function getFriends (req,res) {
  res.send(model)
}

function getFriend (req,res) {
  const id = req.params.id;
  const friend = model[id];
  if(friend){
    res.status(200).json(friend)
  } else {
    res.status(404).json({
      error : "Your friend doesn't exist."
    })
  }
}

function postFriend (req,res) {
  if(!req.body.name){
    return res.status(400).json({
      error:'Missing name'
    })
  }
  const newFriend = {
    name : req.body.name,
    id : model.length
  };
  model.push(newFriend);
  res.json(newFriend);
}

module.exports = {
  getFriend,
  getFriends,
  postFriend
}