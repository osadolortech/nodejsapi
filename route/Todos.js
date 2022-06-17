const express = require('express')
const {getTodos,getTodoid,createTodo,updateTodo,deleteTodo} = require('../controllers/Todo')
const router = express.Router()

router.route('/').get(getTodos).post(createTodo)
router.route('/:id').get(getTodoid).put(updateTodo).delete(deleteTodo)

module.exports = router