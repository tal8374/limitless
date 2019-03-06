const userService = require('../../user/services/user.service');
const lessonService = require('../services/lesson.service');
const Homework = require("../../homework/models/homework.model");
const async = require('async');
const _ = require('lodash');

function createSearchCreateByQuery(payload, callback) {
    payload.query = {_id: payload.req.body.createdBy};

    callback(null, payload);
}

function updateCreatedBy(payload, callback) {
    payload.req.body.createdBy = payload.user;

    callback(null, payload);
}

function populateCreateBy(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        createSearchCreateByQuery,
        userService.get,
        updateCreatedBy
    ], function (err, result) {
        if (err) {
            callback(err)
        }

        callback(null, payload);
    });
}

function createSearchCreatedForQuery(payload, callback) {
    payload.query = {_id: payload.req.body.createdFor};

    callback(null, payload);
}

function updateCreatedFor(payload, callback) {
    payload.req.body.createdFor = payload.user;

    callback(null, payload);
}

function populateCreatedFor(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        createSearchCreatedForQuery,
        userService.get,
        updateCreatedFor,
    ], function (err, result) {
        if (err) {
            callback(err)
        }

        callback(null, payload);
    });
}

function addHomeworkToLesson(payload, callback) {
    const newHomework = payload.newHomework;
    const lesson = payload.lesson;

    lesson.homework = newHomework;

    return lesson
        .save()
        .then((homework) => {
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function createHomework(payload, callback) {
    const newLesson = new Homework.HomeworkModel(payload.req.body);

    newLesson
        .save()
        .then((newHomework) => {
            payload.newHomework = newHomework;
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
        populateCreateBy,
        populateCreatedFor,
        createHomework,
        addHomeworkToLesson
    ], function (err, result) {
        if (err) {
            callback(err)
        }

        callback(null, payload);
    });
}

function updateHomework(payload, callback) {
    const lesson = payload.lesson;

    lesson.homework = _.merge(lesson.homework, payload.req.body);
    payload.updatedHomework = lesson.homework;

    lesson
        .save()
        .then((homework) => {
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
        updateHomework
    ], function (err, result) {
        if (err) {
            callback(err)
        }

        callback(null, payload);
    });
}

module.exports = {
    create,

    update,
};
