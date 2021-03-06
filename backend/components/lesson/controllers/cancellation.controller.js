const cancellationService = require('../services/cancellation.service');
const async = require('async');

function create(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        cancellationService.create
    ], function (err, result) {
        if (err) {
            res.send(err)
        }
        res.send(result.newCancellation)
    });
}

function update(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        cancellationService.update
    ], function (err, result) {
        if (err) {
            res.send(err)
        }
        res.send(result.updatedCancellation)
    });
}

module.exports = {
    create,

    update,
};
