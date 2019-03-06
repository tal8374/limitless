const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require('../../user/models/user.model');
const Comment = require('../../comment/models/comment.model');
const Location = require('../../location/models/location.model');
const Homework = require('../../homework/models/homework.model');
const Cancellation = require('../../lesson/models/cancellation.model');

const LessonSchema = new Schema({
    teacher: {type: User.UserSchema, required: true},
    student: {type: User.UserSchema, required: true},
    comments: [{type: Comment.CommentSchema}],
    location: {type: Location.LocationSchema},
    cancellation: {type: Cancellation.CancellationSchema},
    homework: {type: Homework.HomeworkSchema},
    date: {type: 'Date', required: true},
    createdAt: {type: 'Date', default: new Date()},
    price: {type: 'Number'},
    type: {type: 'String', required: true}
});

module.exports = {
    LessonSchema: LessonSchema,
    LessonModel: mongoose.model('Lesson', LessonSchema)
};

