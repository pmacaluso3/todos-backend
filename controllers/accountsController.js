const models = require('../models')

const accountsController = {}

accountsController.create = (req, res, next) => {
  models.account.create()
  .then((account) => {
    res.locals.data = { account }
    next()
  })
}

module.exports = accountsController