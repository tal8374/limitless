const homeworkService = require('../services/homework.service');
const async = require('async');


function create(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        homeworkService.create
    ], function (err, result) {
        if (err) {
            res.send(err)
        }
        res.send(result.newHomework)
    });
}

function update(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        homeworkService.update
    ], function (err, result) {
        if (err) {
            res.send(err)
        }
        res.send(result.updatedHomework)
    });
}

module.exports = {
    create,

    update,
};
