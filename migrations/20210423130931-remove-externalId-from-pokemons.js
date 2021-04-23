'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('pokemons', 'externalId')
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('pokemons', 'externalId', { type: Sequelize.DataTypes.INTEGER })
  }
};
