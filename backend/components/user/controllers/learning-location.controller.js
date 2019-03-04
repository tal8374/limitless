const learningLocationService = require('../services/learning-location.service');
const userService = require('../services/user.service');
const async = require('async');

function list(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        learningLocationService.list,
    ], function (err, result) {
        if (err) {
            res.send(err)
        }
        res.send(result.userLearningLocation)
    });
}

function create(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        learningLocationService.create
    ], function (err, result) {
        if (err) {
            res.send(err)
        }
        res.send(result.newLearningLocation)
    });
}

function remove(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        learningLocationService.remove
    ], function (err, result) {
        if (err) {
            res.send(err)
        }
        res.send(result.removedLearningLocation)
    });
}

function update(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        learningLocationService.update
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
