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
        res.send(result.lessonComments)
    });
}

function get(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        commentService.get
    ], function (err, result) {
        if (err) {
            res.send(err)
        }
        res.send(result.comment)
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
            res.status(400).send(err)
        }
        res.send(result.newComment)
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

    update,

    get
};
