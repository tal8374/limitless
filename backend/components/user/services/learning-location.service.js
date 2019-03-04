const async = require('async');
const Location = require('../../location/models/location.model');
const User = require('../models/user.model');
const userService = require('../services/user.service');

function createSearchUserQuery(payload, callback) {
    payload.query = {_id: payload.req.params.userId};

    callback(null, payload);
}

function getUserLearningLocation(payload, callback) {
    const user = payload.user;
    payload.userLearningLocation = user.learningLocations ? user.learningLocations : [];

    callback(null, payload);
}

function list(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        createSearchUserQuery,
        userService.get,
        getUserLearningLocation,
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
                learningLocations: payload.req.body
            }
        })
        .then((newLearningLocation) => {
            payload.newLearningLocation = newLearningLocation;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function remove(payload, callback) {
    const learningLocationId = payload.req.params.learningLocationId;
    const userId = payload.req.params.userId;

    User.UserModel
        .findByIdAndUpdate(userId,
            {$pull: {learningLocations: {_id: {$eq: learningLocationId}}}},
            function (err, removedLearningLocation) {
                if (err) {
                    callback(err);
                } else {
                    payload.removedLearningLocation = removedLearningLocation
                    callback(null, payload);
                }
            }
        );
}

function update(payload, callback) {
    const learningLocationId = payload.req.params.learningLocationId;
    const userId = payload.req.params.userId;
    const newLearningLocation = payload.req.body;

    User.UserModel.findOneAndUpdate(
        {"_id": userId, "learningLocations._id": learningLocationId},
        {
            "$set": {
                "learningLocations.$": newLearningLocation
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
