var express = require('express');
var router = express.Router();

const commentController = require('../controllers/comment.controller');

router
    .get('/', commentController.getComments);

router
    .get('/:commentId', commentController.getComment)
    .put('/:commentId', commentController.updateComment)
    .post('/:commentId', commentController.createComment)
    .delete('/:commentId', commentController.deleteComment);

module.exports = router;
