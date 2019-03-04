const User = require('../models/user.model');
const userService = require('../services/user.service');
const async = require('async');

function getUserStudents(payload, callback) {
    const user = payload.user;

    if (user && user.students) {
        payload.userStudents = user.students;
    } else {
        payload.userStudents = [];
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
        getUserStudents,
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

function addStudentToUser(payload, callback) {
    const user = payload.user;
    const newStudent = payload.req.body.student;
    payload.newStudent = newStudent;
    user.students.push(newStudent);

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
        addStudentToUser
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
        createRemoveStudentQuery,
        removeStudent
    ], function (err, result) {
        if (err) {
            callback(err)
        }
        callback(null, payload);
    });
}

function createRemoveStudentQuery(payload, callback) {
    payload.query = {_id: payload.req.params.studentId};

    callback(null, payload);
}

function removeStudent(payload, callback) {
    return User.UserModel
        .remove(payload.query)
        .exec()
        .then((removedStudent) => {
            payload.removedStudent = removedStudent;
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
