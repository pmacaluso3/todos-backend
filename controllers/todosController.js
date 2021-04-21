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

module.exports = todosController