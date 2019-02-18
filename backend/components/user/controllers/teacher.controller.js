const teacherService = require('../services/teacher.service');

function createTeacher(req, res) {
}

function deleteTeacher(req, res) {

}

function getTeacher(req, res) {
    res.send(req.params)

}

function getTeachers(req, res) {
    res.send('hey')

}

module.exports = {
    createTeacher,

    deleteTeacher,

    getTeacher,

    getTeachers
};
