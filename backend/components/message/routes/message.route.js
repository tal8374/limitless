const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const messageController = require('../controllers/message.controller');


router
    .get(appHelper.createPath('message', 'message', false), messageController.getMessages);

router
    .get(appHelper.createPath('message', 'message', true), messageController.getMessage)
    .put(appHelper.createPath('message', 'message', true), messageController.updateMessage)
    .post(appHelper.createPath('message', 'message', true), messageController.createMessage)
    .delete(appHelper.createPath('message', 'message', true), messageController.deleteMessage);

module.exports = router;
