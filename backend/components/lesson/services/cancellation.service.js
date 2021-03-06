const userService = require('../../user/services/user.service');
const lessonService = require('../services/lesson.service');
const async = require('async');
const _ = require('lodash');

function createSearchTeacherQuery(payload, callback) {
    payload.query = {_id: payload.req.body.teacher};

    callback(null, payload);
}

function updateTeacher(payload, callback) {
    payload.req.body.teacher = payload.user;

    callback(null, payload);
}

function populateTeacher(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        createSearchTeacherQuery,
        userService.get,
        updateTeacher
    ], function (err, result) {
        if (err) {
            callback(err)
        }
        payload.teacher = result.user;

        callback(null, payload);
    });
}

function createByQuery(payload, callback) {
    payload.query = {_id: payload.req.body.by};

    callback(null, payload);
}

function updateBy(payload, callback) {
    payload.req.body.by = payload.user;

    callback(null, payload);
}

function populateBy(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        createByQuery,
        userService.get,
        updateBy,
    ], function (err, result) {
        if (err) {
            callback(err)
        }
        payload.student = result.user;
        callback(null, payload);
    });
}

function createCancellation(payload, callback) {
    const lesson = payload.lesson;

    lesson.cancellation = payload.req.body;

    lesson
        .save()
        .then((newCancellation) => {
            payload.newCancellation = newCancellation;
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
        lessonService.get,
        populateBy,
        createCancellation,
    ], function (err, result) {
        if (err) {
            callback(err)
        }

        callback(null, payload);
    });
}

function updateCancellation(payload, callback) {
    const lesson = payload.lesson;

    lesson.cancellation = _.merge(lesson.cancellation, payload.req.body);

    lesson
        .save()
        .then((updatedCancellation) => {
            payload.updatedCancellation = updatedCancellation
            callback(null, payload);
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
        lessonService.get,
        updateCancellation
    ], function (err, result) {
        if (err) {
            callback(err)
        }

        callback(null, payload);
    });
}

module.exports = {
    create,

    update
};
