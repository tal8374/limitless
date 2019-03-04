const async = require('async');
const Location = require('../../location/models/location.model');
const User = require('../models/user.model');
const userService = require('../services/user.service');

function createSearchUserQuery(payload, callback) {
    payload.query = {_id: payload.req.params.userId};

    callback(null, payload);
}

function getUserTeachingLocation(payload, callback) {
    const user = payload.user;
    payload.userTeachingLocation = user.teachingLocations ? user.teachingLocations : [];

    callback(null, payload);
}

function list(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        createSearchUserQuery,
        userService.get,
        getUserTeachingLocation,
    ], function (err, result) {
        if (err) {
            callback(err)
        }
        callback(null, result);
    });
}

function create(payload, callback) {
    User.UserModel.findOneAndUpdate(
        {"_id": payload.req.params.userId},
        {
            $push: {
                teachingLocations: payload.req.body
            }
        })
        .then((newTeachingLocation) => {
            payload.newTeachingLocation = newTeachingLocation;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function remove(payload, callback) {
    const teachingLocationId = payload.req.params.teachingLocationId;
    const userId = payload.req.params.userId;

    User.UserModel
        .findByIdAndUpdate(userId,
            {$pull: {teachingLocations: {_id: {$eq: teachingLocationId}}}},
            function (err, removedTeachingLocation) {
                if (err) {
                    callback(err);
                } else {
                    payload.removedTeachingLocation = removedTeachingLocation
                    callback(null, payload);
                }
            }
        );
}

function update(payload, callback) {
    const teachingLocationId = payload.req.params.teachingLocationId;
    const userId = payload.req.params.userId;
    const newTeachingLocation = payload.req.body;

    User.UserModel.findOneAndUpdate(
        {"_id": userId, "teachingLocations._id": teachingLocationId},
        {
            "$set": {
                "teachingLocations.$": newTeachingLocation
            }
        },
        function (err, doc) {
            if (err) {
                callback(err);
            } else {
                callback(null, doc);
            }
        }
    );
}

module.exports = {
    list,

    create,

    remove,

    update
};
