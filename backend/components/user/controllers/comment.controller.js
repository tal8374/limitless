const commentService = require('../services/comment.service');
const async = require('async');

function list(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        commentService.list
    ], function (err, result) {
        if (err) {
            res.send(err)
        }
        res.send(result.userComments)
    });
}

function create(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        commentService.create
    ], function (err, result) {
        if (err) {
            res.send(err)
        }
        res.send(result.newComment)
    });
}

function remove(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        commentService.remove
    ], function (err, result) {
        if (err) {
            res.send(err)
        }
        res.send(result.removedComment)
    });
}

function update(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        commentService.update
    ], function (err, result) {
        if (err) {
            res.send(err)
        }
        res.send(result.updatedComment)
    });
}

module.exports = {
    list,

    create,

    remove,

    update
};
