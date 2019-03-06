const userService = require('../../user/services/user.service');
const lessonService = require('../services/lesson.service');
const Location = require("../../location/models/location.model");
const async = require('async');
const _ = require('lodash');

function addLocationToLesson(payload, callback) {
    const newHomework = payload.newLocation;
    const lesson = payload.lesson;

    lesson.location = newHomework;

    return lesson
        .save()
        .then((lesson) => {
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function createLocation(payload, callback) {
    const newLocation = new Location.LocationModel(payload.req.body);

    newLocation
        .save()
        .then((newLocation) => {
            payload.newLocation = newLocation;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function create(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        lessonService.get,
        createLocation,
        addLocationToLesson
    ], function (err, result) {
        if (err) {
            callback(err)
        }

        callback(null, payload);
    });
}

function updateLocation(payload, callback) {
    const lesson = payload.lesson;

    lesson.location = _.merge(lesson.location, payload.req.body);
    payload.updatedLocation = lesson.location;

    lesson
        .save()
        .then((location) => {
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function update(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        lessonService.get,
        updateLocation
    ], function (err, result) {
        if (err) {
            callback(err)
        }

        callback(null, payload);
    });
}

module.exports = {
    create,

    update,
};
