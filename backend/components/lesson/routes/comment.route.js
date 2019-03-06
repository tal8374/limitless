const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const commentController = require('../controllers/comment.controller');

router
    .get(appHelper.createPath('lesson', 'comment', false), commentController.list)
    .post(appHelper.createPath('lesson', 'comment', false), commentController.create);

router
    .get(appHelper.createPath('lesson', 'comment', true), commentController.get)
    .put(appHelper.createPath('lesson', 'comment', true), commentController.update);

module.exports = router;
