const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
    country: {type: 'String', required: false},
    city: {type: 'String', required: false},
    street: {type: 'String', required: false}
});

module.exports = mongoose.model('location', LocationSchema);
