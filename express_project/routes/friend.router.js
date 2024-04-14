const express = require('express');

const friendController = require('../controllers/friends.controller')

const friendRouter = express.Router(); 

friendRouter.get('/', friendController.getFriends);
friendRouter.get('/:id', friendController.getFriend);
friendRouter.post('/', friendController.postFriend)

module.exports = friendRouter;