var express = require('express');
var router = express.Router();

const todoController = require('../controllers/todo.controller');

// router
//     .get('/', todoController.getTodos);
//
// router
//     .get('/:todoId', todoController.getTodo)
//     .put('/:todoId', todoController.updateTodo)
//     .post('/:todoId', todoController.createTodo)
//     .delete('/:todoId', todoController.deleteTodo);

module.exports = router;
