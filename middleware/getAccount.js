const models = require('../models')

const getAccount = (req, res, next) => {
  models.account.findOne({
    where: { key: req.params.key }
  })
  .then((account) => {
    req.account = account
    next()
  })
  .catch((error) => { next(error) })
}

module.exports = getAccount