const studentService = require('../services/student.service');
const async = require('async');

function list(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        studentService.list
    ], function (err, result) {
        if (err) {
            res.send(err)
        }
        res.send(result.userStudents)
    });
}

function create(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        studentService.create
    ], function (err, result) {
        if (err) {
            res.send(err)
        }
        res.send(result.newStudent)
    });
}

function remove(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        studentService.remove
    ], function (err, result) {
        if (err) {
            res.send(err)
        }
        res.send(result.removedStudent)
    });
}

module.exports = {
    list,

    create,

    remove,
};
