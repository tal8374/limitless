var express = require('express');
var router = express.Router();

const wordController = require('../controllers/word.controller');

// router
//     .get('/', wordController.getWords);
//
// router
//     .get('/:wordId', wordController.getWord)
//     .put('/:wordId', wordController.updateWord)
//     .post('/:wordId', wordController.createWord)
//     .delete('/:wordId', wordController.deleteWord);

module.exports = router;
