const teachingLocationService = require('../services/teaching-location.service');
const userService = require('../services/user.service');
const async = require('async');

function list(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        teachingLocationService.list,
    ], function (err, result) {
        if (err) {
            res.send(err)
        }
        res.send(result.userTeachingLocation)
    });
}

function create(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        teachingLocationService.create
    ], function (err, result) {
        if (err) {
            res.send(err)
        }
        res.send(result.newTeachingLocation)
    });
}

function remove(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        teachingLocationService.remove
    ], function (err, result) {
        if (err) {
            res.send(err)
        }
        res.send(result.removedTeachingLocation)
    });
}

function update(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        teachingLocationService.update
    ], function (err, result) {
        if (err) {
            res.send(err)
        }
        res.send(result)
    });
}

module.exports = {
    list,

    create,

    remove,

    update
};
