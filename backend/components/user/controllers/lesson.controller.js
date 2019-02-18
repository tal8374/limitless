const lessonService = require('../services/lesson.service');

function createLesson(req, res) {
    res.send(req.params);
}

function deleteLesson(req, res) {
    res.send('hey');
}

function getLesson(req, res) {
    res.send(req.params);
}

function updateLesson(req, res) {

}

function getLessons(req, res) {
    res.send('hey');

}

module.exports = {
    createLesson,

    deleteLesson,

    getLesson,

    updateLesson,

    getLessons
};
