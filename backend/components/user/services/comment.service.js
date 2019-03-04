const Comment = require("../../comment/models/comment.model");
const userService = require('../services/user.service');
const commentService = require('../../comment/services/comment.service');
const async = require('async');

function getUserComments(payload, callback) {
    const user = payload.user;

    if (user && user.comments) {
        payload.userComments = user.comments;
    } else {
        payload.userComments = [];
    }

    callback(null, payload);
}

function createSearchUserQuery(payload, callback) {
    payload.query = {_id: payload.req.params.userId};

    callback(null, payload);
}

function list(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        createSearchUserQuery,
        userService.get,
        getUserComments,
    ], function (err, result) {
        if (err) {
            callback(err)
        }
        callback(null, result);
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

function addCommentToUser(payload, callback) {
    const user = payload.for;
    const newComment = payload.newComment;

    user.comments.push(newComment._id);


    return user
        .save()
        .then((comment) => {
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
        commentService.create,
        addCommentToUser
    ], function (err, result) {
        if (err) {
            callback(err)
        }

        callback(null, payload);
    });
}

function remove(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        createSearchForCommentQuery,
        commentService.remove,
    ], function (err, result) {
        if (err) {
            callback(err)
        }
        callback(null, payload);
    });
}

function createSearchForCommentQuery(payload, callback) {
    payload.query = {_id: payload.req.params.commentId};

    callback(null, payload);
}

function update(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        createSearchForCommentQuery,
        commentService.update,
    ], function (err, result) {
        if (err) {
            callback(err)
        }
        callback(null, payload);
    });
}

module.exports = {
    list,

    create,

    remove,

    update
};
