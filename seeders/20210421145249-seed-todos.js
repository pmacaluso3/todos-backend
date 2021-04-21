'use strict';

const models = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await models.todo.bulkCreate([
      {
        description: "water the plants",
        completed: true
      },
      {
        description: "feed the dogs",
        completed: false
      },
      {
        description: "take the dog to the vet",
        completed: false
      },
      {
        description: "plant a tree",
        completed: false
      },
      {
        description: "start my tax return",
        completed: false
      },
      {
        description: "apply to startup",
        completed: true
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await models.todo.destroy({ where: {} })
  }
};
