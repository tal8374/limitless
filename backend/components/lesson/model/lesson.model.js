const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = require('../../user/model/user.model');
const CommentSchema = require('../../comment/model/comment.model');
const LocationSchema = require('../../location/model/location.model');
const TodoSchema = require('../../todo/model/todo.model');
const CancellationSchema = require('../../lesson/model/cancellation.model');

const LessonSchema = new Schema({
    teacher: {type: UserSchema, required: true},
    student: {type: UserSchema, required: true},
    comment: {type: CommentSchema, required: false},
    location: {type: LocationSchema, required: false},
    cancellation: {type: CancellationSchema, required: false},
    todo: {type: TodoSchema, required: false},
    date: {type: 'Date', required: true},
    createdAt: {type: 'Date', required: true, default: new Date()},
    price: {type: 'Number', required: false},
    type: {type: 'String', required: true}
});

module.exports = LessonSchema;
