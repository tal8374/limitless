const commentService = require('../services/comment.service');

async function getComment(req, res) {
    const payload = {
        _id: req.params.commentId
    };

    const result = await commentService.getComment(payload);

    res.send(result)
}

async function getComments(req, res) {
    const comments = await commentService.getComments(req.body);

    res.send(comments)
}

async function createComment(req, res) {
    const result = await commentService.createComment(req.body);

    res.send(result)
}

async function deleteComment(req, res) {
    const result = await commentService.deleteComment(req.body);

    res.send(result)
}

async function updateComment(req, res) {
    const payload = {
        _id: req.params.commentId,
        ...req.body
    };

    const result = await commentService.updateComment(payload);

    res.send(result)
}

module.exports = {
    getComment,

    getComments,

    createComment,

    deleteComment,

    updateComment
};
