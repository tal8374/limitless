const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const commentController = require('../controllers/comment.controller');

router
    .get(appHelper.createPath('comment', 'comment', false), commentController.getComments);

router
    .get(appHelper.createPath('comment', 'comment', true), commentController.getComment)
    .put(appHelper.createPath('comment', 'comment', true), commentController.updateComment)
    .post(appHelper.createPath('comment', 'comment', true), commentController.createComment)
    .delete(appHelper.createPath('comment', 'comment', true), commentController.deleteComment);

module.exports = router;
