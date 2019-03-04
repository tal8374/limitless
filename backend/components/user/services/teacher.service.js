const User = require('../models/user.model');
const userService = require('../services/user.service');
const async = require('async');

function getUserTeachers(payload, callback) {
    const user = payload.user;

    if (user && user.teachers) {
        payload.userTeachers = user.teachers;
    } else {
        payload.userTeachers = [];
    }

    callback(null, payload);
}

function createSearchUserQuery(payload, callback) {
    payload.query = {_id: payload.req.params.userId};

    callback(null, payload);
}

function list(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        createSearchUserQuery,
        userService.get,
        getUserTeachers,
    ], function (err, result) {
        if (err) {
            callback(err)
        }
        callback(null, result);
    });
}

function createSearchForUserQuery(payload, callback) {
    payload.query = {_id: payload.req.body.for};

    callback(null, payload);
}

function updateForUser(payload, callback) {
    payload.req.body.for = payload.user;

    callback(null, payload);
}

function populateForUser(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        createSearchForUserQuery,
        userService.get,
        updateForUser
    ], function (err, result) {
        if (err) {
            callback(err)
        }
        payload.for = result.user;

        callback(null, payload);
    });
}

function createUserQuery(payload, callback) {
    payload.query = {_id: payload.req.params.userId};

    callback(null, payload);
}

function populateUser(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        createUserQuery,
        userService.get,
    ], function (err, result) {
        if (err) {
            callback(err)
        }
        payload.by = result.user;
        callback(null, payload);
    });
}

function addTeacherToUser(payload, callback) {
    const user = payload.user;
    const newTeacher = payload.req.body.teacher;
    payload.newTeacher = newTeacher;
    user.teachers.push(newTeacher);

    return user
        .save()
        .then((comment) => {
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
        populateUser,
        addTeacherToUser
    ], function (err, result) {
        if (err) {
            callback(err)
        }

        callback(null, payload);
    });
}

function remove(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        createSearchUserQuery,
        userService.get,
        createRemoveTeacherQuery,
        removeTeacher
    ], function (err, result) {
        if (err) {
            callback(err)
        }
        callback(null, payload);
    });
}

function createRemoveTeacherQuery(payload, callback) {
    payload.query = {_id: payload.req.params.teacherId};

    callback(null, payload);
}

function removeTeacher(payload, callback) {
    return User.UserModel
        .remove(payload.query)
        .exec()
        .then((removedTeacher) => {
            payload.removedTeacher = removedTeacher;
            callback(null, payload)
        })
        .catch((err) => {
            callback(err);
        });
}

module.exports = {
    list,

    create,

    remove,
};
