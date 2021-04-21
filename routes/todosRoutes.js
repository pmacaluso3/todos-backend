const todosRoutes = require('express').Router()
const todosController = require('../controllers/todosController')

todosRoutes.get('/', todosController.index)

module.exports = todosRoutes