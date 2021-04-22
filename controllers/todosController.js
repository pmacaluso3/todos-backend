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

todosController.create = (req, res, next) => {
  req.account.createTodo({
    description: req.body.description,
    completed: false
  })
  .then((todo) => {
    res.locals.data = { todo }
    next()
  })
  .catch((error) => { next(err) })
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

todosController.reset = (req, res, next) => {
  models.todo.update({
    completed: false
  }, {
    where: { accountId: req.account.id }
  })
  .then((updated) => {
    res.json({ updated })
  })
  .catch((error) => next(error))
}

module.exports = todosController