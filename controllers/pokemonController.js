const models = require('../models')

const pokemonController = {}

pokemonController.index = (req, res, next) => {
  req.account.getPokemons()
  .then((pokemon) => {
    res.locals.data = { pokemon }
    next()
  })
  .catch((error) => { next(error) })
}

pokemonController.create = (req, res, next) => {
  req.account.createPokemon({
    externalId: req.body.externalId
  })
  .then((todo) => {
    res.locals.data = { todo }
    next()
  })
  .catch((error) => { next(error) })
}

pokemonController.delete = (req, res, next) => {
  req.account.getPokemons({ where: { id: req.params.id }})
  .then((todos) => {
    todos[0].destroy().then((pokemon) => {
      res.locals.data = { pokemon }
      next()
    })
  })
  .catch((error) => { next(error) })
}

module.exports = pokemonController