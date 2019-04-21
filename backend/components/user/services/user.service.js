const Lesson = require("../../lesson/models/lesson.model");
const User = require("../models/user.model");

function list(payload, callback) {
    console.log(payload.req.query)
    return User.UserModel
        .find(payload.req.query)
        .populate({
            path: 'messages',
            model: 'Message',
            populate: [{
                path: 'for',
                model: 'User'
            }, {
                path: 'by',
                model: 'User'
            }]
        })
        .populate('comments')
        .populate('students')
        .populate('teachers')
        .populate('lessons')
        .exec()
        .then((users) => {
            payload.users = users;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function create(payload, callback) {
    const newUser = new User.UserModel(payload.req.body);

    return newUser
        .save()
        .then((newUser) => {
            payload.newUser = newUser;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function get(payload, callback) {
    User.UserModel
        .findOne(payload.query)
        .populate('comments')
        .populate('students')
        .populate('teachers')
        .populate('lessons')
        .populate('messages')
        .exec()
        .then((user) => {
            payload.user = user;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function remove(payload, callback) {
    return User.UserModel
        .remove({_id: payload.req.params.userId})
        .exec()
        .then((removedUser) => {
            payload.removedUser = removedUser;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function update(payload, callback) {
    console.log(payload.req.params)
    return User.UserModel
        .findByIdAndUpdate({_id: payload.req.params.userId}, payload.req.body)
        .exec()
        .then((updatedUser) => {
            console.log(updatedUser)
            payload.updatedUser = updatedUser;
            callback(null, payload);
        })
        .catch((err) => {
            // console.log(err)
            callback(err);
        });
}


module.exports = {
    list,

    get,

    remove,

    update,

    create
};
