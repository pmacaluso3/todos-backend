const models = require('../models')

const todosController = {}

todosController.index = (req, res, next) => {
  req.account.getTodos()
  .then((todos) => {
    res.locals.data = { todos }
    next()
  })
  .catch((error) => { next(error) })
}

todosController.update = (req, res, next) => {
  req.account.getTodos({ where: { id: req.params.id }})
  .then((todos) => {
    todos[0].update(req.body).then((updatedTodo) => {
      res.locals.data = { todo: updatedTodo }
      next()
    })
  })
  .catch((err) => { next(err) })
}

module.exports = todosController