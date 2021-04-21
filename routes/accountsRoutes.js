const accountsRoutes = require('express').Router()
const accountsController = require('../controllers/accountsController')

accountsRoutes.post('/', accountsController.create)

module.exports = accountsRoutes