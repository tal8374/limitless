const locationService = require('../services/location.service');
const async = require('async');


function create(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        locationService.create
    ], function (err, result) {
        if (err) {
            res.send(err)
        }
        res.send(result.newLocation)
    });
}

function update(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        locationService.update
    ], function (err, result) {
        if (err) {
            res.send(err)
        }
        res.send(result.updatedLocation)
    });
}

module.exports = {
    create,

    update,
};
