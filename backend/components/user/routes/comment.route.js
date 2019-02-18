const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const commentController = require('../controllers/comment.controller');

router
    .get(appHelper.createPath('user', 'comment', false), commentController.getComments);

router
    .get(appHelper.createPath('user', 'comment', true), commentController.getComment)
    .put(appHelper.createPath('user', 'comment', true), commentController.updateComment)
    .post(appHelper.createPath('user', 'comment', true), commentController.createComment)
    .delete(appHelper.createPath('user', 'comment', true), commentController.deleteComment);

module.exports = router;
