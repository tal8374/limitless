const userService = require('../services/user.service');

function getUsers(req, res) {
    res.send('hello')
}

function getUser(req, res) {
    res.send(req.params)
}

function createUser(req, res) {

}

function deleteUser(req, res) {

}

function updateUser(req, res) {

}

module.exports = {
    getUsers,

    getUser,

    deleteUser,

    updateUser,

    createUser
};
