const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Location = require('../../location/models/location.model');

const UserSchema = new Schema({
    firstName: {type: 'String'},
    lastName: {type: 'String'},
    dateOfBirth: {type: 'Date'},
    lastActive: {type: 'Date', default: Date.now()},
    phone: {type: 'String'},
    email: {type: 'String', unique: true},
    password: {type: 'String'},
    roles: {type: Array, default: ['student']},
    photo: {type: 'String'},
    students: [{type: Schema.Types.ObjectId, ref: "User"}],
    messages: [{type: Schema.Types.ObjectId, ref: "Message"}],
    teachers: [{type: Schema.Types.ObjectId, ref: "User"}],
    lessons: [{type: Schema.Types.ObjectId, ref: "Lesson"}],
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
    from: {type: Location.LocationSchema},
    teachingLocations: [{type: Location.LocationSchema}],
    learningLocations: [{type: Location.LocationSchema}],
});

module.exports = {
    UserSchema: UserSchema,
    UserModel: mongoose.model('User', UserSchema)
};
