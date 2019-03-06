const lessonService = require('../services/lesson.service');
const async = require('async');

function list(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        lessonService.list
    ], function (err, result) {
        if (err) {
            res.send(err)
        }
        res.send(result.userLessons)
    });
}

function create(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        lessonService.create
    ], function (err, result) {
        if (err) {
            res.send(err)
        }
        res.send(result.newLesson)
    });
}

function update(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        lessonService.update
    ], function (err, result) {
        if (err) {
            res.send(err)
        }
        res.send(result.updatedLesson)
    });
}

function get(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        lessonService.get
    ], function (err, result) {
        if (err) {
            res.send(err)
        }
        res.send(result.lesson)
    });
}

module.exports = {
    list,

    create,

    update,

    get
};
