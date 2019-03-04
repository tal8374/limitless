const teacherService = require('../services/teacher.service');
const async = require('async');

function list(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        teacherService.list
    ], function (err, result) {
        if (err) {
            res.send(err)
        }
        res.send(result.userTeachers)
    });
}

function create(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        teacherService.create
    ], function (err, result) {
        if (err) {
            res.send(err)
        }
        res.send(result.newTeacher)
    });
}

function remove(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        teacherService.remove
    ], function (err, result) {
        if (err) {
            res.send(err)
        }
        res.send(result.removedTeacher)
    });
}

module.exports = {
    list,

    create,

    remove,
};
