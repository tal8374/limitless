const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
    country: {type: 'String'},
    city: {type: 'String'},
    street: {type: 'String'}
});

module.exports = {
    LocationModel: mongoose.model('Location', LocationSchema),
    LocationSchema: LocationSchema
};
