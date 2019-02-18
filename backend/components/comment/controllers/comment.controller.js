const commentService = require('../services/comment.service');

function getComment(req, res) {
    res.send(req.params)
}

function getComments(req, res) {
    res.send('hello')
}

function createComment(req, res) {

}

function deleteComment(req, res) {

}

function updateComment(req, res) {

}

module.exports = {
    getComment,

    getComments,

    createComment,

    deleteComment,

    updateComment
};
