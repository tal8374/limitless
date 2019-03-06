const Comment = require("../../comment/models/comment.model");
const lessonService = require('./lesson.service');
const commentService = require('../../comment/services/comment.service');
const async = require('async');

function getLessonComments(payload, callback) {
    const lesson = payload.lesson;

    if (lesson && lesson.comments) {
        payload.lessonComments = lesson.comments;
    } else {
        payload.lessonComments = [];
    }

    callback(null, payload);
}

function createSearchLessonQuery(payload, callback) {
    payload.query = {_id: payload.req.params.lessonId};

    callback(null, payload);
}

function list(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        createSearchLessonQuery,
        lessonService.get,
        getLessonComments,
    ], function (err, result) {
        if (err) {
            callback(err)
        }
        callback(null, result);
    });
}

function addCommentToLesson(payload, callback) {
    const lesson = payload.lesson;
    const newComment = payload.newComment;

    lesson.comments.push(newComment);

    return lesson
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
        commentService.create,
        createSearchLessonQuery,
        lessonService.get,
        addCommentToLesson
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

function updateComment(payload, callback) {
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

function update(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        createSearchForCommentQuery,
        updateComment
    ], function (err, result) {
        if (err) {
            callback(err)
        }
        callback(null, payload);
    });
}

function get(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        commentService.get
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

    update,

    get
};
