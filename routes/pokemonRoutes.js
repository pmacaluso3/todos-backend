const pokemonRoutes = require('express').Router()
const pokemonController = require('../controllers/pokemonController')

pokemonRoutes.get('/', pokemonController.index)
pokemonRoutes.post('/', pokemonController.create)
pokemonRoutes.delete('/:id', pokemonController.delete)

module.exports = pokemonRoutes