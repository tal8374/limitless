var express = require('express');
var router = express.Router();

const commentController = require('../controllers/comment.controller');

router
    .get('/:userId/comment', commentController.getComments);

router
    .get('/:userId/comment/:commentId', commentController.getComment)
    .put('/:userId/comment/:commentId', commentController.updateComment)
    .post('/:userId/comment/:commentId', commentController.createComment)
    .delete('/:userId/comment/:commentId', commentController.deleteComment);

module.exports = router;
