const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = require('../../user/model/user.model');
const WordSchema = require('./word.model');
const EssaySchema = require('./essay.model');
const GrammarSchema = require('./grammar.model');

const TodoSchema = new Schema({
    dueDate: {type: 'Date', required: true},
    createdBy: {type: UserSchema, required: true},
    createdFor: {type: UserSchema, required: true},
    words: {type: [WordSchema], required: false},
    grammar: {type: [GrammarSchema], required: false},
    essay: {type: EssaySchema, required: false},
});

module.exports = mongoose.model('todo', TodoSchema);
