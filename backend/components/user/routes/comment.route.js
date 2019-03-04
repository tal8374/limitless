const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const commentController = require('../controllers/comment.controller');

router
    .get(appHelper.createPath('user', 'comment', false), commentController.list)
    .post(appHelper.createPath('user', 'comment', false), commentController.create);

router
    .put(appHelper.createPath('user', 'comment', true), commentController.update)
    .delete(appHelper.createPath('user', 'comment', true), commentController.remove);

module.exports = router;
