const lessonService = require('../services/lesson.service');

function getLesson(req, res) {
    res.send(req.params)
}

function getLessons(req, res) {
    res.send('hey')
}

function createLesson(req, res) {

}

function deleteLesson(req, res) {

}

function updateLesson(req, res) {

}

module.exports = {
    getLesson,

    getLessons,

    createLesson,

    deleteLesson,

    updateLesson
};
