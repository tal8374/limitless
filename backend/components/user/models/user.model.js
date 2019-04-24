const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Location = require('../../location/models/location.model');

const UserSchema = new Schema({
    firstName: {type: 'String'},
    lastName: {type: 'String'},
    dateOfBirth: {type: 'Date'},
    lastActive: {type: 'Date', default: Date.now()},
    photo: {
        type: 'String',
        default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq85eQiwm-1FpHkbvS2gYIkmF8AYK-ycFHCtzUODpaJl2lbZ-f'
    },
    description: {type: 'String'},
    email: {type: 'String', unique: true, required: true},
    password: {type: 'String', required: true},
    roles: {type: Array, default: ['teacher']},
    phone: {type: 'String'},
    students: [{type: Schema.Types.ObjectId, ref: "User"}],
    messages: [{type: Schema.Types.ObjectId, ref: "Message"}],
    teachers: [{type: Schema.Types.ObjectId, ref: "User"}],
    lessons: [{type: Schema.Types.ObjectId, ref: "Lesson"}],
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
    from: {type: Location.LocationSchema, default: Location.LocationSchema},
    teachingLocations: [{type: Location.LocationSchema}],
    learningLocations: [{type: Location.LocationSchema}],
});

module.exports = {
    UserSchema: UserSchema,
    UserModel: mongoose.model('User', UserSchema)
};
