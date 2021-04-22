const models = require('../models')

const getAccount = (req, res, next) => {
  models.account.findOne({
    where: { key: req.params.key }
  })
  .then((account) => {
    if (account) {
      req.account = account
      next()
    } else {
      next(new Error('Account not found'))
    }
  })
  .catch((error) => { next(error) })
}

module.exports = getAccount