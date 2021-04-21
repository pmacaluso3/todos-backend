const todosRoutes = require('express').Router()
const todosController = require('../controllers/todosController')

todosRoutes.get('/', todosController.index)
todosRoutes.put('/:id', todosController.update)

module.exports = todosRoutes