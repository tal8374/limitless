const userService = require('../../user/services/user.service');
// const lessonService = require('../../lesson/services/lesson.service');
const Lesson = require("../models/lesson.model");
const async = require('async');

function getUserLessons(payload, callback) {
    const user = payload.user;

    if (user && user.lessons) {
        payload.userLessons = user.lessons;
    } else {
        payload.userLessons = [];
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
        getUserLessons,
    ], function (err, result) {
        if (err) {
            callback(err)
        }
        callback(null, result);
    });
}

function createSearchTeacherQuery(payload, callback) {
    payload.query = {_id: payload.req.body.teacher};

    callback(null, payload);
}

function updateTeacher(payload, callback) {
    payload.req.body.teacher = payload.user;

    callback(null, payload);
}

function populateTeacher(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        createSearchTeacherQuery,
        userService.get,
        updateTeacher
    ], function (err, result) {
        if (err) {
            callback(err)
        }
        payload.teacher = result.user;

        callback(null, payload);
    });
}

function createSearchStudentQuery(payload, callback) {
    payload.query = {_id: payload.req.body.student};

    callback(null, payload);
}

function updateStudent(payload, callback) {
    payload.req.body.student = payload.user;

    callback(null, payload);
}

function populateStudent(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        createSearchStudentQuery,
        userService.get,
        updateStudent,
    ], function (err, result) {
        if (err) {
            callback(err)
        }
        payload.student = result.user;
        callback(null, payload);
    });
}

function addLessonToStudent(payload, callback) {
    const student = payload.student;
    const newLesson = payload.newLesson;

    student.lessons.push(newLesson._id);

    return student
        .save()
        .then((lesson) => {
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function addLessonToTeacher(payload, callback) {
    const teacher = payload.teacher;
    const newLesson = payload.newLesson;

    teacher.lessons.push(newLesson._id);

    return teacher
        .save()
        .then((lesson) => {
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function createLesson(payload, callback) {
    const newLesson = new Lesson.LessonModel(payload.req.body);

    newLesson
        .save()
        .then((newLesson) => {
            payload.newLesson = newLesson;
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
        populateTeacher,
        populateStudent,
        createLesson,
        addLessonToStudent,
        addLessonToTeacher
    ], function (err, result) {
        if (err) {
            callback(err)
        }

        callback(null, payload);
    });
}

function update(payload, callback) {
    const lessonId = payload.req.params.lessonId;
    const newLessonData = payload.req.body;

    Lesson.LessonModel.update({_id: lessonId}, newLessonData)
        .then(function (updatedLesson) {
            payload.updatedLesson = updatedLesson
            callback(null, payload);
        })
        .catch(function (err) {
            callback(err);
        });
}

function get(payload, callback) {
    const lessonId = payload.req.params.lessonId;

    Lesson.LessonModel.findOne({_id: lessonId})
        .then(function (lesson) {
            payload.lesson = lesson;
            callback(null, payload);
        })
        .catch(function (err) {
            callback(err);
        });
}

module.exports = {
    list,

    create,

    update,

    get
};
