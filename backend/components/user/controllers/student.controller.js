const studentService = require('../services/student.service');

function createStudent(paylreq, resoad) {

}

function deleteStudent(req, res) {

}

function getStudent(req, res) {
    res.send(req.params)
}

function getStudents(req, res) {
    res.send('hey')
}

module.exports = {
    createStudent,

    deleteStudent,

    getStudent,

    getStudents
};
