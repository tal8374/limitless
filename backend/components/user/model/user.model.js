const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const LocationSchema = require('../../location/model/location.model');

const UserSchema = new Schema({
    firstName: { type: 'String', required: true },
    lastName: { type: 'String', required: true },
    registerAt: { type: 'Date', required: true },
    dateOfBirth: { type: 'Date', required: true },
    lastActive: { type: 'Date', required: true },
    phone: { type: 'String', required: true },
    email: { type: 'String', required: true, unique: true },
    password: { type: 'String', required: true },
    role: { type: ['String'], required: true },
    photo: { type: 'String', required: true },
    students: { type: [Schema.Types.ObjectId], ref: "user" , required: true },
    teachers: { type: [Schema.Types.ObjectId], ref: "user" , required: true },
    lessons: { type: [Schema.Types.ObjectId], ref: "lesson" , required: true },
    comments: { type: [Schema.Types.ObjectId], ref: "comment" , required: true },
    from: { type: LocationSchema, required: true },
    teachingLocations: { type: LocationSchema, required: true },
    learningLocations: { type: LocationSchema, required: true },
});

module.exports = {
    UserSchema: UserSchema,
    UserModel: mongoose.model('user', UserSchema)
};
