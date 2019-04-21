const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const messageController = require('../controllers/message.controller');

console.log(appHelper.createPath('message', 'message', false))

router
    .get(appHelper.createPath('message', 'message', false), messageController.list)
    .post(appHelper.createPath('message', 'message', false), messageController.create);

router
    .put(appHelper.createPath('message', 'message', true), messageController.update);

module.exports = router;
