const Comment = require("../../comment/models/comment.model");
const async = require('async');
const userService = require('../../user/services/user.service');

function list(payload, callback) {
    return Comment.CommentModel
        .find(payload.query)
        .exec()
        .then((comments) => {
            payload.comments = comments;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function createSearchForUserQuery(payload, callback) {
    payload.query = {_id: payload.req.body.for};

    callback(null, payload);
}

function updateForUser(payload, callback) {
    payload.req.body.for = payload.user;

    callback(null, payload);
}


function populateForUser(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        createSearchForUserQuery,
        userService.get,
        updateForUser
    ], function (err, result) {
        if (err) {
            callback(err)
        }
        payload.for = result.user;

        callback(null, payload);
    });
}


function createSearchByUserQuery(payload, callback) {
    payload.query = {_id: payload.req.body.by};

    callback(null, payload);
}

function updateByUser(payload, callback) {
    payload.req.body.by = payload.user;

    callback(null, payload);
}

function populateByUser(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        createSearchByUserQuery,
        userService.get,
        updateByUser,
    ], function (err, result) {
        if (err) {
            callback(err)
        }
        payload.by = result.user;
        callback(null, payload);
    });
}

function createComment(payload, callback) {
    const newComment = new Comment.CommentModel(payload.req.body);

    newComment
        .save()
        .then((newComment) => {
            payload.newComment = newComment;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function create(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        populateForUser,
        populateByUser,
        createComment,
    ], function (err, result) {
        if (err) {
            callback(err)
        }

        callback(null, payload);
    });
}

function remove(payload, callback) {
    Comment.CommentModel
        .remove(payload.query)
        .exec()
        .then((removedComment) => {
            payload.removedComment = removedComment;
            callback(null, payload)
        })
        .catch((err) => {
            callback(err);
        });
}

function update(payload, callback) {
    Comment.CommentModel
        .findByIdAndUpdate(payload.query, payload.req.body)
        .exec()
        .then((updatedComment) => {
            payload.updatedComment = updatedComment;
            callback(null, payload)
        })
        .catch((err) => {
            callback(err);
        });
}

function get(payload, callback) {
    Comment.CommentModel
        .findOne(payload.query)
        .exec()
        .then((comment) => {
            payload.comment = comment;
            callback(null, payload)
        })
        .catch((err) => {
            callback(err);
        });
}

module.exports = {
    list,

    create,

    remove,

    update,

    get
};
