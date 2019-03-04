const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Location = require('../../location/models/location.model');

const UserSchema = new Schema({
    firstName: {type: 'String', required: true},
    lastName: {type: 'String', required: true},
    registerAt: {type: 'Date', default: Date.now()},
    dateOfBirth: {type: 'Date'},
    lastActive: {type: 'Date'},
    phone: {type: 'String'},
    email: {type: 'String', required: true, unique: true},
    password: {type: 'String', required: true},
    role: [{type: 'String'}],
    photo: {type: 'String'},
    students: [{type: Schema.Types.ObjectId, ref: "User"}],
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
