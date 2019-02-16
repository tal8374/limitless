var express = require('express');
var router = express.Router();

const messageController = require('../controllers/message.controller');

router
    .get('/', messageController.getMessages);

router
    .get('/:messageId', messageController.getMessage)
    .put('/:messageId', messageController.updateMessage)
    .post('/:messageId', messageController.createMessage)
    .delete('/:messageId', messageController.deleteMessage);

module.exports = router;
